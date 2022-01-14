import SignUpPage from '../../pages/SignUpPage';
import HomePage from '../../pages/HomePage';
import NavBar from '../../pages/NavBar';
import SignInPage from '../../pages/SigninPage';
import CampaignsPage from '../../pages/CampaignsPage';
const campaignsPage = new CampaignsPage();
const signInPage = new SignInPage();
const navBar = new NavBar();
const data = require('../../fixtures/data.json');
const homePage = new HomePage();
const signUpPage = new SignUpPage();
const randomNumber = Date.now() % 1000;
const name = data.firstName + randomNumber;
const email = name + '@test.com';
const updated = 'updated';

describe('Open user portal', function () {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  /*****************************************************/
  it('successfully loads', function () {
    cy.visit(data.povioURL);
  });

  it('Open Sign up page and create user', () => {
    signUpPage.clickOnHomeButton();
    navBar.clickSignUpTabButton();
    signUpPage.enterName(name);
    signUpPage.enterEmail(email);
    signUpPage.enterPassword(data.password);
    signUpPage.enterPasswordConfirmation(data.password);
    signUpPage.clickSignUpButton();
    signUpPage.checkSuccessfulSignUpMessage(data.signUpSuccessfulMessage);
    signUpPage.clickOnSignOutButton();
    homePage.checkSignOutMessage(data.signOutSuccessfulMessage);
  });
  it('Try to register with existing email', () => {
    signUpPage.clickSignUpTabButton();
    signUpPage.enterName(name);
    signUpPage.enterEmail(email);
    signUpPage.enterPassword(data.password);
    signUpPage.enterPasswordConfirmation(data.password);
    signUpPage.clickSignUpButton();
    signUpPage.checkEmailAlreadyTakenMessage(data.emailTakenMessage);
  });
  it('Check the flow for adding a campaign as a logged-in user', () => {
    navBar.clickSignInButton();
    signInPage.enterEmail(email);
    signInPage.enterPassword(data.password);
    signInPage.clickSignInButton();
    homePage.checkSignedInMessage(data.signedInSuccessfullyMessage);
    navBar.clickCampaigns();
    campaignsPage.clickAddNewCampaignsButton();
    campaignsPage.enterCampaignName(data.campaignName);
    campaignsPage.enterCampaignDescritpion(data.campaignDescription);
    campaignsPage.cickCreateCampaignButton();
    campaignsPage.checkCampaignMessage(data.campaignCreatedMessage);
    navBar.clickSignOutButton();
  });
  it('Check the flow for editing a campaign as a logged-in user', () => {
    navBar.clickSignInButton();
    signInPage.enterEmail(email);
    signInPage.enterPassword(data.password);
    signInPage.clickSignInButton();
    homePage.checkSignedInMessage(data.signedInSuccessfullyMessage);
    navBar.clickCampaigns();
    campaignsPage.clickEditCampaign();
    campaignsPage.enterCampaignName(updated);
    campaignsPage.enterCampaignDescritpion(updated);
    campaignsPage.clickUpdateCampaignButton();
    campaignsPage.checkCampaignUpdatedMessage(data.campaignUpdatedMessage);
    campaignsPage.clickDestroyCampaign();
    cy.on("window:confirm", () => {
        return true;
      });
    campaignsPage.checkCampaignDestroyMessage(data.campaignDestroyedMessage);
  });
});

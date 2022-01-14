import HomePage from '../../pages/HomePage';
import NavBar from '../../pages/NavBar';
const navBar = new NavBar();
const data = require('../../fixtures/data.json');
const homePage = new HomePage();

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
  it('Perform the health check of the app - Smoke', function () {
    homePage.checkWelcomeMessage(data.h3Text);
    homePage.checkPageTitle(data.homePageTittle);
    navBar.checkHomeButtonVisible();
    navBar.checkPovioLogoPresented();
    navBar.checkSignInButtonVisible();
    navBar.checkSignInButtonVisible();
  });
});

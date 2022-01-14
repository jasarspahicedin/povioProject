export default class NavBar {
  //********** Locators ***************/
  get PovioLogo() {
    return cy.get('svg');
  }
  get SignInButton() {
    return cy.get('a[href="/users/sign_in"]');
  }
  get SignUpTabButton() {
    return cy.get('a[href="/users/sign_up"]');
  }
  get HomeButton() {
    return cy.xpath('//a[text() = "Home"]');
  }
  get CampaignsButton() {
    return cy.get('a[href="/campaigns"]');
  }
  get SignOutButton() {
    return cy.get('a[href="/users/sign_out"]');
  }

  //********** Actions ***************/
  clickSignOutButton() {
    this.SignOutButton.click();
  }
  clickCampaigns() {
    this.CampaignsButton.click();
  }
  checkPovioLogoPresented() {
    this.PovioLogo.should('be.visible');
  }
  checkHomeButtonVisible() {
    this.HomeButton.should('be.visible');
  }
  checkSignInButtonVisible() {
    this.SignInButton.should('be.visible');
  }
  clickSignInButton() {
    this.SignInButton.click();
  }
  checkSignUpButtonVisible() {
    this.SignUpTabButton.should('be.visible');
  }
  clickSignUpTabButton() {
    this.SignUpTabButton.click();
  }
}

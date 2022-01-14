export default class SignInPage {
  //********** Locators ***************/
  get SignInButton() {
    return cy.get('input[type="submit"]');
  }
  get EmailInput() {
    return cy.get('input[id="user_email"]');
  }
  get Password() {
    return cy.get('input[id="user_password"]');
  }
  get SignUpTabButton() {
    return cy.get('a[href="/users/sign_up"]');
  }
  get SignUpButton() {
    return cy.get('a[class="right"]');
  }
  get HomeButton() {
    return cy.xpath('//a[text() = "Home"]');
  }

  //********** Actions ***************/
  checkPageTitle() {
    cy.title().should('eq', 'Virto Commerce');
  }
  clickPostponeButton() {
    this.PostponeButton.click();
  }
  checkSinginTile() {
    this.SinginTile.should('have.text', 'Sign in to Virto Commerce Manager');
  }
  enterEmail(email) {
    this.EmailInput.type(email);
  }
  enterPassword(password) {
    this.Password.type(password);
  }
  clickSignInButton() {
    this.SignInButton.click();
  }
}

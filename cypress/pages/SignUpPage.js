export default class SignUpPage {
  //********** Locators ***************/
  get SignUpButton() {
    return cy.get('input[type="submit"]');
  }
  get Name() {
    return cy.get('input[id="user_name"]');
  }
  get Email() {
    return cy.get('input[id="user_email"]');
  }
  get Password() {
    return cy.get('input[id="user_password"]');
  }
  get PasswordConfirmation() {
    return cy.get('input[id="user_password_confirmation"]');
  }
  get SignUpTabButton() {
    return cy.get('a[href="/users/sign_up"]');
  }
  get HomeButton() {
    return cy.xpath('//a[text() = "Home"]');
  }
  get SuccessfulSignUpMessage() {
    return cy.get('div[id="flash_notice"]');
  }
  get EmailAlreadyTakenMessage() {
    return cy.xpath('//div[@id="error_explanation"]//ul//li');
  }
  get SignOutButton() {
    return cy.get('a[href="/users/sign_out"]');
  }

  //********** Actions ***************/
  clickOnSignOutButton() {
    this.SignOutButton.click();
  }
  clickOnHomeButton() {
    this.HomeButton.click();
  }
  checkEmailAlreadyTakenMessage(emailTakenMessage) {
    this.EmailAlreadyTakenMessage.should('have.text', emailTakenMessage);
  }
  checkSuccessfulSignUpMessage(signUpSuccessfulMessage) {
    this.SuccessfulSignUpMessage.should('have.text', signUpSuccessfulMessage);
  }
  clickSignUpTabButton() {
    this.SignUpTabButton.click();
  }
  enterName(firstName) {
    this.Name.type(firstName);
  }
  enterEmail(email) {
    this.Email.type(email);
  }
  checkPageTitle() {
    cy.title().should('eq', 'Virto Commerce');
  }
  clickPostponeButton() {
    this.PostponeButton.click();
  }
  checkSinginTile() {
    this.SinginTile.should('have.text', 'Sign in to Virto Commerce Manager');
  }
  enterUsername(username) {
    this.Username.type(username);
  }
  enterPassword(password) {
    this.Password.type(password);
  }
  enterPasswordConfirmation(password) {
    this.PasswordConfirmation.type(password);
  }
  clickSignUpButton() {
    this.SignUpButton.click();
  }
}

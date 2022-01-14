export default class HomePage {
  //********** Locators ***************/
  get WelcomeMessage() {
    return cy.get('h3');
  }
  get Message() {
    return cy.get('div[id="flash_notice"]');
  }
  //********** Actions ***************/
  checkSignOutMessage(signOutSuccessfulMessage) {
    this.Message.should('have.text', signOutSuccessfulMessage);
  }
  checkSignedInMessage(signedInSuccessfullyMessage) {
    this.Message.should('have.text', signedInSuccessfullyMessage);
  }
  checkWelcomeMessage(h3Text) {
    this.WelcomeMessage.should('have.text', h3Text);
  }
  checkPageTitle(homePageTittle) {
    cy.title().should('eq', homePageTittle);
  }
}

export default class CampaignsPage {
  //********** Locators ***************/
  get AddNewCampaignsButton() {
    return cy.get('a[href="/campaigns/new"]');
  }
  get CampaignName() {
    return cy.get('input[name="campaign[name]"]');
  }
  get CampaignDescription() {
    return cy.get('input[name="campaign[description]"]');
  }
  get CreateCampaignButton() {
    return cy.get('input[type="submit"]');
  }
  get CampaignMessage() {
    return cy.get('div[id="flash_notice"]');
  }
  get DestroyCampaign() {
    return cy.xpath('//a[text()="Destroy"]');
  }
  get EditCampaign() {
    return cy.xpath('//a[text()="Edit"]');
  }
  get UpdateCampaignButton() {
    return cy.get('input[value="Update Campaign"]');
  }
  get EditUserButton() {
    return cy.get('a[href="/users/edit"]');
  }
  //********** Actions ***************/
  clickEditUserButton() {
    this.EditUserButton.click();
  }
  clickUpdateCampaignButton() {
    this.UpdateCampaignButton.click();
  }
  clickEditCampaign() {
    this.EditCampaign.click();
  }
  clickDestroyCampaign() {
    this.DestroyCampaign.click();
  }
  checkCampaignUpdatedMessage(campaignUpdatedMessage) {
    this.CampaignMessage.should('have.text', campaignUpdatedMessage);
  }
  checkCampaignDestroyMessage(campaignDestroyedMessage) {
    this.CampaignMessage.should('have.text', campaignDestroyedMessage);
  }
  checkCampaignMessage(campaignCreated) {
    this.CampaignMessage.should('have.text', campaignCreated);
  }
  clickAddNewCampaignsButton() {
    this.AddNewCampaignsButton.click();
  }
  enterCampaignName(campaignName) {
    this.CampaignName.type(campaignName);
  }
  enterCampaignDescritpion(campaignDescription) {
    this.CampaignDescription.type(campaignDescription);
  }
  cickCreateCampaignButton() {
    this.CreateCampaignButton.click();
  }
}

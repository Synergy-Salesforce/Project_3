/* 
  CHRISTOPHER BOAMAH MENSAH
  REVATURE LLC
*/
import { LightningElement, api } from 'lwc';

export default class ApplicationForm extends LightningElement {
  objectApiName = "Application__c";

  showMsg = false;
  autoCloseTime = 5000;

  @api
  recordId;

  FIRSTNAME = "First_Name__c";
  LASTNAME = "Last_Name__c";
  MOBILE = "Mobile__c";
  EMAIL = "Email__c";
  MOVEINDATE = "Move_In_Date__c";
  PROPERTY = "Property__c";
  UNIT = "Unit__c";

  handleSubmit(event) {
    event.preventDefault();
    const fields = event.detail.fields;
    this.template.querySelector('.light-form').submit(fields);
    this.handleReset()
    this.showMsg = true
    setTimeout(() => {
      this.showsuccess();
    }, this.autoCloseTime);
  }

  handleReset() {
    const inputFields = this.template.querySelectorAll('lightning-input-field');
    if (inputFields) {
      inputFields.forEach(field => {
        field.reset();  
      });
    }
  }

  showsuccess() {
    this.showMsg = false;
  }
}
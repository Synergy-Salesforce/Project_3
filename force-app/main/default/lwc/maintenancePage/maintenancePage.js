/* 
  CHRISTOPHER BOAMAH MENSAH
  REVATURE LLC
*/
import { LightningElement } from 'lwc';

export default class MaintenancePage extends LightningElement {

  objectApiName = "Maintenance__c";

  showMsg = false;
  autoCloseTime = 5000;

  NAME = "Name"
  PROPERTY = "Property__c"
  UNIT = "Unit__c";
  PHONE = "Phone__c";
  EMAIL = "Email__c";
  SUBJECT = "Subject__c";
  DESCRIPTION = "Description__c";

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
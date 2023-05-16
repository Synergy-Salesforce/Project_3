/* 
  CHRISTOPHER BOAMAH MENSAH
  REVATURE LLC
*/
import { LightningElement } from 'lwc';

export default class MaintenancePage extends LightningElement {

  objectApiName = "Case";

  showMsg = false;
  autoCloseTime = 5000;

  NAME = "SuppliedName"
  PROPERTY = "Property__c"
  UNIT = "Unit__c";
  PHONE = "SuppliedPhone";
  EMAIL = "SuppliedEmail";
  SUBJECT = "Subject";
  DESCRIPTION = "Description";

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
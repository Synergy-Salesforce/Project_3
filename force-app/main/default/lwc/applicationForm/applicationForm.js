/* 
  CHRISTOPHER BOAMAH MENSAH
  REVATURE LLC
*/
import { LightningElement, api } from 'lwc';
import APPLICATION_OBJECT from '@salesforce/schema/Application__c'; 
import FIRSTNAME_FIELD from '@salesforce/schema/Application__c.First_Name__c';
import LASTNAME_FIELD from '@salesforce/schema/Application__c.Last_Name__c';
import MOBILE_FIELD from '@salesforce/schema/Application__c.Mobile__c';
import EMAIL_FIELD from '@salesforce/schema/Application__c.Email__c';
import MOVEINDATE_FIELD from '@salesforce/schema/Application__c.Move_In_Date__c';
import PROPERTY_FIELD from '@salesforce/schema/Application__c.Property__c';
import UNIT_FIELD from '@salesforce/schema/Application__c.Unit__c';

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
    this.template.querySelector('.lightform').submit(fields);
    this.handleReset()
    this.showMsg = true
    setTimeout(() => {
      this.showsuccess();
    }, this.autoCloseTime);
  }

  handleReset() {
    const inputFields = this.template.querySelectorAll(
      'lightning-input-field'
    );
    if (inputFields) {
      inputFields.forEach(field => {
        field.reset();  
      });
    }
  }

  showsuccess() {
    this.showMsg = false;
  }
  // handleSuccess() {
  //   const susccessToastEvent = new ShowToastEvent({
  //     title: "Success",
  //     message: "Your application was submitted",
  //     variant: "success"
  //   });

  //   this.dispatchEvent(susccessToastEvent);
  //   const editForm = this.template.querySelector('lightning-record-form');
  //   editForm.recordId = null; 
  // }

  // handleCancel() {
  //   const cancelToastEvent = new ShowToastEvent({
  //     title: "Failure",
  //     message: "Your application was not submitted. Please contact support.",
  //     variant: "error"
  //   });
  // }
}
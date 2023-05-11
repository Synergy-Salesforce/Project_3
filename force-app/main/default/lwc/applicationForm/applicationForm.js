/* 
  CHRISTOPHER BOAMAH MENSAH
  REVATURE LLC
*/
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import APPLICATION_OBJECT from '@salesforce/schema/Application__c'; 
import FIRSTNAME_FIELD from '@salesforce/schema/Application__c.First_Name__c';
import LASTNAME_FIELD from '@salesforce/schema/Application__c.Last_Name__c';
import MOBILE_FIELD from '@salesforce/schema/Application__c.Mobile__c';
import EMAIL_FIELD from '@salesforce/schema/Application__c.Email__c';
import MOVEINDATE_FIELD from '@salesforce/schema/Application__c.Move_In_Date__c';
import PROPERTY_FIELD from '@salesforce/schema/Application__c.Property__c';
import UNIT_FIELD from '@salesforce/schema/Application__c.Unit__c';

export default class ApplicationForm extends LightningElement {
  objectApiName = APPLICATION_OBJECT;
  fields = [FIRSTNAME_FIELD, LASTNAME_FIELD, MOBILE_FIELD, EMAIL_FIELD, MOVEINDATE_FIELD, PROPERTY_FIELD, UNIT_FIELD];

  handleSuccess() {
    const susccessToastEvent = new ShowToastEvent({
      title: "Success",
      message: "Your application was submitted",
      variant: "success"
    });

    this.dispatchEvent(susccessToastEvent);
    const editForm = this.template.querySelector('lightning-record-form');
    editForm.recordId = null; 
  }

  handleCancel() {
    const cancelToastEvent = new ShowToastEvent({
      title: "Failure",
      message: "Your application was not submitted. Please contact support.",
      variant: "error"
    });
  }
}

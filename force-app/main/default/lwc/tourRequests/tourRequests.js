import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import AVAILABLE_DATE from '@salesforce/schema/Tour_Request__c.Available_Date__c';
import PROPERTY from '@salesforce/schema/Tour_Request__c.Property__c';
import EMAIL from '@salesforce/schema/Tour_Request__c.Email__c';
import PHONE from '@salesforce/schema/Tour_Request__c.Phone__c';
import NAME from '@salesforce/schema/Tour_Request__c.Name__c';
export default class TourRequests extends LightningElement {
/*
    objectApiName = "Tour_Request__c";
    fields = [NAME, EMAIL, PHONE, PROPERTY, AVAILABLE_DATE];
*/
@track showMsg = false;
autoCloseTime = 5000; 

    showMsg = false;
    @track toastMsg;
    @api recordId
    NAME = "Name__c";
    PHONE = "Phone_Number__c";
    EMAIL = "Email__c";
    PROPERTY = "Property__c";
    AVAILABLE_DATE = "Available_Date__c";

    /*
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Tour Created!',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
    */

    onSubmitHandler(event) {
     event.preventDefault();
    const fields = event.detail.fields;
    this.template
    .querySelector('.lightform').submit(fields);
    this.handleSuccess;
    this.showMsg = true;

    setTimeout(() => {
        this.closeModel();
    }, this.autoCloseTime);
    }

    handleReset(event){
        const inputFields = this.template.querySelectorAll('lightning-input-field');
if(inputFields){ inputFields.forEach(field => {
    field.requestFullscreen();
})}
    }


}
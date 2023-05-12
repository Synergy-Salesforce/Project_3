import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import AVAILABLE_DATE from '@salesforce/schema/Tour_Request__c.Available_Date__c';
import PROPERTY from '@salesforce/schema/Tour_Request__c.Property__c';
import UNIT from '@salesforce/schema/Tour_Request__c.Unit__c';
import NAME from '@salesforce/schema/Tour_Request__c.Name__c';
export default class TourRequests extends LightningElement {

    objectApiName = "Tour_Request__c";
    fields = [NAME, PROPERTY, UNIT, AVAILABLE_DATE];

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Tour Created!',
            message: 'Record ID:',
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }

    onSubmitHandler(event) {
        event.preventDefault();
    const fields = event.detail.fields;
    this.template.querySelector('.lightform').submit(fields);
    this.handleSuccess

    }
    
}
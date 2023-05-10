import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import AVAILABLE_DATE from '@salesforce/schema/Tour_Request__c.Available_Date__c';
import CONTACT from '@salesforce/schema/Tour_Request__c.Contact__c';
import PROPERTY from '@salesforce/schema/Tour_Request__c.Property__c';
export default class TourRequests extends LightningElement {

    objectApiName = "Tour_Request__c";
    fields = [AVAILABLE_DATE, CONTACT, PROPERTY];

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Tour Created!',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}
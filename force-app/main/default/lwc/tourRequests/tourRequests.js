import { LightningElement } from 'lwc';
import NAME from '@salesforce/schema/Tour_Request__c.Name__c';
import AVAILABLE_DATE from '@salesforce/schema/Tour_Request__c.Available_Date__c';
import PROPERTY from '@salesforce/schema/Tour_Request__c.Property__c';
import EMAIL from '@salesforce/schema/Tour_Request__c.Email__c';
import PHONE from '@salesforce/schema/Tour_Request__c.Phone_Number__c';
export default class TourRequests extends LightningElement {

    objectApiName = "Tour_Request__c";
    NAME = "Name__c"
    PHONE = "Phone__c"
    EMAIL = "Email__c"
    PROPERTY = "Property"
    AVAILABLE_DATE = "Available_Date_c";

    onSubmitHandler(event) {
        event.preventDefault();
    const fields = event.detail.fields;
    this.template.querySelector('.lightform').submit(fields);
    this.handleReset()
        
    }
    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();  
            });
        }
     }
    
}
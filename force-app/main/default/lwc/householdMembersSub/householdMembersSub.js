import { LightningElement,api,track } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Household_People__c.Name';
import TYPE from '@salesforce/schema/Household_People__c.Type__c';
import RELATION from '@salesforce/schema/Household_People__c.Relation__c';
import CONTACT from '@salesforce/schema/Household_People__c.Contact__c';

export default class HouseholdMembersSub extends LightningElement {
    @api recordid;
    @api recordId;
    @api MemberId
    @api householddata;
    @api objectApiName;
    @track showMsg = false;
    autoCloseTime = 5000;
    @api ConId 
    
    // Expose a field to make it available in the template
    objectApiName = 'Household_People__c'
    nameField = NAME_FIELD;
    typeField = TYPE;
    relationField = RELATION;
    
   
    handleSubmit(event) {
        event.preventDefault();
    const fields = event.detail.fields;
    fields.Contact__c = this.recordid
    this.template.querySelector('.lightform').submit(fields);
    this.handleReset()
    this.showMsg = true
        setTimeout(() => {
        this.showsuccess();
    }, this.autoCloseTime);
        
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
     showsuccess(e){
        this.showMsg = false
     }

}

    


import { LightningElement,api,track,wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/House_Member__c.Name';
import TYPE from '@salesforce/schema/House_Member__c.Human_Type__c';
import RELATION from '@salesforce/schema/House_Member__c.Relation__c';
import CONTACT from '@salesforce/schema/House_Member__c.Contact__c';
import RECORDTYPE from '@salesforce/schema/House_Member__c.RecordTypeId';
import getHouseHoldMembersList from '@salesforce/apex/ProperHelper.getHouseHoldMembersList';
import { refreshApex } from '@salesforce/apex';

const actions = [
    { label: 'Delete', name: 'delete' }
];
const columns = [
   
    { label: 'Name', fieldName: 'Name',fixedWidth: 100 },
    { label: 'Type', fieldName: 'Human_Type__c',fixedWidth: 90 },
    { label: 'Relation', fieldName: 'Relation__c',fixedWidth: 90 },
    { type: 'action', typeAttributes: { rowActions: actions, menuAlignment: 'right' } },
];



export default class HouseholdMembersSub extends LightningElement {
    @api recordid;
    @api recordId;
    @api MemberId
    @api householddata;
    @api objectApiName;
    @track showMsg = false;
    data = [];
    autoCloseTime = 5000;
    @api ConId 
    objectApiName ='House_Member__c'
    error;
    @track columns = columns;
    nameField = NAME_FIELD;
    typeField = TYPE;
    relationField = RELATION;
    
     @wire(getHouseHoldMembersList) householdlist;
    handleSubmit(event) {
        event.preventDefault();
    const fields = event.detail.fields;
    fields.Contact__c = this.recordid
    fields.	RecordTypeId ='0128b000000dNzpAAE'
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
        refreshApex(this.householdlist);
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();  
            });
        }
     }
     showsuccess(e){
        this.showMsg = false
     }

     handleRowAction(event) {
        const action = event.detail.action;
        const row = event.detail.row;
        switch (action.name) {
            case 'delete':
                const rows = this.data;
                const rowIndex = rows.indexOf(row);
                rows.splice(rowIndex, 1);
                this.data = rows;
                break;
                }

        }
}

    


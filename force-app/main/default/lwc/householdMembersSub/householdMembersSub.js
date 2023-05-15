//David Melech
// Project 3
// household managment comp for people

import { LightningElement,api,track,wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/House_Member__c.Name';
import TYPE from '@salesforce/schema/House_Member__c.Human_Type__c';
import RELATION from '@salesforce/schema/House_Member__c.Relation__c';
import CONTACT from '@salesforce/schema/House_Member__c.Contact__c';
import RECORDTYPE from '@salesforce/schema/House_Member__c.RecordTypeId';
import getHouseMembersList from '@salesforce/apex/ProperHelper.getHouseHoldMembersList';
import { refreshApex } from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';

//set fields for datalist
const columns = [
   
    { label: 'Name', fieldName: 'Name',fixedWidth: 100 },
    { label: 'Type', fieldName: 'Human_Type__c',fixedWidth: 90 },
    { label: 'Relation', fieldName: 'Relation__c',fixedWidth: 90 },
    
];


export default class HouseholdMembersSub extends LightningElement {
// set vars

    @api recordId;
    @api MemberId
     showMsg = false;
    @api household;
    autoCloseTime = 1000;

    error;
    columns = columns;
    nameField = NAME_FIELD;
    typeField = TYPE;
    relationField = RELATION;
    @track selectedRecord;
    @track wiredAccountsResult = [];
    @track members= [];
    @track showForm = true;
// datalist set to resfreshable     
    @wire(getHouseMembersList,{recordId: '$recordId'})
    wiredAccounts(result) {
        this.wiredAccountsResult = result;
        if (result.data) {
            this.members = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.members = undefined;
        }
    }
//set datalist data
//     connectedCallback(){
//         getHouseMembersList({recordId: '$recordId'})
//        .then((response) => {
//            this.members = response;
//        })
//    }
// custom save  
     handleSubmit(event) {
        event.preventDefault();
    const fields = event.detail.fields;
    fields.Contact__c = this.recordId
    fields.	RecordTypeId ='0128b000000dNzpAAE'
    this.template.querySelector('.lightform').submit(fields);
    this.handleReset();
    this.showMsg = true
        setTimeout(() => {
        this.showsuccess();
    }, this.autoCloseTime);
    
    
    } 

//refresh data
     refreshData() {
        
        refreshApex(this.wiredAccountsResult);
        refreshApex(this.members);
     }
 
//reset record form data   
    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();  
            });
        
        }
        const editForm = this.template.querySelector('lightning-record-edit-form');
            editForm.recordId = null;
     }

// show success msg
     showsuccess(e){
        this.showMsg = false
        this.refreshData();
        
     }
// set record from record to selected from datalist
     handelSelection(event) {
        if (event.detail.selectedRows.length > 0) {
          this.selectedRecord = event.detail.selectedRows[0].Id;
        }
        this.MemberId = this.selectedRecord;
      }
// delete record from record
      deleteRecord() {
        deleteRecord(this.selectedRecord)
          .then(() => {
            
            this.refreshData();
            this.handleReset();
            
          })
          .catch(error => {
          })
      }

}
import { LightningElement,api,track,wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/House_Member__c.Name';
import TYPE from '@salesforce/schema/House_Member__c.Human_Type__c';
import RELATION from '@salesforce/schema/House_Member__c.Relation__c';
import CONTACT from '@salesforce/schema/House_Member__c.Contact__c';
import RECORDTYPE from '@salesforce/schema/House_Member__c.RecordTypeId';
import getHouseHoldMembersList from '@salesforce/apex/ProperHelper.getHouseHoldMembersList';
import { refreshApex } from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';


const columns = [
   
    { label: 'Name', fieldName: 'Name',fixedWidth: 100 },
    { label: 'Type', fieldName: 'Human_Type__c',fixedWidth: 90 },
    { label: 'Relation', fieldName: 'Relation__c',fixedWidth: 90 },
    
];


export default class HouseholdMembersSub extends LightningElement {
    @api recordid;
    @api recordId;
    @api MemberId
    @api householddata;
    @api objectApiName;
     showMsg = false;
    //data = [];
    autoCloseTime = 1000;
    @api ConId 
    objectApiName ='House_Member__c'
    error;
    columns = columns;
    nameField = NAME_FIELD;
    typeField = TYPE;
    relationField = RELATION;
    @track selectedRecord;
    @track wiredAccountsResult = [];
    @track members= [];
    error;
    @track showForm = true;
    @wire(getHouseHoldMembersList)
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
    
 
     handleSubmit(event) {
        event.preventDefault();
    const fields = event.detail.fields;
    fields.Contact__c = this.recordid
    fields.	RecordTypeId ='0128b000000dNzpAAE'
    this.template.querySelector('.lightform').submit(fields);
    
    this.showMsg = true
        setTimeout(() => {
        this.showsuccess();
    }, this.autoCloseTime);
    
    
    } 

         // in order to refresh your data, execute this function:
     refreshData() {
        
        refreshApex(this.wiredAccountsResult);
        refreshApex(this.objectApiName);
        //eval("$A.get('e.force:refreshView').fire();");
        this.handleReset();
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
        this.refreshData();
        
     }

     handelSelection(event) {
        if (event.detail.selectedRows.length > 0) {
          this.selectedRecord = event.detail.selectedRows[0].Id;
        }
        //this.MemberId = this.selectedRecord;
      }

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

    


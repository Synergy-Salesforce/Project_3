import { LightningElement, api, track, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import getListHouse from '@salesforce/apex/HouseMembers.getListHouse';
import HOUSE_MEMBER from '@salesforce/schema/House_Member__c'; 
import NAME from '@salesforce/schema/House_Member__c.Name';
import NUMBER_OF_PETS from '@salesforce/schema/House_Member__c.Number_of_Pets__c';
import PET_BREED from '@salesforce/schema/House_Member__c.Pet_Breeds__c';
import SIZE from '@salesforce/schema/House_Member__c.Size__c';
import RELATION from '@salesforce/schema/House_Member__c.Relation__c';


const actions = [
    { label: 'Delete', name: 'delete' },
];

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: '# of Pets', fieldName: 'Number_of_Pets__c', type: 'number'},
    { label: 'Size', fieldName: 'Size__c', type: 'mulitipicklist' },
    { label: 'Breed', fieldName: 'Pet_Breeds__c', type: 'currency' },
    { label: 'Relation', fieldName: 'Relation__c', type: 'picklist' },
    {
        type: 'action',
        typeAttributes: { rowActions: actions },
    },
];

export default class PetMaintenance extends LightningElement {


    @track showMsg = false;
    autoCloseTime = 5000; 
    @api objectApiName;
    @track rtis;  
    

    columns = columns;
    NAME = "Name";
    NUMBER_OF_PETS = "Number_of_Pets__c";
    PET_BREED = "Pet_Breeds__c";
    SIZE = "Size__c";
    RELATION = "Relation__c";
        

        @wire(getObjectInfo, { objectApiName: HOUSE_MEMBER })
        objectInfo({data, error}){
            if(data){
                this.rtis = Object.keys(data.recordTypeInfos).find(rti => data.recordTypeInfos[rti].name === 'Pets');
            }
        }

    
    onSubmitHandler(event) {
        event.preventDefault();
       const fields = event.detail.fields;
       this.template.querySelector('.petlightform').submit(fields);
       this.handleReset();
       this.showMsg = true;
   
       setTimeout(() => {
           this.showSuccess();
       }, this.autoCloseTime);
       }
   
       handleReset(event){
           const inputFields = this.template.querySelectorAll('lightning-input-field');
   if(inputFields){ inputFields.forEach(field => {
       field.reset();
   })}
       }
   
       showSuccess(e){
           this.showMsg = false
        }
       

/* information for the second table */
   

    @wire(getListHouse)
    houseMember;

    handleRowAction(event) {  
        console.log(event);
        console.log(event.detail.row);
     
        deleteRecord(event.detail.row.Id)
        .then(() => {
            refreshApex(this.houseMember);
        }
      );
    }

    
}








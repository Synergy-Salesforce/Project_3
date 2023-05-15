import { LightningElement, api, track, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import  getListHouse from '@salesforce/apex/HouseMembers.getListHouse';
import HOUSE_MEMBER from '@salesforce/schema/House_Member__c'; 
import NAME from '@salesforce/schema/House_Member__c.Name';
import NUMBER_OF_PETS from '@salesforce/schema/House_Member__c.Number_of_Pets__c';
import PET_BREED from '@salesforce/schema/House_Member__c.Pet_Breeds__c';
import SIZE from '@salesforce/schema/House_Member__c.Size__c';
import RELATION from '@salesforce/schema/House_Member__c.Relation__c';

export default class PetMaintenance extends LightningElement {


    @track showMsg = false;
    autoCloseTime = 5000; 
    @api objectApiName;
    @track rtis;  
    
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

    //     get recordTypeId() {
    //         if(this.objectInfo.data){
    //         // Returns a map of record type Ids 
    //         const rtis = this.objectInfo.data.recordTypeInfos;
    //         return Object.keys(rtis).find(rti => rtis[rti].name === 'Pets');
    //     } else{
    //         return null;
    //     }
    // }

    
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
@track houseMember;
@track error;


@wire(getListHouse)
wiredhouseMemberList({error, data}){
    if(data){
        this.houseMember = data;
        this.error = undefined;
    } else if(error){
        this.error = error;
        this.houseMember = undefined;
    }
}

showFields = true;
toggleFields() {
    this.showFields = !this.showFields;
}

   
}
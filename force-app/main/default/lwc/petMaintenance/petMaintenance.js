import { LightningElement, api, track, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import HOUSE_MEMBER from '@salesforce/schema/House_Member__c'; 
import NAME from '@salesforce/schema/House_Member__c.Name__c';
import NUMBER_OF_PETS from '@salesforce/schema/House_Member__c.Number_of_Pets__c';
import PET_BREED from '@salesforce/schema/House_Member__c.Pet_Breeds__c';
import SIZE from '@salesforce/schema/House_Member__c.Size__c';
import PETOWNER from '@salesforce/schema/House_Member__c.Contact__c';

export default class PetMaintenance extends LightningElement {


    @track showMsg = false;
    autoCloseTime = 5000; 
    
      
    
        NAMER = "Name__c";
        NUMBER_OF_PETS = "Number_of_Pets__c";
        PET_BREED = "Pet_Breeds__c";
        SIZE = "Size__c";
        PETOWNER = "Contact__c";

        @wire(getObjectInfo, { objectApiName: HOUSE_MEMBER })
        objectInfo;
        get recordTypeId() {
            if(this.objectInfo.data){
            // Returns a map of record type Ids 
            const rtis = this.objectInfo.data.recordTypeInfos;
            return Object.keys(rtis).find(rti => rtis[rti].name === 'Pets');
        } else{
            return null;
        }
    }

    
    onSubmitHandler(event) {
        event.preventDefault();
       const fields = event.detail.fields;
       this.template
       .querySelector('.petlightform').submit(fields);
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
   
}
import { LightningElement, api, track, wire } from 'lwc';
import getPetInfo from '@salesforce/apex/HouseMembers.getListHouse';
import { deleteRecord } from 'lightning/uiRecordApi';
import { refreshApex } from '@salesforce/apex';
import getListHouse from '@salesforce/apex/HouseMembers.getListHouse';
import HOUSE_MEMBER from '@salesforce/schema/House_Member__c'; 
import NAME from '@salesforce/schema/House_Member__c.Name';
import NUMBER_OF_PETS from '@salesforce/schema/House_Member__c.Number_of_Pets__c';
import PET_BREED from '@salesforce/schema/House_Member__c.Breed__c';
import SIZE from '@salesforce/schema/House_Member__c.Size__c';
import RELATION from '@salesforce/schema/House_Member__c.Relation__c';
import USER_ID from '@salesforce/user/Id';
import CONTACT from '@salesforce/schema/House_Member__c.Contact__c';
import getCONID from '@salesforce/apex/ProperHelper.getConId';



const actions = [
    { label: 'Delete', name: 'delete' },
];

const columns = [
    { label: 'Name', fieldName: 'Name',fixedWidth: 120 },
    { label: 'Size', fieldName: 'Size__c', type: 'text',fixedWidth: 80 },
    { label: 'Breed', fieldName: 'Breed__c', type:'text',fixedWidth: 120 }
    

];

export default class PetMaintenance extends LightningElement {


    @track showMsg = false;
    autoCloseTime = 1000; 
    @api objectApiName;
    @track rtis;  
    @api conId;
    houseMember;
    selectedRecord;
    wiredAccountsResult;
    MemberId;

    columns = columns;
    NAME = "Name";
    NUMBER_OF_PETS = "Number_of_Pets__c";
    PET_BREED = "Breed__c";
    SIZE = "Size__c";
    RELATION = "Relation__c";
        

    @wire(getPetInfo,{recordId: '$conId'})
    wiredAccounts(result) {
      
        this.wiredAccountsResult = result;
        
        if (result.data) {
            this.houseMember = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.houseMember = undefined;
            
        }
    }


        onSubmitHandler(event) {
        event.preventDefault();
       const fields = event.detail.fields;
       fields.Contact__c = this.conId;
       fields.RecordTypeId = '0128b000000dNzuAAE';
       this.template.querySelector('.petlightform').submit(fields);
       this.handleReset();
       this.showMsg = true;
   
       setTimeout(() => {
           this.showSuccess();
       }, this.autoCloseTime);
       }
   
       handleReset() {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();  
            });
        
        }
        const editForm = this.template.querySelector('.petlightform');
            editForm.recordId = null;
     }
   

       refreshData(){
        refreshApex(this.wiredAccountsResult);
        refreshApex(this.vehicleList);
     }

       showSuccess(e){
           this.showMsg = false
           this.refreshData();
        }
       

        handelSelection(event) {
            if (event.detail.selectedRows.length > 0) {
              this.selectedRecord = event.detail.selectedRows[0].Id;
            }
            this.MemberId = this.selectedRecord;
          }
         deleteRecord(){
            deleteRecord(this.selectedRecord)
            .then(() => {
                this.refreshData();
                this.handleReset();
            })
            .catch(error =>{
    
            })
         }
   

   
    
}
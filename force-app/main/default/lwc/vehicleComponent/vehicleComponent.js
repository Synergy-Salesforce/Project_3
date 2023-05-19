import { LightningElement, api, wire, track } from 'lwc';
import getVehicleInfo2 from '@salesforce/apex/vehicleController.getVehicle';
import getcontact from '@salesforce/apex/vehicleController.getContactId';

import USER_ID from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/House_Member__c.Name';
import MAKE_FIELD from '@salesforce/schema/House_Member__c.Make__c';
import TYPE_FIELD from '@salesforce/schema/House_Member__c.Car_Type__c';
import CONTACT from '@salesforce/schema/House_Member__c.Contact__c';
import MODEL_FIELD from '@salesforce/schema/House_Member__c.Model__c';
import PLATE_FIELD from '@salesforce/schema/House_Member__c.License_Plate__c';
import COLOR_FIELD from '@salesforce/schema/House_Member__c.Color__c';
import INSURED_FIELD from '@salesforce/schema/House_Member__c.Insured__c';
import getCONID from '@salesforce/apex/ProperHelper.getConId';
import { refreshApex } from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';

const columns = [
    { label: 'License', fieldName: 'Name',fixedWidth: 110 },
    { label: 'Make', fieldName: 'Make__c',fixedWidth: 110 },
    { label: 'Model', fieldName: 'Model__c',fixedWidth: 110 }
];
const data = [
    {
    Name: '2352235235',
    Make__c: 'utility:down',
}];

export default class VehicleComponent extends LightningElement {

    @api recordId;
    
    contactIdValue;
    @track wiredAccountsResult = [];
    @track vehicleList = [];
    @track selectedRecord;
    @api MemberId;
    @api conId;
    userId = USER_ID;
    columns = columns;
    data=data;
    
    nameField = NAME_FIELD;
    makeField = MAKE_FIELD;
    modelField = MODEL_FIELD;
    colorField = COLOR_FIELD;
    typeField = TYPE_FIELD;
    insuredField = INSURED_FIELD;


    @wire(getVehicleInfo2,{recordId: '$conId'})
    wiredAccounts(result) {
  
        this.wiredAccountsResult = result;
        
        if (result.data) {
            this.vehicleList = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.vehicleList = undefined;
            
        }
    }



    handleSubmit(event){
        event.preventDefault();
        const fields = event.detail.fields;
        fields.Contact__c = this.conId;
        fields.RecordTypeId = '0128b000000dO04AAE';
        this.template.querySelector('.lightform').submit(fields);
        this.handleReset();
        setTimeout(() => { this.refreshData();
        }, (1000));
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
        const editForm = this.template.querySelector('lightning-record-edit-form');
            editForm.recordId = null;
     }
     refreshData(){
        refreshApex(this.wiredAccountsResult);
        refreshApex(this.vehicleList);
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
import { LightningElement, api, wire, track } from 'lwc';
import getVehicleInfo from '@salesforce/apex/vehicleController.getVehicle';
import getcontact from '@salesforce/apex/vehicleController.getContactId';

import USER_ID from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/House_member__c.Name';
import MAKE_FIELD from '@salesforce/schema/House_Member__c.Make__c';
import TYPE_FIELD from '@salesforce/schema/House_Member__c.Car_Type__c';
import MODEL_FIELD from '@salesforce/schema/House_Member__c.Model__c';
import PLATE_FIELD from '@salesforce/schema/House_Member__c.License_Plate__c';
import COLOR_FIELD from '@salesforce/schema/House_Member__c.Color__c';
import INSURED_FIELD from '@salesforce/schema/House_Member__c.Insured__c';

import { refreshApex } from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';



export default class VehicleComponent extends LightningElement {

    @api recordId;
    @track vehicleList = [];
    contactIdValue;
    @track wiredVehicleResult = [];
    @track selectedRecord;
    @api MemberId;


    @track objectInfo;

    nameField = NAME_FIELD;
    makeField = MAKE_FIELD;
    modelField = MODEL_FIELD;
    colorField = COLOR_FIELD;
    typeField = TYPE_FIELD;
    insuredField = INSURED_FIELD;

    columns = [
        { label: 'License Plate Number', fieldName: 'Name' },
        { label: 'Make', fieldName: 'Make__c' },
        { label: 'Model', fieldName: 'Model__c' }
    ];


    @wire(getVehicleInfo, { userId: USER_ID })
    wiredVehicleInfo( data) {
        this.wiredVehicleResult = data;
        if (data) {
            this.vehicleList = data.data;
        }
    }
    //0128b000000dO04AAE - record type id

    connectedCallback(){
        getcontact({ userId: USER_ID})
        .then(res => {
            this.contactIdValue = res;
        })
    }

    
    handleSubmit(event){
        event.preventDefault();
        const fields = event.detail.fields;
        fields.Contact__c = this.contactIdValue;
        fields.RecordTypeId = '0128b000000dO04AAE';
        this.template.querySelector('.lightform').submit(fields);
        this.handleReset();
        setTimeout(() => { this.refreshData();
        }, (1000));
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
        const editForm = this.template.querySelector('lightning-record-edit-form');
            editForm.recordId = null;
     }

     refreshData(){
        refreshApex(this.wiredVehicleResult);
        refreshApex(this.vehicleList);
     }

     handleSelection(event){
        if(event.detail.selectedRows.length > 0){
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
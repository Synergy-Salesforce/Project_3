import { LightningElement, api,track} from 'lwc';
//import VACANCY_NOTICE from '@salesforce/schema/Vacancy_Notice__c';
import NAME_FIELD from '@salesforce/schema/Vacancy_Notice__c.Name';
import DATE_FIELD from '@salesforce/schema/Vacancy_Notice__c.Date_of_Vacancy__c';
import REASON_FIELD from '@salesforce/schema/Vacancy_Notice__c.Reason__c';
import CONTACT from '@salesforce/schema/Vacancy_Notice__c.Contact__c';
import CURRENT_USER from '@salesforce/user/Id';
import contGet from '@salesforce/apex/ProperHelper.getConId'
export default class VacancyNotice extends LightningElement {

//namefield=NAME_FIELD;
//dateField=DATE_FIELD; //If time would like to create validation
//descField=REASON_FIELD;

//userID=CURRENT_USER;

//@wire(contGet, {userId:'$userId'})
//contactId;
contactId;
autoCloseTime = 1000;
@track showForm = true;
showMsg = false;

    connectedCallback() {
        contGet({ userId: CURRENT_USER })
        .then(res => {
            this.contactId = res;
            
            
        })
    }



@api recordId;
@api objectApiName;
//need to grab user/unit info then set as default in outout fields


handleSubmit(event) {


    
    event.preventDefault();
    const fields = event.detail.fields;
    

    fields.Contact__c = this.contactId;
    fields.name=
    //fields.	RecordTypeId ='0128b000000dNzpAAE'; //???
    this.template.querySelector('.lightform').submit(fields);
    this.handleReset();
    this.showMsg = true;
    setTimeout(() => {
    this.showsuccess();
}, this.autoCloseTime);


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
    
    
 }



}
import { LightningElement, api, wire } from 'lwc';
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
    
    console.log(this.contactId+'helper locATION');


    //fields.	RecordTypeId ='0128b000000dNzpAAE'; //???
    this.template.querySelector('.lightform').submit(fields);
    //this.handleReset();
    //this.showMsg = true
    //setTimeout(() => {
    //this.showsuccess();
//}, this.autoCloseTime);


} 

}
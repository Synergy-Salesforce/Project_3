import { LightningElement, api } from 'lwc';
//import VACANCY_NOTICE from '@salesforce/schema/Vacancy_Notice__c';
//import NAME_FIELD from '@salesforce/schema/Vacancy_Notice__c.Name';
//import DATE_FIELD from '@salesforce/schema/Vacancy_Notice__c.Date_of_Vacancy__c';
//import REASON_FIELD from '@salesforce/schema/Vacancy_Notice__c.Reason_Long__c';


export default class VacancyNotice extends LightningElement {

//namefield=NAME_FIELD;
//dateField=DATE_FIELD; //If time would like to create validation
//descField=REASON_FIELD;

@api recordId;
@api objectApiName;
//need to grab user/unit info then set as default in outout fields



}
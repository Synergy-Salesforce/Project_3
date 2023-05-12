import { LightningElement, api, wire } from 'lwc';
/*import PROPERTY_OBJECT from '@salesforce/schema/Property__c';
import NAME_FIELD from '@salesforce/schema/Property__c.Name';
import UNITS_FIELD from '@salesforce/schema/Property__c.Has_Available_Units__c';
import CITY_FIELD from '@salesforce/schema/Property__c.City__c';
import STATE_FIELD from '@salesforce/schema/Property__c.State__c';*/
import getPropList from '@salesforce/apex/ProperHelper.getPropsAvailable';
import { MessageContext, publish } from 'lightning/messageService';
import mainChannel from '@salesforce/messageChannel/mainChannel__c';


export default class PropertyHomeListPartial extends LightningElement {
@api recordId;
@wire(getPropList)
propList;
propImgUrl;
@api
prop;

















/*relData=[
    {label: 'Property Name', fieldName: 'Name'},
    {label: 'City', fieldName: 'City__c'},
    {label: 'State', fieldName: 'State__c'}];

*/

/*
objectApirName=PROPERTY_OBJECT
fields= [NAME_FIELD,CITY_FIELD,STATE_FIELD];
hasUnits=UNITS_FIELD;
*/
}
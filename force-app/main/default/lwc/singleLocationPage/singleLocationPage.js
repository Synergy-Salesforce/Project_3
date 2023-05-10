import { LightningElement } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Property__c.Name';
import STREET_ADDRESS_FIELD from '@salesforce/schema/Property__c.Street_Address__c';
import STATE_FIELD from '@salesforce/schema/Property__c.State__c';
import ZIPCODE_FIELD from '@salesforce/schema/Property__c.ZipCode__c';
import HAS_AVAILABLE_UNITS_FIELD from '@salesforce/schema/Property__c.Has_Available_Units__c';
import MAINTENANCE_FEES_FIELD from '@salesforce/schema/Property__c.Maintenance_Fees__c';
import PETS_ALLOWED_FIELD from '@salesforce/schema/Property__c.Pets_Allowed__c';
import TOTAL_UNITS_FIELD from '@salesforce/schema/Property__c.Total_Units__c';

export default class SingleLocationPage extends LightningElement {
    objectApiName = 'Property__c';
    fields = {
        nameField:  NAME_FIELD,
        streetAddressField: STREET_ADDRESS_FIELD,
        stateField: STATE_FIELD,
        zipCodeField: ZIPCODE_FIELD,
        hasAvailableUnitsField: HAS_AVAILABLE_UNITS_FIELD,
        maintenanceFeesField: MAINTENANCE_FEES_FIELD,
        petsAllowedField: PETS_ALLOWED_FIELD,
        totalUnitsField: TOTAL_UNITS_FIELD

    }
    recordId = 'a008b00001WqyZkAAJ'; // TODO: remove hardcodedId
}
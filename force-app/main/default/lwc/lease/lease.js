import { LightningElement, wire, api } from 'lwc';
import getConId from '@salesforce/apex/ProperHelper.getConId';

export default class Lease extends LightningElement {
    @api
    userId;

    //get the contactId
    @wire(getConId, {userId : '$userId'})
    contactId;
}
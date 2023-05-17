import { LightningElement, wire, api } from 'lwc';
import getRent from '@salesforce/apex/RentBalance.getRent';

export default class CurrentRentBalance extends LightningElement {
  // objectApiName = 'Contact';

  @api
  userId;

  @wire(getRent, {userId: '$userId'})
  rent;
  // recordId 
}
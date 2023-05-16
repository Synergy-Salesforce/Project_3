import { LightningElement, wire, api } from 'lwc';
import getConId from '@salesforce/apex/ProperHelper.getConId';
import getLeaseFromContact from '@salesforce/apex/ProperHelper.getLeaseFromContact2';
import USER_ID from '@salesforce/user/Id';


export default class Lease extends LightningElement {
    // @api
    // userId;
    userId = USER_ID;
    // @wire(getConId, {userId : '$userId'})
    // wiredConId({data, error}){
    //     if(data){
    //         this.contactId = data;
    //     }
    // }

    @wire(getLeaseFromContact, {userId : '$userId'})
    leaseUrl;

    showLeaseUrl(){
        console.log('Lease Url: ');
        console.log(this.leaseUrl);
    }

    // connectedCallback(){
    //     getConId({userId : this.userId})
    //         .then((resultContactId) => {
    //             console.log('Reached get Con ID');
    //             console.log(resultContactId);
    //             getLeaseFromContact({contactId : resultContactId})
    //                 .then(resultLeaseUrl => {
    //                     console.log('Reached get get Lease from Contact');
    //                     this.leaseUrl = resultLeaseUrl;
    //                 })
    //                 .catch((error) => {
    //                     console.log('Get Lease From Contact Error:');
    //                     console.log(error);
    //                 })
    //         })
    // }
}
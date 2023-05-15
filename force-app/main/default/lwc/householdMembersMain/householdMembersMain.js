import { LightningElement,wire,api} from 'lwc';
import getHouseMembers from '@salesforce/apex/ProperHelper.getHouseHoldMembers';

export default class HouseholdMembersMain extends LightningElement {
    @api
    userId;
    
    recordId = '0038b000030f4DsAAI';
    @wire(getHouseMembers, { recordId: "$recordId" }) 
    household;
    
//     renderedCallback(){
//         getHouseMembers({recordId: this.recordId})
//        .then((response) => {
//            this.household = response;
//        })
//    }
   

}
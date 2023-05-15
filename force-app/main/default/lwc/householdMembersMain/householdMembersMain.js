import { LightningElement, api,wire} from 'lwc';
import getHouseMembers from '@salesforce/apex/ProperHelper.getHouseHoldMembers';

export default class HouseholdMembersMain extends LightningElement {
    // Expose a field to make it available in the template
    

    // Flexipage provides recordId and objectApiName
   

    //@api household;
    //@api recordid;
   
    //@api recordId;
    recordId = '0038b000030f4DsAAI';
    @wire(getHouseMembers, { recordId: "$recordId" }) 
    household;
    

//     renderedCallback(){
//         getHouseHoldMembers({recordId: this.recordId})
//        .then((response) => {
//            this.household = response;
//        })
//    }
   

}


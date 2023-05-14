import { LightningElement, api,wire} from 'lwc';
import getHouseHoldMembers from '@salesforce/apex/ProperHelper.getHouseHoldMembers';

export default class HouseholdMembersMain extends LightningElement {
    // Expose a field to make it available in the template
    

    // Flexipage provides recordId and objectApiName
   

    @api householddata;
    @api recordid
    @api ConId
    @api recordId = '0038b000030f4DsAAI'
    @wire(getHouseHoldMembers) household;

    connectedCallback(){
        getHouseHoldMembers({recordId: this.recordId})
       .then((response) => {
           this.household = response;
       })
   }
   

}


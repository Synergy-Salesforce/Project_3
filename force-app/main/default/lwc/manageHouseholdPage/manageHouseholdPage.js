import { LightningElement, api } from 'lwc';
import getCONID from '@salesforce/apex/ProperHelper.getConId';

import USER_ID from '@salesforce/user/Id';
export default class ManageHouseholdPage extends LightningElement {
    @api recordId;
  
    conId;
    connectedCallback() {
        getCONID({ userId: USER_ID })
        .then(res => {
            this.conId = res;
            
        })
    }
    
}
import { LightningElement,wire,api} from 'lwc';
import getHouseMembers from '@salesforce/apex/ProperHelper.getHouseHoldMembers';
import getCONID from '@salesforce/apex/ProperHelper.getConId';
import USER_ID from '@salesforce/user/Id';

export default class HouseholdMembersMain extends LightningElement {
    // @api
    // userId;
    @api recordId;
    household;
    conId;
    connectedCallback() {
        getCONID({ userId: USER_ID })
        .then(res => {
            this.conId = res;
            getHouseMembers({ recordId : res})
            .then((r) => {
                this.household = r;
            })
        })
    }
    
    // @wire(getCONID, { userId: USER_ID })
    // wiredContact({data, error}) {
    //     if (data) {
    //         this.fetchHouseMembers(data);
    //     }
    //     console.log(data + " id");
    // }

    // fetchHouseMembers(data) {
    //     getHouseMembers(data)
    //         .then((res) => {
    //             this.household = res;
    //             console.log("list " + res);
    //         })
    // }


    // @wire(getHouseMembers, { recordId: "$recordId" }) 
    // household;
    
//     renderedCallback(){
//         getCONID({userId: this.userId})
//        .then((response) => {
//            this.recordId = response;
//        })
//    }
   

}
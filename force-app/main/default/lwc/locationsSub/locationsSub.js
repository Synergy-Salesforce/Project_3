import { LightningElement, api, wire } from 'lwc';
import { MessageContext, publish } from 'lightning/messageService';
import mainChannel from '@salesforce/messageChannel/mainChannel__c';

export default class locationsSub extends LightningElement {
    @api property;
    @api recordId;
    propertyImgUrl;
    
    @wire(MessageContext)
    mContext;

    connectedCallback() {
        this.propertyImgUrl = this.property.Images__r[0].Url;
    }
    PropClick(e) {
        let publishRecordId = this.property.Id;
        const payload = {updatePage : 'locationPage', recordId : publishRecordId};
        publish(this.mContext, mainChannel, payload);

        // console.log (this.property.Id);
    }
   
    
}
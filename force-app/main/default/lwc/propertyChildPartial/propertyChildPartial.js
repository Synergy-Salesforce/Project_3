import { LightningElement,api, wire } from 'lwc';
import { MessageContext, publish } from 'lightning/messageService';
import mainChannel from '@salesforce/messageChannel/mainChannel__c';

export default class PropertyChildPartial extends LightningElement {

@api imgurl;
@api
prop
@api
newimgurl;
@wire(MessageContext)
mContext;

connectedCallback(){
this.newimgurl= this.prop.Images__r[0].Url;

}
PropClick(e) {
    let publishRecordId = this.prop.Id;
    const payload = {updatePage : 'locationPage', recordId : publishRecordId};
    publish(this.mContext, mainChannel, payload);

    // console.log (this.property.Id);
}
}
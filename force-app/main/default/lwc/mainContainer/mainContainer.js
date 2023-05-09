import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
import MainChannel from '@salesforce/messageChannel/mainChannel__c';
import LOGO_URL from '@salesforce/resourceUrl/Logo';


export default class MainContainer extends LightningElement {
    updatePageVar;
    homePage;

    subscription = null;
    logoUrl = LOGO_URL;

    @wire(MessageContext)
    mContext;

    updatePageMethod(updater){
        // reset all page booleans to false
        this.homePage = false;

        //set new page boolean to true
        switch (updater){
            default:
                this.homePage = true;
        }
    }

    subscribeToMessageChannel(){
        if(!this.subscription){
            this.subscription = subscribe(
                this.mContext,
                MainChannel,
                (payload) => {this.updatePageVar = payload.updatePage},
                { scope : APPLICATION_SCOPE}
            );    
        }
    }

    connectedCallback(){
        this.subscribeToMessageChannel();
        this.updatePageMethod();
    }
}
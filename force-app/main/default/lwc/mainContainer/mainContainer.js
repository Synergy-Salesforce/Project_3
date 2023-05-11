import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
import MainChannel from '@salesforce/messageChannel/mainChannel__c';
import LOGO_URL from '@salesforce/resourceUrl/Logo';


export default class MainContainer extends LightningElement {
    homePage = true;
    locationPage;
    showAllLocations = false;

    recordId;

    subscription = null;
    logoUrl = LOGO_URL;

    @wire(MessageContext)
    mContext;

    updatePageMethod(updater){
        // reset all page booleans to false
        this.homePage = false;
        this.locationPage = false;

        //set new page boolean to true
        switch (updater){
            case 'locationPage':
                this.locationPage = true;
                break;
            default:
                this.homePage = true;
        }
    }

    subscribeToMessageChannel(){
        if(!this.subscription){
            this.subscription = subscribe(
                this.mContext,
                MainChannel,
                (payload) => {
                    console.log(payload.recordId);
                    this.recordId = payload.recordId;
                    this.updatePageMethod(payload.updatePage);
                    },
                { scope : APPLICATION_SCOPE}
            );    
        }
    }

    connectedCallback(){
        this.subscribeToMessageChannel();
    }

    handleClickLocations(e){
        this.showAllLocations = true;
    }
}
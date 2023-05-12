import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
import MainChannel from '@salesforce/messageChannel/mainChannel__c';
import LOGO_URL from '@salesforce/resourceUrl/Logo';
import IS_GUEST from '@salesforce/user/isGuest';
import { NavigationMixin } from 'lightning/navigation';


export default class MainContainer extends LightningElement {
    homePage = true;
    locationPage;
    applicationPage;
    showAllLocations = false;

    isLoggedIn = !IS_GUEST;

    logoutUrl = window.location.origin + '/secur/logout.jsp';

    recordId;

    subscription = null;
    logoUrl = LOGO_URL;

    @wire(MessageContext)
    mContext;

    resetPageBools(){
        this.homePage = false;
        this.locationPage = false;
        this.applicationPage = false;
    }

    updatePageMethod(updater){
        this.resetPageBools();

        //set new page boolean to true
        switch (updater){
            case 'locationPage':
                this.locationPage = true;
                break;
            case 'applicationPage':
                this.applicationPage = true;
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

    handleLocationsClick(e){
        this.showAllLocations = true;
        this.updatePageMethod('homePage');
    }

    handleApplicationClick(e){
        this.updatePageMethod('applicationPage');
    }
}
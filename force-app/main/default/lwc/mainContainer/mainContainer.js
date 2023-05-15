import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
import MainChannel from '@salesforce/messageChannel/mainChannel__c';
import LOGO_URL from '@salesforce/resourceUrl/Logo';
import HAM_ICON from '@salesforce/resourceUrl/rows';
import IS_GUEST from '@salesforce/user/isGuest';
import USER_ID from '@salesforce/user/Id';
import { NavigationMixin } from 'lightning/navigation';


export default class MainContainer extends LightningElement {
    userId = USER_ID;
    hamIcon = HAM_ICON;
    homePage = true;
    locationPage;
    applicationPage;
    maintenancePage;
    householdPage;
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
        this.maintenancePage = false;
        this.householdPage = false;
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
            case 'maintenancePage':
                this.maintenancePage = true;
                break;
            case 'householdPage':
                this.householdPage = true;
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

    handleHamMenuClick() {
      let navMenu = this.template.querySelector(".nav-menu");
      let hamMenu = this.template.querySelector(".ham-menu");
  
      hamMenu.addEventListener("click", () => {
        hamMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
      });
  
      this.template.querySelectorAll(".nav-link")
        .forEach(i => i.addEventListener("click", () => {
          hamMenu.classList.remove("active");
          navMenu.classList.remove("active");
        }));
    }

    handleHomeClick() {
      this.updatePageMethod('homePage');
      this.showAllLocations = false;
      this.recordId = null;
    }

    handleMaintenanceClick(){
        this.updatePageMethod('maintenancePage');
    }

    handleHouseholdClick(){
        this.updatePageMethod('householdPage');
    }
}
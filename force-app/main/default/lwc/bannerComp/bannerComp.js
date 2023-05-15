import { LightningElement,wire} from 'lwc';
import { subscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
import MainChannel from '@salesforce/messageChannel/mainChannel__c';
import LOGO_URL from '@salesforce/resourceUrl/Logo';
import HAM_ICON from '@salesforce/resourceUrl/rows';
import IS_GUEST from '@salesforce/user/isGuest';
export default class BannerComp extends LightningElement {
    hamIcon = HAM_ICON;
    logoutUrl = window.location.origin + '/secur/logout.jsp';
    recordId;
    subscription = null;
    logoUrl = LOGO_URL;
    @wire(MessageContext)
    mContext;

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
}
import { LightningElement} from 'lwc';

import LOGO_URL from '@salesforce/resourceUrl/Logo';
import HAM_ICON from '@salesforce/resourceUrl/rows';
import IS_GUEST from '@salesforce/user/isGuest';
export default class BannerComp extends LightningElement {
    hamIcon = HAM_ICON;
    logoutUrl = window.location.origin + '/secur/logout.jsp';
    recordId;
    logoUrl = LOGO_URL;
    mContext;
  
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
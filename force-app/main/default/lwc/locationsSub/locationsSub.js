import { LightningElement,api,wire } from 'lwc';


export default class locationsSub extends LightningElement {
    @api property;
    @api recordId;
    propertyImgUrl;
    
    connectedCallback() {
        this.propertyImgUrl = this.property.Images__r[0].Url;
    }
    PropClick(e) {

        console.log (this.property.Id);
    }
   
    
}
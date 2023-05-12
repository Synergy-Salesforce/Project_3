import { LightningElement, api } from 'lwc';

export default class ChildUnit extends LightningElement {

    @api imgurl;
    newImgUrl;

    connectedCallback() {
        this.newImgUrl = this.imgurl;
    }
}
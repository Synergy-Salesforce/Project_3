import { LightningElement,api, wire } from 'lwc';

export default class PropertyChildPartial extends LightningElement {

@api imgurl;

newimgurl;

connectedCallback(){
this.newimgurl= this.imgurl;


}
}
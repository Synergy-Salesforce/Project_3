import { LightningElement } from 'lwc';

export default class MainContainer extends LightningElement {
    recordId = 'a006s000002MhJLAA0';
    showSingleLocationPage = false;

    renderedCallback(){
        this.showSingleLocationPage = true;
    }
}
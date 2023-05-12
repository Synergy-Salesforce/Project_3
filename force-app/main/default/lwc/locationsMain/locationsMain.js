import { LightningElement ,api,wire} from 'lwc';
import getPropImage from '@salesforce/apex/ProperHelper.getPropswithMainImg';

export default class LocationsMain extends LightningElement {
    
    @wire(getPropImage) wiredPropImg;
}
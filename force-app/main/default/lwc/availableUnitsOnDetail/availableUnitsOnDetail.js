import { LightningElement, api } from 'lwc';
import getUnitList from '@salesforce/apex/unitController.getUnitList';

export default class AvailableUnitsOnDetail extends LightningElement {

    unitList;
   
    @api
    recordId;

    connectedCallback() {
        getUnitList({recordId : this.recordId})
        .then((res) => {
            if(res.length > 0)
            {this.unitList = res;}
        })
    }


}
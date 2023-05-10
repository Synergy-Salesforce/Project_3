import { LightningElement } from 'lwc';
import {ShowToastEvent} from "lightning/platformShowToastEvent";
export default class TourRequestForm extends LightningElement {

    thisHasBeenClick = false;

    FlowAPiName = "Tour_Application_Form";


    handleFlowEventsStatus(e){
        console.log("flow status", e.detail.status);
        if (e.detail.status == "FINISHED") {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: "Success",
                    message: "Flow Finished Successfully!",
                    variant: "succes",
                })
            );
        }
    }

    handleClick(a){
        this.thisHasBeenClick = true;
    }
}
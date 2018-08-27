import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { ModalpageComponent } from "~/modalpage/modalpage.component";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    
    constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef){

    }

    public showModal() {
        let options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(ModalpageComponent, options).then(res => {
            console.log(res);
        });
    }

}

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
// import { ModalDialogService, ModalDialogParams, ModalDialogOptions } from "nativescript-angular/modal-dialog";
// import { registerElement } from "nativescript-angular/element-registry";

import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { registerElement } from "nativescript-angular/element-registry";
import { isIOS } from "platform";
import { NativeScriptRouterModule, } from "nativescript-angular/router";
import { NativeScriptFormsModule, } from "nativescript-angular/forms";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
// import { LoginComponent } from "~/login/login.component";
import {AddproductComponent } from "./addproduct/addproduct.component"
import {PasswordComponent } from "./password/password.component"
import { LocationpageComponent } from "~/locationpage/locationpage.component"
import { DropDownModule } from "nativescript-drop-down/angular";
import { Addproduct2Component } from "~/addproduct2/addproduct2.component";
import { LoginComponent } from "~/login/login.component";
import { Login1Component } from "~/login1/login1.component"
import { PhoneverifyComponent } from "~/phoneverify/phoneverify.component"
import { ModalpageComponent } from "~/modalpage/modalpage.component"
import { ModalParamsService } from "~/modal-params.service";
import { MainpersonalComponent } from "~/mainpersonal/mainpersonal.component"
// import { MyshopComponent } from "~/myshop/myshop.component"
import { VendordashboardComponent } from "~/vendordashboard/vendordashboard.component"
import { NgShadowModule } from 'nativescript-ng-shadow';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import {WebviewformComponent } from "./webviewform/webviewform.component"
import {CarouselDirective} from "nativescript-ng2-carousel/nativescript-ng2-carousel";
// import {ProfileComponent} from "./profile/profile.component";

declare var GMSServices: any;

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        // NativeScriptFormsModule,
        // NativeScriptRouterModule,
        // NativeScriptModule,
        NativeScriptUISideDrawerModule,
        AppRoutingModule,
        DropDownModule,
        NgShadowModule
        // ModalDialogParams

    ],
    declarations: [
        CarouselDirective,
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        WebviewformComponent
    ],
    providers: [
        ItemService,
        ModalDialogService,
        ModalParamsService
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }

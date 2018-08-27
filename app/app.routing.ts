import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./login/login.component";
import { LocationpageComponent } from "./locationpage/locationpage.component";
import {AddproductComponent } from "./addproduct/addproduct.component"
import {Addproduct2Component} from "./addproduct2/addproduct2.component"
import {Login1Component} from "./login1/login1.component"
import {PhoneverifyComponent} from "./phoneverify/phoneverify.component"
import {ModalpageComponent} from "./modalpage/modalpage.component"
import {MainpersonalComponent} from "./mainpersonal/mainpersonal.component"
import {MyshopComponent} from "./myshop/myshop.component"
import {PasswordComponent } from "./password/password.component"
import {OtpComponent } from "./otp/otp.component"
import {VendordashboardComponent} from "./vendordashboard/vendordashboard.component"
import {WebviewformComponent} from "./webviewform/webviewform.component"
const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: VendordashboardComponent },
    // { path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";

import { Router, ActivatedRoute } from "@angular/router";
import { Color } from "color";

import { connectionType, getConnectionType } from "connectivity";
import { Animation } from "ui/animation";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";


import { alert } from "../../shared";

import { Cooperative } from '../../models/index';
import {CooperativeService} from "../../services/cooperative.service";
import {AuthService} from "../../services/auth.service";


@Component({
    moduleId: module.id,
    selector: "ns-password",
    templateUrl: "./password.component.html",
    styleUrls: ["./password-common.css", "./password.component.css"],
})


export class PasswordComponent implements OnInit {

    public input: any;
    returnUrl: string;
    username: string;
    password: string;
    confirm: string;
    resetToken: string;

    public constructor(private router: RouterExtensions,private page: Page, private cooperativeService: CooperativeService, private authService:AuthService,
        private route: ActivatedRoute,
        
       ) {
        this.input = {
            "email": "",
            "password": ""
        }
    }


    public ngOnInit() {
       // this.page.actionBarHidden = true;
        // if(ApplicationSettings.getBoolean("authenticated", false)) {
        //     this.router.navigate(["/secure"], { clearHistory: true });
        // }

        // this.getCooperative();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


    }

    changePassword(){
        this.changepasswordservice(this.resetToken,this.password,this.confirm);
    }

    changepasswordservice(resettoken: string,newpassword: string,verypassword: string){
        console.log("User Token "+  resettoken);
       

        // this.authService.resetPassword(resettoken,newpassword,verypassword).subscribe(
        //     data => { 
        //      console.log("User name "+ JSON.stringify(data["data"]) );
       
        //       // Redirect to OTP
        //       this.router.navigate(["/home"]);
        //       },
        //       err => {
        //        console.log(err);
              
        //          }
        //     );	  
    }

     startBackgroundAnimation(background) {
        background.animate({
          scale: { x: 1.0, y: 1.0 },
          duration: 10000
        });
      }

}


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
    selector: "ns-account",
    templateUrl: "./account.component.html",
    styleUrls: ["./account-common.css", "./account.component.css"],
})


export class AccountComponent implements OnInit {

    public input: any;
    returnUrl: string;
    token: string;
    password: string;

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

    

     startBackgroundAnimation(background) {
        background.animate({
          scale: { x: 1.0, y: 1.0 },
          duration: 10000
        });
      }

}


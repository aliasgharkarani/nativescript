import { Component,OnInit,AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import { connectionType, getConnectionType } from "connectivity";
import { Animation } from "ui/animation";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";

import { ValueList, DropDown } from "nativescript-drop-down";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { Cooperative } from '../../models/index';
import {CooperativeService} from "../../services/cooperative.service";
import {CooperativeStaffService} from "../../services/cooperativeStaff.service";
import {AuthService} from "../../services/auth.service";

import { TNSFancyAlert } from "nativescript-fancyalert";

import {CooperativeStaff,VerifyAuth} from "../../models/index";
let LS = require( "nativescript-localstorage" );
@Component({
    moduleId: module.id,
    selector: "ns-changepassword2",
    templateUrl: "changepassword2.component.html",
    styleUrls: ["./changepassword2-common.css", "./changepassword2.component.css"],
})

export class ChangePassword2Component {

    public input: any;
    selectedCooperativeIndex: number ;
    selectedCooperative : string;
    staffId: String;
    cooperative: Array<Cooperative> = [];
    hint: string = "Select Cooperative";
    public cooperativeList: ValueList<string>;
    public cssClass: string      = "default";
    cooperativeStaff: CooperativeStaff;
    verifyAuth: VerifyAuth;
    opass: String;
    npass: String;
    userId: String;
    userMode: String;
    cnpass: String;
    oldpasswordhint: String;
    PasswordLabel: String = "";
    isNew: boolean = false;
   

    public constructor(private location: Location, private cooperativeService:CooperativeService, private cooperativeStaffService:CooperativeStaffService,
        private router: Router, private activatedRoute: ActivatedRoute, private authService:AuthService) {
     
    }

    ngAfterViewInit() {
        
   }
   
     public ngOnInit() {


        var dataObject = JSON.parse(LS.getItem('currentUser'));

       

        console.log("User ID " + dataObject._id);
          if(dataObject._id)
          {
              this.userId = dataObject._id;
              this.userMode = dataObject.userMode;
              if(dataObject.userMode == "New")
              {
                  this.oldpasswordhint = "Temporary Password";
                  this.PasswordLabel = "Set Password";
                  this.isNew = true;
              }else{
                this.oldpasswordhint = "Old Password";
                this.PasswordLabel = "Change Password";
                this.isNew = false;
              }
          }
       
        // this.userId = this.activatedRoute.snapshot.params["userId"];
        // this.userMode = this.activatedRoute.snapshot.params["userMode"];
     }
    public register() {
        // if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
        //     ApplicationSettings.setString("account", JSON.stringify(this.input));
        //     this.location.back();
        // } else {
        //     (new SnackBar()).simple("All Fields Required!");
        // }

        console.log("Reaching Register " );

       
    }

    onNavBtnTap(){
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    }

    cancel(){

    }

    public goBack() {
        this.location.back();
    }
    startBackgroundAnimation(background) {
        background.animate({
          scale: { x: 1.0, y: 1.0 },
          duration: 10000
        });
      }

      

  

    sendVerifyAuth(verifyAuth: CooperativeStaff){
        console.log("Verify "+  verifyAuth.staffId);
       

        this.cooperativeStaffService.verifyAuthToCreatLater(verifyAuth).subscribe(
            data => { 
             console.log("Very Auth "+ JSON.stringify(data["data"]) );
       
             

              },
              err => {
               console.log(err);
              
                 }
            );	  
    }

    next(){

        if (getConnectionType() === connectionType.none) {
            // alert("Cooper Switch requires an internet connection to log in.");
   
             TNSFancyAlert.showError("Error!", "Cooper Switch requires an internet connection to log in.", "Ok");
             return;
           }
           //this.loading = true;
           console.log("Login Reaching " + this.opass + " Password" + this.npass);
           this.authService.resetPassword(this.userId,this.opass,this.npass, this.cnpass,this.userMode)
               .subscribe(
                   data => {
                     //this.isAuthenticating = false;
                    console.log("change password data " + JSON.stringify(data["data"]) );
                    if(this.userMode == "New")
                    {
                        LS.removeItem('currentUser');

                        LS.setItem('currentUser', JSON.stringify(data["data"]));

                        this.router.navigate(['/verifyphone']);
                    }
                    
                   },
                   error => {
                       //this.alertService.error(error);
   
                       TNSFancyAlert.showError("Error!", error.error.message, "Ok");
               
                       console.log("Error " + JSON.stringify(error) );
                       
                       //  this.isAuthenticating = false;
                       // this.loading = false;
                   });
        
    }
      

}
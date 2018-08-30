"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
//import { alert } from "../../shared";
//import { Cooperative } from '../../models/index';
var cooperative_service_1 = require("../../services/cooperative.service");
var auth_service_1 = require("../../services/auth.service");
// import { TNSFancyAlert } from "nativescript-fancyalert";
//  import {LoadingIndicator} from "nativescript-loading-indicator";
// var loader = new LoadingIndicator();
// import * as dialogs from "ui/dialogs";
// import { ModalDialogService,ModalDialogOptions } from "nativescript-angular/directives/dialogs";
// import { ModalComponent } from "../../app.modal";
var options = {
    message: 'Loading...',
    progress: 0.65,
    android: {
        indeterminate: true,
        cancelable: true,
        cancelListener: function (dialog) { console.log("Loading cancelled"); },
        max: 100,
        progressNumberFormat: "%1d/%2d",
        progressPercentFormat: 0.53,
        progressStyle: 1,
        secondaryProgress: 1,
        color: "#4B9ED6",
    },
    ios: {
        details: "Additional detail note!",
        margin: 10,
        dimBackground: true,
        color: "#4B9ED6",
        // background box around indicator
        // hideBezel will override this if true
        backgroundColor: "yellow",
        userInteractionEnabled: false,
        hideBezel: true,
    }
};
var LoginComponent = /** @class */ (function () {
    // public input: any;
    // returnUrl: string;
    // username: string;
    // password: string;
    // private modal: ModalDialogService, private vcRef: ViewContainerRef 
    function LoginComponent(route, router, page, cooperativeService, authService, _page) {
        this.route = route;
        this.router = router;
        this.page = page;
        this.cooperativeService = cooperativeService;
        this.authService = authService;
        this._page = _page;
        // this.input = {
        //     "email": "",
        //     "password": ""
        // }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        // this.page.actionBarHidden = true;
        // // if(ApplicationSettings.getBoolean("authenticated", false)) {
        // //     this.router.navigate(["/secure"], { clearHistory: true });
        // // }
        // // this.getCooperative();
        // //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        // console.log("Routing to page " +  this.returnUrl);
    };
    // public login() {
    //     if(this.input.email && this.input.password) {
    //         let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
    //         if(this.input.email == account.email && this.input.password == account.password) {
    //             ApplicationSettings.setBoolean("authenticated", true);
    //             this.router.navigate(["/secure"], { clearHistory: true });
    //         } else {
    //             (new SnackBar()).simple("Incorrect Credentials!");
    //         }
    //     } else {
    //         (new SnackBar()).simple("All Fields Required!");
    //     }
    // }
    // login() {
    //     if (getConnectionType() === connectionType.none) {
    //      // alert("Cooper Switch requires an internet connection to log in.");
    //       TNSFancyAlert.showError("Error!", "Cooper Switch requires an internet connection to log in.", "Ok");
    //       return;
    //     }
    //     //this.loading = true;
    //     loader.show(options);
    //     console.log("Login Reaching " + this.username + " Password" + this.password);
    //     this.authService.login(this.username, this.password)
    //         .subscribe(
    //             data => {
    //               //this.isAuthenticating = false;
    //              // console.log("login data " + data);
    //               this.router.navigate([this.returnUrl]);
    //               loader.hide();
    //             },
    //             error => {
    //                 //this.alertService.error(error);
    //                 TNSFancyAlert.showError("Error!", error.error.message, "Ok");
    //                 console.log("Error " + JSON.stringify(error) );
    //                 loader.hide();
    //                 //  this.isAuthenticating = false;
    //                 // this.loading = false;
    //             });
    // }
    // getCooperative(){
    //     this.cooperativeService.getAllCooperative().subscribe(
    //         data => { 
    //          console.log("Cooperative List "+ JSON.stringify(data["data"]) );
    //           },
    //           err => {
    //            console.log(err);
    //              }
    //         );	  
    // }
    LoginComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-login",
            templateUrl: "./login.component.html",
            styleUrls: ["./login-common.css", "./login.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, page_1.Page, cooperative_service_1.CooperativeService, auth_service_1.AuthService,
            page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBRW5FLDBDQUF5RDtBQU96RCxnQ0FBK0I7QUFJL0IsdUNBQXVDO0FBRXZDLG1EQUFtRDtBQUNuRCwwRUFBc0U7QUFDdEUsNERBQXdEO0FBRXhELDJEQUEyRDtBQUUzRCxvRUFBb0U7QUFFcEUsdUNBQXVDO0FBRXZDLHlDQUF5QztBQUN6QyxtR0FBbUc7QUFDbkcsb0RBQW9EO0FBQ3BELElBQUksT0FBTyxHQUFHO0lBQ1YsT0FBTyxFQUFFLFlBQVk7SUFDckIsUUFBUSxFQUFFLElBQUk7SUFDZCxPQUFPLEVBQUU7UUFDUCxhQUFhLEVBQUUsSUFBSTtRQUNuQixVQUFVLEVBQUUsSUFBSTtRQUNoQixjQUFjLEVBQUUsVUFBUyxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNyRSxHQUFHLEVBQUUsR0FBRztRQUNSLG9CQUFvQixFQUFFLFNBQVM7UUFDL0IscUJBQXFCLEVBQUUsSUFBSTtRQUMzQixhQUFhLEVBQUUsQ0FBQztRQUNoQixpQkFBaUIsRUFBRSxDQUFDO1FBQ3BCLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsT0FBTyxFQUFFLHlCQUF5QjtRQUNsQyxNQUFNLEVBQUUsRUFBRTtRQUNWLGFBQWEsRUFBRSxJQUFJO1FBQ25CLEtBQUssRUFBRSxTQUFTO1FBQ2hCLGtDQUFrQztRQUNsQyx1Q0FBdUM7UUFDdkMsZUFBZSxFQUFFLFFBQVE7UUFDekIsc0JBQXNCLEVBQUUsS0FBSztRQUM3QixTQUFTLEVBQUUsSUFBSTtLQUdoQjtDQUNGLENBQUM7QUFVSjtJQUVJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUtwQixzRUFBc0U7SUFFdEUsd0JBQTJCLEtBQXFCLEVBQVMsTUFBYyxFQUFTLElBQVUsRUFBVSxrQkFBc0MsRUFBVSxXQUF1QixFQUUvSixLQUFXO1FBRkksVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUUvSixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBR25CLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLElBQUk7SUFDUixDQUFDO0lBR00saUNBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyxvQ0FBb0M7UUFDcEMsa0VBQWtFO1FBQ2xFLG9FQUFvRTtRQUNwRSxPQUFPO1FBRVAsNEJBQTRCO1FBQzVCLDBFQUEwRTtRQUUxRSx3RUFBd0U7UUFFeEUscURBQXFEO0lBR3pELENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsb0RBQW9EO0lBQ3BELG9GQUFvRjtJQUNwRiw2RkFBNkY7SUFDN0YscUVBQXFFO0lBQ3JFLHlFQUF5RTtJQUN6RSxtQkFBbUI7SUFDbkIsaUVBQWlFO0lBQ2pFLFlBQVk7SUFDWixlQUFlO0lBQ2YsMkRBQTJEO0lBQzNELFFBQVE7SUFDUixJQUFJO0lBRUosWUFBWTtJQUNaLHlEQUF5RDtJQUN6RCw2RUFBNkU7SUFFN0UsNkdBQTZHO0lBQzdHLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixvRkFBb0Y7SUFDcEYsMkRBQTJEO0lBQzNELHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsaURBQWlEO0lBQ2pELHFEQUFxRDtJQUNyRCx3REFBd0Q7SUFDeEQsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsb0RBQW9EO0lBRXBELGdGQUFnRjtJQUVoRixrRUFBa0U7SUFDbEUsaUNBQWlDO0lBQ2pDLHFEQUFxRDtJQUNyRCwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLElBQUk7SUFHSixvQkFBb0I7SUFDcEIsNkRBQTZEO0lBQzdELHFCQUFxQjtJQUNyQiw0RUFBNEU7SUFLNUUsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFFL0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixJQUFJO0lBRUosaURBQXdCLEdBQXhCLFVBQXlCLFVBQVU7UUFDL0IsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNqQixLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTNHTSxjQUFjO1FBUjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx1QkFBdUIsQ0FBQztTQUM3RCxDQUFDO3lDQWVvQyx1QkFBYyxFQUFpQixlQUFNLEVBQWUsV0FBSSxFQUE4Qix3Q0FBa0IsRUFBc0IsMEJBQVc7WUFFeEosV0FBSTtPQWRkLGNBQWMsQ0FvSTFCO0lBQUQscUJBQUM7Q0FBQSxBQXBJRCxJQW9JQztBQXBJWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuXHJcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuXHJcblxyXG4vL2ltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcIi4uLy4uL3NoYXJlZFwiO1xyXG5cclxuLy9pbXBvcnQgeyBDb29wZXJhdGl2ZSB9IGZyb20gJy4uLy4uL21vZGVscy9pbmRleCc7XHJcbmltcG9ydCB7Q29vcGVyYXRpdmVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29vcGVyYXRpdmUuc2VydmljZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBUTlNGYW5jeUFsZXJ0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mYW5jeWFsZXJ0XCI7XHJcblxyXG4vLyAgaW1wb3J0IHtMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcblxyXG4vLyB2YXIgbG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxuXHJcbi8vIGltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuLy8gaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuLy8gaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vYXBwLm1vZGFsXCI7XHJcbnZhciBvcHRpb25zID0ge1xyXG4gICAgbWVzc2FnZTogJ0xvYWRpbmcuLi4nLFxyXG4gICAgcHJvZ3Jlc3M6IDAuNjUsXHJcbiAgICBhbmRyb2lkOiB7XHJcbiAgICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcbiAgICAgIGNhbmNlbGFibGU6IHRydWUsXHJcbiAgICAgIGNhbmNlbExpc3RlbmVyOiBmdW5jdGlvbihkaWFsb2cpIHsgY29uc29sZS5sb2coXCJMb2FkaW5nIGNhbmNlbGxlZFwiKSB9LFxyXG4gICAgICBtYXg6IDEwMCxcclxuICAgICAgcHJvZ3Jlc3NOdW1iZXJGb3JtYXQ6IFwiJTFkLyUyZFwiLFxyXG4gICAgICBwcm9ncmVzc1BlcmNlbnRGb3JtYXQ6IDAuNTMsXHJcbiAgICAgIHByb2dyZXNzU3R5bGU6IDEsXHJcbiAgICAgIHNlY29uZGFyeVByb2dyZXNzOiAxLFxyXG4gICAgICBjb2xvcjogXCIjNEI5RUQ2XCIsIC8vIGNvbG9yIG9mIGluZGljYXRvciBhbmQgbGFiZWxzXHJcbiAgICB9LFxyXG4gICAgaW9zOiB7XHJcbiAgICAgIGRldGFpbHM6IFwiQWRkaXRpb25hbCBkZXRhaWwgbm90ZSFcIixcclxuICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgZGltQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgY29sb3I6IFwiIzRCOUVENlwiLCAvLyBjb2xvciBvZiBpbmRpY2F0b3IgYW5kIGxhYmVsc1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kIGJveCBhcm91bmQgaW5kaWNhdG9yXHJcbiAgICAgIC8vIGhpZGVCZXplbCB3aWxsIG92ZXJyaWRlIHRoaXMgaWYgdHJ1ZVxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXHJcbiAgICAgIHVzZXJJbnRlcmFjdGlvbkVuYWJsZWQ6IGZhbHNlLCAvLyBkZWZhdWx0IHRydWUuIFNldCBmYWxzZSBzbyB0aGF0IHRoZSB0b3VjaGVzIHdpbGwgZmFsbCB0aHJvdWdoIGl0LlxyXG4gICAgICBoaWRlQmV6ZWw6IHRydWUsIC8vIGRlZmF1bHQgZmFsc2UsIGNhbiBoaWRlIHRoZSBzdXJyb3VuZGluZyBiZXplbFxyXG4gICAgLy8gICB2aWV3OiBVSVZpZXcsIC8vIFRhcmdldCB2aWV3IHRvIHNob3cgb24gdG9wIG9mIChEZWZhdWx0cyB0byBlbnRpcmUgd2luZG93KVxyXG4gICAgLy8gICBtb2RlOiAvLyBzZWUgaU9TIHNwZWNpZmljIG9wdGlvbnMgYmVsb3dcclxuICAgIH1cclxuICB9O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibnMtbG9naW5cIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi1jb21tb24uY3NzXCIsIFwiLi9sb2dpbi5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgLy8gcHVibGljIGlucHV0OiBhbnk7XHJcbiAgICAvLyByZXR1cm5Vcmw6IHN0cmluZztcclxuICAgIC8vIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYgXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGNvb3BlcmF0aXZlU2VydmljZTogQ29vcGVyYXRpdmVTZXJ2aWNlLCBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxyXG4gICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBfcGFnZTogUGFnZSxcclxuICAgICAgIClcclxuICAgICAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dCA9IHtcclxuICAgICAgICAvLyAgICAgXCJlbWFpbFwiOiBcIlwiLFxyXG4gICAgICAgIC8vICAgICBcInBhc3N3b3JkXCI6IFwiXCJcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgLy8gLy8gaWYoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCBmYWxzZSkpIHtcclxuICAgICAgICAvLyAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlY3VyZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgLy8gLy8gfVxyXG5cclxuICAgICAgICAvLyAvLyB0aGlzLmdldENvb3BlcmF0aXZlKCk7XHJcbiAgICAgICAgLy8gLy90aGlzLnJldHVyblVybCA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ3JldHVyblVybCddIHx8ICcvJztcclxuXHJcbiAgICAgICAgLy8gdGhpcy5yZXR1cm5VcmwgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydyZXR1cm5VcmwnXSB8fCAnLyc7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUm91dGluZyB0byBwYWdlIFwiICsgIHRoaXMucmV0dXJuVXJsKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBsb2dpbigpIHtcclxuICAgIC8vICAgICBpZih0aGlzLmlucHV0LmVtYWlsICYmIHRoaXMuaW5wdXQucGFzc3dvcmQpIHtcclxuICAgIC8vICAgICAgICAgbGV0IGFjY291bnQgPSBKU09OLnBhcnNlKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWNjb3VudFwiLCBcInt9XCIpKTtcclxuICAgIC8vICAgICAgICAgaWYodGhpcy5pbnB1dC5lbWFpbCA9PSBhY2NvdW50LmVtYWlsICYmIHRoaXMuaW5wdXQucGFzc3dvcmQgPT0gYWNjb3VudC5wYXNzd29yZCkge1xyXG4gICAgLy8gICAgICAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCB0cnVlKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWN1cmVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJJbmNvcnJlY3QgQ3JlZGVudGlhbHMhXCIpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gbG9naW4oKSB7XHJcbiAgICAvLyAgICAgaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT09IGNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcclxuICAgIC8vICAgICAgLy8gYWxlcnQoXCJDb29wZXIgU3dpdGNoIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiKTtcclxuXHJcbiAgICAvLyAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIkVycm9yIVwiLCBcIkNvb3BlciBTd2l0Y2ggcmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIsIFwiT2tcIik7XHJcbiAgICAvLyAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIC8vICAgICBsb2FkZXIuc2hvdyhvcHRpb25zKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIFJlYWNoaW5nIFwiICsgdGhpcy51c2VybmFtZSArIFwiIFBhc3N3b3JkXCIgKyB0aGlzLnBhc3N3b3JkKTtcclxuICAgIC8vICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpXHJcbiAgICAvLyAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAvLyAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgLy90aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luIGRhdGEgXCIgKyBkYXRhKTtcclxuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucmV0dXJuVXJsXSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgIGxvYWRlci5oaWRlKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIkVycm9yIVwiLCBlcnJvci5lcnJvci5tZXNzYWdlLCBcIk9rXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpICk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIFxyXG5cclxuICAgIC8vIGdldENvb3BlcmF0aXZlKCl7XHJcbiAgICAvLyAgICAgdGhpcy5jb29wZXJhdGl2ZVNlcnZpY2UuZ2V0QWxsQ29vcGVyYXRpdmUoKS5zdWJzY3JpYmUoXHJcbiAgICAvLyAgICAgICAgIGRhdGEgPT4geyBcclxuICAgIC8vICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcGVyYXRpdmUgTGlzdCBcIisgSlNPTi5zdHJpbmdpZnkoZGF0YVtcImRhdGFcIl0pICk7XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgKTtcdCAgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3RhcnRCYWNrZ3JvdW5kQW5pbWF0aW9uKGJhY2tncm91bmQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2NhbGU6IHsgeDogMS4wLCB5OiAxLjAgfSxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIC8vICAgcHVibGljIHNob3dNb2RhbCgpIHtcclxuXHJcbiAgICAvLyAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgLy8gICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgLy8gICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgIC8vICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vICAgICBsZXQgb3B0aW9uczIgPSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAvLyAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvLyAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuIl19
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
var CompleteOrderComponent = /** @class */ (function () {
    // public input: any;
    // returnUrl: string;
    // username: string;
    // password: string;
    // private modal: ModalDialogService, private vcRef: ViewContainerRef 
    function CompleteOrderComponent(route, router, page, cooperativeService, authService, _page) {
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
    CompleteOrderComponent.prototype.ngOnInit = function () {
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
    CompleteOrderComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    CompleteOrderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-completeorder",
            templateUrl: "./completeorder.component.html",
            styleUrls: ["./completeorder-common.css", "./completeorder.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, page_1.Page, cooperative_service_1.CooperativeService, auth_service_1.AuthService,
            page_1.Page])
    ], CompleteOrderComponent);
    return CompleteOrderComponent;
}());
exports.CompleteOrderComponent = CompleteOrderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVvcmRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wbGV0ZW9yZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRTtBQUVuRSwwQ0FBeUQ7QUFPekQsZ0NBQStCO0FBSS9CLHVDQUF1QztBQUV2QyxtREFBbUQ7QUFDbkQsMEVBQXNFO0FBQ3RFLDREQUF3RDtBQUV4RCwyREFBMkQ7QUFFM0Qsb0VBQW9FO0FBRXBFLHVDQUF1QztBQUV2Qyx5Q0FBeUM7QUFDekMsbUdBQW1HO0FBQ25HLG9EQUFvRDtBQUNwRCxJQUFJLE9BQU8sR0FBRztJQUNWLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsT0FBTyxFQUFFO1FBQ1AsYUFBYSxFQUFFLElBQUk7UUFDbkIsVUFBVSxFQUFFLElBQUk7UUFDaEIsY0FBYyxFQUFFLFVBQVMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFDckUsR0FBRyxFQUFFLEdBQUc7UUFDUixvQkFBb0IsRUFBRSxTQUFTO1FBQy9CLHFCQUFxQixFQUFFLElBQUk7UUFDM0IsYUFBYSxFQUFFLENBQUM7UUFDaEIsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQixLQUFLLEVBQUUsU0FBUztLQUNqQjtJQUNELEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsTUFBTSxFQUFFLEVBQUU7UUFDVixhQUFhLEVBQUUsSUFBSTtRQUNuQixLQUFLLEVBQUUsU0FBUztRQUNoQixrQ0FBa0M7UUFDbEMsdUNBQXVDO1FBQ3ZDLGVBQWUsRUFBRSxRQUFRO1FBQ3pCLHNCQUFzQixFQUFFLEtBQUs7UUFDN0IsU0FBUyxFQUFFLElBQUk7S0FHaEI7Q0FDRixDQUFDO0FBVUo7SUFFSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFLcEIsc0VBQXNFO0lBRXRFLGdDQUEyQixLQUFxQixFQUFTLE1BQWMsRUFBUyxJQUFVLEVBQVUsa0JBQXNDLEVBQVUsV0FBdUIsRUFFL0osS0FBVztRQUZJLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFFL0osVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUduQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixJQUFJO0lBQ1IsQ0FBQztJQUdNLHlDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsb0NBQW9DO1FBQ3BDLGtFQUFrRTtRQUNsRSxvRUFBb0U7UUFDcEUsT0FBTztRQUVQLDRCQUE0QjtRQUM1QiwwRUFBMEU7UUFFMUUsd0VBQXdFO1FBRXhFLHFEQUFxRDtJQUd6RCxDQUFDO0lBRUQsbUJBQW1CO0lBQ25CLG9EQUFvRDtJQUNwRCxvRkFBb0Y7SUFDcEYsNkZBQTZGO0lBQzdGLHFFQUFxRTtJQUNyRSx5RUFBeUU7SUFDekUsbUJBQW1CO0lBQ25CLGlFQUFpRTtJQUNqRSxZQUFZO0lBQ1osZUFBZTtJQUNmLDJEQUEyRDtJQUMzRCxRQUFRO0lBQ1IsSUFBSTtJQUVKLFlBQVk7SUFDWix5REFBeUQ7SUFDekQsNkVBQTZFO0lBRTdFLDZHQUE2RztJQUM3RyxnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsb0ZBQW9GO0lBQ3BGLDJEQUEyRDtJQUMzRCxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGlEQUFpRDtJQUNqRCxxREFBcUQ7SUFDckQsd0RBQXdEO0lBQ3hELCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG9EQUFvRDtJQUVwRCxnRkFBZ0Y7SUFFaEYsa0VBQWtFO0lBQ2xFLGlDQUFpQztJQUNqQyxxREFBcUQ7SUFDckQsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixJQUFJO0lBR0osb0JBQW9CO0lBQ3BCLDZEQUE2RDtJQUM3RCxxQkFBcUI7SUFDckIsNEVBQTRFO0lBSzVFLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsK0JBQStCO0lBRS9CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsSUFBSTtJQUVKLHlEQUF3QixHQUF4QixVQUF5QixVQUFVO1FBQy9CLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUEzR00sc0JBQXNCO1FBUmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLCtCQUErQixDQUFDO1NBQzdFLENBQUM7eUNBZW9DLHVCQUFjLEVBQWlCLGVBQU0sRUFBZSxXQUFJLEVBQThCLHdDQUFrQixFQUFzQiwwQkFBVztZQUV4SixXQUFJO09BZGQsc0JBQXNCLENBb0lsQztJQUFELDZCQUFDO0NBQUEsQUFwSUQsSUFvSUM7QUFwSVksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdGlvblR5cGUsIGdldENvbm5lY3Rpb25UeXBlIH0gZnJvbSBcImNvbm5lY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IHByb21wdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5cclxuXHJcbi8vaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkXCI7XHJcblxyXG4vL2ltcG9ydCB7IENvb3BlcmF0aXZlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2luZGV4JztcclxuaW1wb3J0IHtDb29wZXJhdGl2ZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb29wZXJhdGl2ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuXHJcbi8vIGltcG9ydCB7IFROU0ZhbmN5QWxlcnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZhbmN5YWxlcnRcIjtcclxuXHJcbi8vICBpbXBvcnQge0xvYWRpbmdJbmRpY2F0b3J9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcclxuXHJcbi8vIHZhciBsb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG5cclxuLy8gaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG4vLyBpbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xyXG4vLyBpbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9hcHAubW9kYWxcIjtcclxudmFyIG9wdGlvbnMgPSB7XHJcbiAgICBtZXNzYWdlOiAnTG9hZGluZy4uLicsXHJcbiAgICBwcm9ncmVzczogMC42NSxcclxuICAgIGFuZHJvaWQ6IHtcclxuICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcclxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuICAgICAgY2FuY2VsTGlzdGVuZXI6IGZ1bmN0aW9uKGRpYWxvZykgeyBjb25zb2xlLmxvZyhcIkxvYWRpbmcgY2FuY2VsbGVkXCIpIH0sXHJcbiAgICAgIG1heDogMTAwLFxyXG4gICAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcbiAgICAgIHByb2dyZXNzUGVyY2VudEZvcm1hdDogMC41MyxcclxuICAgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDEsXHJcbiAgICAgIGNvbG9yOiBcIiM0QjlFRDZcIiwgLy8gY29sb3Igb2YgaW5kaWNhdG9yIGFuZCBsYWJlbHNcclxuICAgIH0sXHJcbiAgICBpb3M6IHtcclxuICAgICAgZGV0YWlsczogXCJBZGRpdGlvbmFsIGRldGFpbCBub3RlIVwiLFxyXG4gICAgICBtYXJnaW46IDEwLFxyXG4gICAgICBkaW1CYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICBjb2xvcjogXCIjNEI5RUQ2XCIsIC8vIGNvbG9yIG9mIGluZGljYXRvciBhbmQgbGFiZWxzXHJcbiAgICAgIC8vIGJhY2tncm91bmQgYm94IGFyb3VuZCBpbmRpY2F0b3JcclxuICAgICAgLy8gaGlkZUJlemVsIHdpbGwgb3ZlcnJpZGUgdGhpcyBpZiB0cnVlXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcclxuICAgICAgdXNlckludGVyYWN0aW9uRW5hYmxlZDogZmFsc2UsIC8vIGRlZmF1bHQgdHJ1ZS4gU2V0IGZhbHNlIHNvIHRoYXQgdGhlIHRvdWNoZXMgd2lsbCBmYWxsIHRocm91Z2ggaXQuXHJcbiAgICAgIGhpZGVCZXplbDogdHJ1ZSwgLy8gZGVmYXVsdCBmYWxzZSwgY2FuIGhpZGUgdGhlIHN1cnJvdW5kaW5nIGJlemVsXHJcbiAgICAvLyAgIHZpZXc6IFVJVmlldywgLy8gVGFyZ2V0IHZpZXcgdG8gc2hvdyBvbiB0b3Agb2YgKERlZmF1bHRzIHRvIGVudGlyZSB3aW5kb3cpXHJcbiAgICAvLyAgIG1vZGU6IC8vIHNlZSBpT1Mgc3BlY2lmaWMgb3B0aW9ucyBiZWxvd1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJucy1jb21wbGV0ZW9yZGVyXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBsZXRlb3JkZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9jb21wbGV0ZW9yZGVyLWNvbW1vbi5jc3NcIiwgXCIuL2NvbXBsZXRlb3JkZXIuY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcGxldGVPcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgLy8gcHVibGljIGlucHV0OiBhbnk7XHJcbiAgICAvLyByZXR1cm5Vcmw6IHN0cmluZztcclxuICAgIC8vIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYgXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGNvb3BlcmF0aXZlU2VydmljZTogQ29vcGVyYXRpdmVTZXJ2aWNlLCBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxyXG4gICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBfcGFnZTogUGFnZSxcclxuICAgICAgIClcclxuICAgICAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dCA9IHtcclxuICAgICAgICAvLyAgICAgXCJlbWFpbFwiOiBcIlwiLFxyXG4gICAgICAgIC8vICAgICBcInBhc3N3b3JkXCI6IFwiXCJcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgLy8gLy8gaWYoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCBmYWxzZSkpIHtcclxuICAgICAgICAvLyAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlY3VyZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgLy8gLy8gfVxyXG5cclxuICAgICAgICAvLyAvLyB0aGlzLmdldENvb3BlcmF0aXZlKCk7XHJcbiAgICAgICAgLy8gLy90aGlzLnJldHVyblVybCA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ3JldHVyblVybCddIHx8ICcvJztcclxuXHJcbiAgICAgICAgLy8gdGhpcy5yZXR1cm5VcmwgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydyZXR1cm5VcmwnXSB8fCAnLyc7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUm91dGluZyB0byBwYWdlIFwiICsgIHRoaXMucmV0dXJuVXJsKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBsb2dpbigpIHtcclxuICAgIC8vICAgICBpZih0aGlzLmlucHV0LmVtYWlsICYmIHRoaXMuaW5wdXQucGFzc3dvcmQpIHtcclxuICAgIC8vICAgICAgICAgbGV0IGFjY291bnQgPSBKU09OLnBhcnNlKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWNjb3VudFwiLCBcInt9XCIpKTtcclxuICAgIC8vICAgICAgICAgaWYodGhpcy5pbnB1dC5lbWFpbCA9PSBhY2NvdW50LmVtYWlsICYmIHRoaXMuaW5wdXQucGFzc3dvcmQgPT0gYWNjb3VudC5wYXNzd29yZCkge1xyXG4gICAgLy8gICAgICAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCB0cnVlKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWN1cmVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJJbmNvcnJlY3QgQ3JlZGVudGlhbHMhXCIpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gbG9naW4oKSB7XHJcbiAgICAvLyAgICAgaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT09IGNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcclxuICAgIC8vICAgICAgLy8gYWxlcnQoXCJDb29wZXIgU3dpdGNoIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiKTtcclxuXHJcbiAgICAvLyAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIkVycm9yIVwiLCBcIkNvb3BlciBTd2l0Y2ggcmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIsIFwiT2tcIik7XHJcbiAgICAvLyAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIC8vICAgICBsb2FkZXIuc2hvdyhvcHRpb25zKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIFJlYWNoaW5nIFwiICsgdGhpcy51c2VybmFtZSArIFwiIFBhc3N3b3JkXCIgKyB0aGlzLnBhc3N3b3JkKTtcclxuICAgIC8vICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpXHJcbiAgICAvLyAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAvLyAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgLy90aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luIGRhdGEgXCIgKyBkYXRhKTtcclxuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucmV0dXJuVXJsXSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgIGxvYWRlci5oaWRlKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIkVycm9yIVwiLCBlcnJvci5lcnJvci5tZXNzYWdlLCBcIk9rXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpICk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIFxyXG5cclxuICAgIC8vIGdldENvb3BlcmF0aXZlKCl7XHJcbiAgICAvLyAgICAgdGhpcy5jb29wZXJhdGl2ZVNlcnZpY2UuZ2V0QWxsQ29vcGVyYXRpdmUoKS5zdWJzY3JpYmUoXHJcbiAgICAvLyAgICAgICAgIGRhdGEgPT4geyBcclxuICAgIC8vICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcGVyYXRpdmUgTGlzdCBcIisgSlNPTi5zdHJpbmdpZnkoZGF0YVtcImRhdGFcIl0pICk7XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgKTtcdCAgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3RhcnRCYWNrZ3JvdW5kQW5pbWF0aW9uKGJhY2tncm91bmQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2NhbGU6IHsgeDogMS4wLCB5OiAxLjAgfSxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIC8vICAgcHVibGljIHNob3dNb2RhbCgpIHtcclxuXHJcbiAgICAvLyAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgLy8gICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgLy8gICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgIC8vICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vICAgICBsZXQgb3B0aW9uczIgPSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAvLyAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvLyAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuIl19
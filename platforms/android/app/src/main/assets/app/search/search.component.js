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
var SearchComponent = /** @class */ (function () {
    // private modal: ModalDialogService, private vcRef: ViewContainerRef 
    function SearchComponent(route, router, page, cooperativeService, authService, _page) {
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
    SearchComponent.prototype.toggleCheck = function () {
        this.FirstCheckBox.nativeElement.toggle();
    };
    SearchComponent.prototype.getCheckProp = function () {
        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
    };
    SearchComponent.prototype.ngOnInit = function () {
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
    SearchComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], SearchComponent.prototype, "FirstCheckBox", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-search",
            templateUrl: "./search.component.html",
            styleUrls: ["./search-common.css", "./search.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, page_1.Page, cooperative_service_1.CooperativeService, auth_service_1.AuthService,
            page_1.Page])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEY7QUFFMUYsMENBQXlEO0FBT3pELGdDQUErQjtBQUkvQix1Q0FBdUM7QUFFdkMsbURBQW1EO0FBQ25ELDBFQUFzRTtBQUN0RSw0REFBd0Q7QUFFeEQsMkRBQTJEO0FBRTNELG9FQUFvRTtBQUVwRSx1Q0FBdUM7QUFFdkMseUNBQXlDO0FBQ3pDLG1HQUFtRztBQUNuRyxvREFBb0Q7QUFDcEQsSUFBSSxPQUFPLEdBQUc7SUFDVixPQUFPLEVBQUUsWUFBWTtJQUNyQixRQUFRLEVBQUUsSUFBSTtJQUNkLE9BQU8sRUFBRTtRQUNQLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGNBQWMsRUFBRSxVQUFTLE1BQU0sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQ3JFLEdBQUcsRUFBRSxHQUFHO1FBQ1Isb0JBQW9CLEVBQUUsU0FBUztRQUMvQixxQkFBcUIsRUFBRSxJQUFJO1FBQzNCLGFBQWEsRUFBRSxDQUFDO1FBQ2hCLGlCQUFpQixFQUFFLENBQUM7UUFDcEIsS0FBSyxFQUFFLFNBQVM7S0FDakI7SUFDRCxHQUFHLEVBQUU7UUFDSCxPQUFPLEVBQUUseUJBQXlCO1FBQ2xDLE1BQU0sRUFBRSxFQUFFO1FBQ1YsYUFBYSxFQUFFLElBQUk7UUFDbkIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsa0NBQWtDO1FBQ2xDLHVDQUF1QztRQUN2QyxlQUFlLEVBQUUsUUFBUTtRQUN6QixzQkFBc0IsRUFBRSxLQUFLO1FBQzdCLFNBQVMsRUFBRSxJQUFJO0tBR2hCO0NBQ0YsQ0FBQztBQVVKO0lBV0ksc0VBQXNFO0lBRXRFLHlCQUEyQixLQUFxQixFQUFTLE1BQWMsRUFBUyxJQUFVLEVBQVUsa0JBQXNDLEVBQVUsV0FBdUIsRUFFL0osS0FBVztRQUZJLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFFL0osVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUduQixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixJQUFJO0lBQ1IsQ0FBQztJQUdJLHFDQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVNLHNDQUFZLEdBQW5CO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ1Esa0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyxvQ0FBb0M7UUFDcEMsa0VBQWtFO1FBQ2xFLG9FQUFvRTtRQUNwRSxPQUFPO1FBRVAsNEJBQTRCO1FBQzVCLDBFQUEwRTtRQUUxRSx3RUFBd0U7UUFFeEUscURBQXFEO0lBR3pELENBQUM7SUFFRCxtQkFBbUI7SUFDbkIsb0RBQW9EO0lBQ3BELG9GQUFvRjtJQUNwRiw2RkFBNkY7SUFDN0YscUVBQXFFO0lBQ3JFLHlFQUF5RTtJQUN6RSxtQkFBbUI7SUFDbkIsaUVBQWlFO0lBQ2pFLFlBQVk7SUFDWixlQUFlO0lBQ2YsMkRBQTJEO0lBQzNELFFBQVE7SUFDUixJQUFJO0lBRUosWUFBWTtJQUNaLHlEQUF5RDtJQUN6RCw2RUFBNkU7SUFFN0UsNkdBQTZHO0lBQzdHLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixvRkFBb0Y7SUFDcEYsMkRBQTJEO0lBQzNELHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsaURBQWlEO0lBQ2pELHFEQUFxRDtJQUNyRCx3REFBd0Q7SUFDeEQsK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsb0RBQW9EO0lBRXBELGdGQUFnRjtJQUVoRixrRUFBa0U7SUFDbEUsaUNBQWlDO0lBQ2pDLHFEQUFxRDtJQUNyRCwyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLElBQUk7SUFHSixvQkFBb0I7SUFDcEIsNkRBQTZEO0lBQzdELHFCQUFxQjtJQUNyQiw0RUFBNEU7SUFLNUUsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFFL0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixJQUFJO0lBRUosa0RBQXdCLEdBQXhCLFVBQXlCLFVBQVU7UUFDL0IsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNqQixLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTNHYTtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBZ0IsaUJBQVU7MERBQUM7SUFSakMsZUFBZTtRQVIzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMscUJBQXFCLEVBQUUsd0JBQXdCLENBQUM7U0FDL0QsQ0FBQzt5Q0FnQm9DLHVCQUFjLEVBQWlCLGVBQU0sRUFBZSxXQUFJLEVBQThCLHdDQUFrQixFQUFzQiwwQkFBVztZQUV4SixXQUFJO09BZmQsZUFBZSxDQTRJM0I7SUFBRCxzQkFBQztDQUFBLEFBNUlELElBNElDO0FBNUlZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IENoZWNrQm94IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jaGVja2JveFwiO1xyXG5cclxuLy9pbXBvcnQgeyBhbGVydCB9IGZyb20gXCIuLi8uLi9zaGFyZWRcIjtcclxuXHJcbi8vaW1wb3J0IHsgQ29vcGVyYXRpdmUgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW5kZXgnO1xyXG5pbXBvcnQge0Nvb3BlcmF0aXZlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Nvb3BlcmF0aXZlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5cclxuLy8gaW1wb3J0IHsgVE5TRmFuY3lBbGVydCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmFuY3lhbGVydFwiO1xyXG5cclxuLy8gIGltcG9ydCB7TG9hZGluZ0luZGljYXRvcn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiO1xyXG5cclxuLy8gdmFyIGxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcblxyXG4vLyBpbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbi8vIGltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSxNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XHJcbi8vIGltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2FwcC5tb2RhbFwiO1xyXG52YXIgb3B0aW9ucyA9IHtcclxuICAgIG1lc3NhZ2U6ICdMb2FkaW5nLi4uJyxcclxuICAgIHByb2dyZXNzOiAwLjY1LFxyXG4gICAgYW5kcm9pZDoge1xyXG4gICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxyXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG4gICAgICBjYW5jZWxMaXN0ZW5lcjogZnVuY3Rpb24oZGlhbG9nKSB7IGNvbnNvbGUubG9nKFwiTG9hZGluZyBjYW5jZWxsZWRcIikgfSxcclxuICAgICAgbWF4OiAxMDAsXHJcbiAgICAgIHByb2dyZXNzTnVtYmVyRm9ybWF0OiBcIiUxZC8lMmRcIixcclxuICAgICAgcHJvZ3Jlc3NQZXJjZW50Rm9ybWF0OiAwLjUzLFxyXG4gICAgICBwcm9ncmVzc1N0eWxlOiAxLFxyXG4gICAgICBzZWNvbmRhcnlQcm9ncmVzczogMSxcclxuICAgICAgY29sb3I6IFwiIzRCOUVENlwiLCAvLyBjb2xvciBvZiBpbmRpY2F0b3IgYW5kIGxhYmVsc1xyXG4gICAgfSxcclxuICAgIGlvczoge1xyXG4gICAgICBkZXRhaWxzOiBcIkFkZGl0aW9uYWwgZGV0YWlsIG5vdGUhXCIsXHJcbiAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgIGRpbUJhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgIGNvbG9yOiBcIiM0QjlFRDZcIiwgLy8gY29sb3Igb2YgaW5kaWNhdG9yIGFuZCBsYWJlbHNcclxuICAgICAgLy8gYmFja2dyb3VuZCBib3ggYXJvdW5kIGluZGljYXRvclxyXG4gICAgICAvLyBoaWRlQmV6ZWwgd2lsbCBvdmVycmlkZSB0aGlzIGlmIHRydWVcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxyXG4gICAgICB1c2VySW50ZXJhY3Rpb25FbmFibGVkOiBmYWxzZSwgLy8gZGVmYXVsdCB0cnVlLiBTZXQgZmFsc2Ugc28gdGhhdCB0aGUgdG91Y2hlcyB3aWxsIGZhbGwgdGhyb3VnaCBpdC5cclxuICAgICAgaGlkZUJlemVsOiB0cnVlLCAvLyBkZWZhdWx0IGZhbHNlLCBjYW4gaGlkZSB0aGUgc3Vycm91bmRpbmcgYmV6ZWxcclxuICAgIC8vICAgdmlldzogVUlWaWV3LCAvLyBUYXJnZXQgdmlldyB0byBzaG93IG9uIHRvcCBvZiAoRGVmYXVsdHMgdG8gZW50aXJlIHdpbmRvdylcclxuICAgIC8vICAgbW9kZTogLy8gc2VlIGlPUyBzcGVjaWZpYyBvcHRpb25zIGJlbG93XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLXNlYXJjaFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZWFyY2guY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9zZWFyY2gtY29tbW9uLmNzc1wiLCBcIi4vc2VhcmNoLmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgLy8gcHVibGljIGlucHV0OiBhbnk7XHJcbiAgICAvLyByZXR1cm5Vcmw6IHN0cmluZztcclxuICAgIC8vIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAvLyBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuXHJcbiAgQFZpZXdDaGlsZChcIkNCMVwiKSBGaXJzdENoZWNrQm94OiBFbGVtZW50UmVmO1xyXG5cclxuXHJcbiAgICAvLyBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYgXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGNvb3BlcmF0aXZlU2VydmljZTogQ29vcGVyYXRpdmVTZXJ2aWNlLCBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxyXG4gICAgICAgXHJcbiAgICAgICAgcHJpdmF0ZSBfcGFnZTogUGFnZSxcclxuICAgICAgIClcclxuICAgICAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dCA9IHtcclxuICAgICAgICAvLyAgICAgXCJlbWFpbFwiOiBcIlwiLFxyXG4gICAgICAgIC8vICAgICBcInBhc3N3b3JkXCI6IFwiXCJcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG5cclxuICBwdWJsaWMgdG9nZ2xlQ2hlY2soKSB7XHJcbiAgICB0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC50b2dnbGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDaGVja1Byb3AoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2hlY2tlZCBwcm9wIHZhbHVlID0gJyArIHRoaXMuRmlyc3RDaGVja0JveC5uYXRpdmVFbGVtZW50LmNoZWNrZWQpO1xyXG4gIH1cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgLy8gLy8gaWYoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCBmYWxzZSkpIHtcclxuICAgICAgICAvLyAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlY3VyZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgLy8gLy8gfVxyXG5cclxuICAgICAgICAvLyAvLyB0aGlzLmdldENvb3BlcmF0aXZlKCk7XHJcbiAgICAgICAgLy8gLy90aGlzLnJldHVyblVybCA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ3JldHVyblVybCddIHx8ICcvJztcclxuXHJcbiAgICAgICAgLy8gdGhpcy5yZXR1cm5VcmwgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydyZXR1cm5VcmwnXSB8fCAnLyc7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUm91dGluZyB0byBwYWdlIFwiICsgIHRoaXMucmV0dXJuVXJsKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBsb2dpbigpIHtcclxuICAgIC8vICAgICBpZih0aGlzLmlucHV0LmVtYWlsICYmIHRoaXMuaW5wdXQucGFzc3dvcmQpIHtcclxuICAgIC8vICAgICAgICAgbGV0IGFjY291bnQgPSBKU09OLnBhcnNlKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWNjb3VudFwiLCBcInt9XCIpKTtcclxuICAgIC8vICAgICAgICAgaWYodGhpcy5pbnB1dC5lbWFpbCA9PSBhY2NvdW50LmVtYWlsICYmIHRoaXMuaW5wdXQucGFzc3dvcmQgPT0gYWNjb3VudC5wYXNzd29yZCkge1xyXG4gICAgLy8gICAgICAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCB0cnVlKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWN1cmVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJJbmNvcnJlY3QgQ3JlZGVudGlhbHMhXCIpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gbG9naW4oKSB7XHJcbiAgICAvLyAgICAgaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT09IGNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcclxuICAgIC8vICAgICAgLy8gYWxlcnQoXCJDb29wZXIgU3dpdGNoIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiKTtcclxuXHJcbiAgICAvLyAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIkVycm9yIVwiLCBcIkNvb3BlciBTd2l0Y2ggcmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIsIFwiT2tcIik7XHJcbiAgICAvLyAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIC8vICAgICBsb2FkZXIuc2hvdyhvcHRpb25zKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIFJlYWNoaW5nIFwiICsgdGhpcy51c2VybmFtZSArIFwiIFBhc3N3b3JkXCIgKyB0aGlzLnBhc3N3b3JkKTtcclxuICAgIC8vICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpXHJcbiAgICAvLyAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAvLyAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgLy90aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxvZ2luIGRhdGEgXCIgKyBkYXRhKTtcclxuICAgIC8vICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMucmV0dXJuVXJsXSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgIGxvYWRlci5oaWRlKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoZXJyb3IpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIkVycm9yIVwiLCBlcnJvci5lcnJvci5tZXNzYWdlLCBcIk9rXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpICk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbG9hZGVyLmhpZGUoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIFxyXG5cclxuICAgIC8vIGdldENvb3BlcmF0aXZlKCl7XHJcbiAgICAvLyAgICAgdGhpcy5jb29wZXJhdGl2ZVNlcnZpY2UuZ2V0QWxsQ29vcGVyYXRpdmUoKS5zdWJzY3JpYmUoXHJcbiAgICAvLyAgICAgICAgIGRhdGEgPT4geyBcclxuICAgIC8vICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcGVyYXRpdmUgTGlzdCBcIisgSlNPTi5zdHJpbmdpZnkoZGF0YVtcImRhdGFcIl0pICk7XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgKTtcdCAgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3RhcnRCYWNrZ3JvdW5kQW5pbWF0aW9uKGJhY2tncm91bmQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2NhbGU6IHsgeDogMS4wLCB5OiAxLjAgfSxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIC8vICAgcHVibGljIHNob3dNb2RhbCgpIHtcclxuXHJcbiAgICAvLyAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgLy8gICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxyXG4gICAgLy8gICAgICAgICBjb250ZXh0OiB7fSxcclxuICAgIC8vICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vICAgICBsZXQgb3B0aW9uczIgPSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnRleHQ6IHt9LFxyXG4gICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAvLyAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvLyAgICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuIl19
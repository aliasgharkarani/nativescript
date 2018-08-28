"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var page_1 = require("ui/page");
var cooperative_service_1 = require("../../services/cooperative.service");
var auth_service_1 = require("../../services/auth.service");
var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(router, page, cooperativeService, authService, route) {
        this.router = router;
        this.page = page;
        this.cooperativeService = cooperativeService;
        this.authService = authService;
        this.route = route;
        this.input = {
            "email": "",
            "password": ""
        };
    }
    PasswordComponent.prototype.ngOnInit = function () {
        // this.page.actionBarHidden = true;
        // if(ApplicationSettings.getBoolean("authenticated", false)) {
        //     this.router.navigate(["/secure"], { clearHistory: true });
        // }
        // this.getCooperative();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    PasswordComponent.prototype.changePassword = function () {
        this.changepasswordservice(this.resetToken, this.password, this.confirm);
    };
    PasswordComponent.prototype.changepasswordservice = function (resettoken, newpassword, verypassword) {
        console.log("User Token " + resettoken);
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
    };
    PasswordComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    PasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-password",
            templateUrl: "./password.component.html",
            styleUrls: ["./password-common.css", "./password.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page, cooperative_service_1.CooperativeService, auth_service_1.AuthService,
            router_2.ActivatedRoute])
    ], PasswordComponent);
    return PasswordComponent;
}());
exports.PasswordComponent = PasswordComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUkvRCwwQ0FBeUQ7QUFPekQsZ0NBQStCO0FBTy9CLDBFQUFzRTtBQUN0RSw0REFBd0Q7QUFXeEQ7SUFTSSwyQkFBMkIsTUFBd0IsRUFBUyxJQUFVLEVBQVUsa0JBQXNDLEVBQVUsV0FBdUIsRUFDM0ksS0FBcUI7UUFETixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFTLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDM0ksVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFHN0IsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQTtJQUNMLENBQUM7SUFHTSxvQ0FBUSxHQUFmO1FBQ0csb0NBQW9DO1FBQ25DLCtEQUErRDtRQUMvRCxpRUFBaUU7UUFDakUsSUFBSTtRQUVKLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUM7SUFHekUsQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsaURBQXFCLEdBQXJCLFVBQXNCLFVBQWtCLEVBQUMsV0FBbUIsRUFBQyxZQUFvQjtRQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUd4QyxpRkFBaUY7UUFDakYsaUJBQWlCO1FBQ2pCLGlFQUFpRTtRQUVqRSwyQkFBMkI7UUFDM0IseUNBQXlDO1FBQ3pDLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsMkJBQTJCO1FBRTNCLGFBQWE7UUFDYixZQUFZO0lBQ2hCLENBQUM7SUFFQSxvREFBd0IsR0FBeEIsVUFBeUIsVUFBVTtRQUNoQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBM0RNLGlCQUFpQjtRQVI3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsMEJBQTBCLENBQUM7U0FDbkUsQ0FBQzt5Q0FZcUMseUJBQWdCLEVBQWUsV0FBSSxFQUE4Qix3Q0FBa0IsRUFBc0IsMEJBQVc7WUFDcEksdUJBQWM7T0FWeEIsaUJBQWlCLENBNkQ3QjtJQUFELHdCQUFDO0NBQUEsQUE3REQsSUE2REM7QUE3RFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkXCI7XHJcblxyXG5pbXBvcnQgeyBDb29wZXJhdGl2ZSB9IGZyb20gJy4uLy4uL21vZGVscy9pbmRleCc7XHJcbmltcG9ydCB7Q29vcGVyYXRpdmVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29vcGVyYXRpdmUuc2VydmljZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibnMtcGFzc3dvcmRcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFzc3dvcmQuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9wYXNzd29yZC1jb21tb24uY3NzXCIsIFwiLi9wYXNzd29yZC5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIGlucHV0OiBhbnk7XHJcbiAgICByZXR1cm5Vcmw6IHN0cmluZztcclxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgY29uZmlybTogc3RyaW5nO1xyXG4gICAgcmVzZXRUb2tlbjogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgY29vcGVyYXRpdmVTZXJ2aWNlOiBDb29wZXJhdGl2ZVNlcnZpY2UsIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgXHJcbiAgICAgICApIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0ge1xyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgLy8gdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgLy8gaWYoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCBmYWxzZSkpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlY3VyZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyB0aGlzLmdldENvb3BlcmF0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5yZXR1cm5VcmwgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydyZXR1cm5VcmwnXSB8fCAnLyc7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQYXNzd29yZCgpe1xyXG4gICAgICAgIHRoaXMuY2hhbmdlcGFzc3dvcmRzZXJ2aWNlKHRoaXMucmVzZXRUb2tlbix0aGlzLnBhc3N3b3JkLHRoaXMuY29uZmlybSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlcGFzc3dvcmRzZXJ2aWNlKHJlc2V0dG9rZW46IHN0cmluZyxuZXdwYXNzd29yZDogc3RyaW5nLHZlcnlwYXNzd29yZDogc3RyaW5nKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgVG9rZW4gXCIrICByZXNldHRva2VuKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLnJlc2V0UGFzc3dvcmQocmVzZXR0b2tlbixuZXdwYXNzd29yZCx2ZXJ5cGFzc3dvcmQpLnN1YnNjcmliZShcclxuICAgICAgICAvLyAgICAgZGF0YSA9PiB7IFxyXG4gICAgICAgIC8vICAgICAgY29uc29sZS5sb2coXCJVc2VyIG5hbWUgXCIrIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSApO1xyXG4gICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgLy8gUmVkaXJlY3QgdG8gT1RQXHJcbiAgICAgICAgLy8gICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xyXG4gICAgICAgIC8vICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgZXJyID0+IHtcclxuICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICk7XHQgIFxyXG4gICAgfVxyXG5cclxuICAgICBzdGFydEJhY2tncm91bmRBbmltYXRpb24oYmFja2dyb3VuZCkge1xyXG4gICAgICAgIGJhY2tncm91bmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY2FsZTogeyB4OiAxLjAsIHk6IDEuMCB9LFxyXG4gICAgICAgICAgZHVyYXRpb246IDEwMDAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
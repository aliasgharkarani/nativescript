"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var connectivity_1 = require("connectivity");
var cooperative_service_1 = require("../../services/cooperative.service");
var cooperativeStaff_service_1 = require("../../services/cooperativeStaff.service");
var auth_service_1 = require("../../services/auth.service");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var LS = require("nativescript-localstorage");
var ChangePassword2Component = /** @class */ (function () {
    function ChangePassword2Component(location, cooperativeService, cooperativeStaffService, router, activatedRoute, authService) {
        this.location = location;
        this.cooperativeService = cooperativeService;
        this.cooperativeStaffService = cooperativeStaffService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.cooperative = [];
        this.hint = "Select Cooperative";
        this.cssClass = "default";
        this.PasswordLabel = "";
        this.isNew = false;
    }
    ChangePassword2Component.prototype.ngAfterViewInit = function () {
    };
    ChangePassword2Component.prototype.ngOnInit = function () {
        var dataObject = JSON.parse(LS.getItem('currentUser'));
        console.log("User ID " + dataObject._id);
        if (dataObject._id) {
            this.userId = dataObject._id;
            this.userMode = dataObject.userMode;
            if (dataObject.userMode == "New") {
                this.oldpasswordhint = "Temporary Password";
                this.PasswordLabel = "Set Password";
                this.isNew = true;
            }
            else {
                this.oldpasswordhint = "Old Password";
                this.PasswordLabel = "Change Password";
                this.isNew = false;
            }
        }
        // this.userId = this.activatedRoute.snapshot.params["userId"];
        // this.userMode = this.activatedRoute.snapshot.params["userMode"];
    };
    ChangePassword2Component.prototype.register = function () {
        // if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
        //     ApplicationSettings.setString("account", JSON.stringify(this.input));
        //     this.location.back();
        // } else {
        //     (new SnackBar()).simple("All Fields Required!");
        // }
        console.log("Reaching Register ");
    };
    ChangePassword2Component.prototype.onNavBtnTap = function () {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    };
    ChangePassword2Component.prototype.cancel = function () {
    };
    ChangePassword2Component.prototype.goBack = function () {
        this.location.back();
    };
    ChangePassword2Component.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    ChangePassword2Component.prototype.sendVerifyAuth = function (verifyAuth) {
        console.log("Verify " + verifyAuth.staffId);
        this.cooperativeStaffService.verifyAuthToCreatLater(verifyAuth).subscribe(function (data) {
            console.log("Very Auth " + JSON.stringify(data["data"]));
        }, function (err) {
            console.log(err);
        });
    };
    ChangePassword2Component.prototype.next = function () {
        var _this = this;
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            // alert("Cooper Switch requires an internet connection to log in.");
            nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", "Cooper Switch requires an internet connection to log in.", "Ok");
            return;
        }
        //this.loading = true;
        console.log("Login Reaching " + this.opass + " Password" + this.npass);
        this.authService.resetPassword(this.userId, this.opass, this.npass, this.cnpass, this.userMode)
            .subscribe(function (data) {
            //this.isAuthenticating = false;
            console.log("change password data " + JSON.stringify(data["data"]));
            if (_this.userMode == "New") {
                LS.removeItem('currentUser');
                LS.setItem('currentUser', JSON.stringify(data["data"]));
                _this.router.navigate(['/verifyphone']);
            }
        }, function (error) {
            //this.alertService.error(error);
            nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", error.error.message, "Ok");
            console.log("Error " + JSON.stringify(error));
            //  this.isAuthenticating = false;
            // this.loading = false;
        });
    };
    ChangePassword2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-changepassword2",
            templateUrl: "changepassword2.component.html",
            styleUrls: ["./changepassword2-common.css", "./changepassword2.component.css"],
        }),
        __metadata("design:paramtypes", [common_1.Location, cooperative_service_1.CooperativeService, cooperativeStaff_service_1.CooperativeStaffService,
            router_1.Router, router_1.ActivatedRoute, auth_service_1.AuthService])
    ], ChangePassword2Component);
    return ChangePassword2Component;
}());
exports.ChangePassword2Component = ChangePassword2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlcGFzc3dvcmQyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYW5nZXBhc3N3b3JkMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Q7QUFDL0QsMENBQXlEO0FBQ3pELDBDQUEyQztBQUczQyw2Q0FBaUU7QUFVakUsMEVBQXNFO0FBQ3RFLG9GQUFnRjtBQUNoRiw0REFBd0Q7QUFFeEQsbUVBQXdEO0FBR3hELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBUWhEO0lBc0JJLGtDQUEyQixRQUFrQixFQUFVLGtCQUFxQyxFQUFVLHVCQUErQyxFQUN6SSxNQUFjLEVBQVUsY0FBOEIsRUFBVSxXQUF1QjtRQUR4RSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUFVLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBd0I7UUFDekksV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBakJuRyxnQkFBVyxHQUF1QixFQUFFLENBQUM7UUFDckMsU0FBSSxHQUFXLG9CQUFvQixDQUFDO1FBRTdCLGFBQVEsR0FBZ0IsU0FBUyxDQUFDO1FBU3pDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLFVBQUssR0FBWSxLQUFLLENBQUM7SUFNdkIsQ0FBQztJQUVELGtEQUFlLEdBQWY7SUFFRCxDQUFDO0lBRVEsMkNBQVEsR0FBZjtRQUdHLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBSXZELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsR0FB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QXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCxBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFNuYWNrQmFyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcblxyXG5pbXBvcnQgeyBWYWx1ZUxpc3QsIERyb3BEb3duIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBDb29wZXJhdGl2ZSB9IGZyb20gJy4uLy4uL21vZGVscy9pbmRleCc7XHJcbmltcG9ydCB7Q29vcGVyYXRpdmVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29vcGVyYXRpdmUuc2VydmljZVwiO1xyXG5pbXBvcnQge0Nvb3BlcmF0aXZlU3RhZmZTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29vcGVyYXRpdmVTdGFmZi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IFROU0ZhbmN5QWxlcnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZhbmN5YWxlcnRcIjtcclxuXHJcbmltcG9ydCB7Q29vcGVyYXRpdmVTdGFmZixWZXJpZnlBdXRofSBmcm9tIFwiLi4vLi4vbW9kZWxzL2luZGV4XCI7XHJcbmxldCBMUyA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLWNoYW5nZXBhc3N3b3JkMlwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiY2hhbmdlcGFzc3dvcmQyLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vY2hhbmdlcGFzc3dvcmQyLWNvbW1vbi5jc3NcIiwgXCIuL2NoYW5nZXBhc3N3b3JkMi5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkMkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIGlucHV0OiBhbnk7XHJcbiAgICBzZWxlY3RlZENvb3BlcmF0aXZlSW5kZXg6IG51bWJlciA7XHJcbiAgICBzZWxlY3RlZENvb3BlcmF0aXZlIDogc3RyaW5nO1xyXG4gICAgc3RhZmZJZDogU3RyaW5nO1xyXG4gICAgY29vcGVyYXRpdmU6IEFycmF5PENvb3BlcmF0aXZlPiA9IFtdO1xyXG4gICAgaGludDogc3RyaW5nID0gXCJTZWxlY3QgQ29vcGVyYXRpdmVcIjtcclxuICAgIHB1YmxpYyBjb29wZXJhdGl2ZUxpc3Q6IFZhbHVlTGlzdDxzdHJpbmc+O1xyXG4gICAgcHVibGljIGNzc0NsYXNzOiBzdHJpbmcgICAgICA9IFwiZGVmYXVsdFwiO1xyXG4gICAgY29vcGVyYXRpdmVTdGFmZjogQ29vcGVyYXRpdmVTdGFmZjtcclxuICAgIHZlcmlmeUF1dGg6IFZlcmlmeUF1dGg7XHJcbiAgICBvcGFzczogU3RyaW5nO1xyXG4gICAgbnBhc3M6IFN0cmluZztcclxuICAgIHVzZXJJZDogU3RyaW5nO1xyXG4gICAgdXNlck1vZGU6IFN0cmluZztcclxuICAgIGNucGFzczogU3RyaW5nO1xyXG4gICAgb2xkcGFzc3dvcmRoaW50OiBTdHJpbmc7XHJcbiAgICBQYXNzd29yZExhYmVsOiBTdHJpbmcgPSBcIlwiO1xyXG4gICAgaXNOZXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIGNvb3BlcmF0aXZlU2VydmljZTpDb29wZXJhdGl2ZVNlcnZpY2UsIHByaXZhdGUgY29vcGVyYXRpdmVTdGFmZlNlcnZpY2U6Q29vcGVyYXRpdmVTdGFmZlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UpIHtcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgXHJcbiAgIH1cclxuICAgXHJcbiAgICAgcHVibGljIG5nT25Jbml0KCkge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGRhdGFPYmplY3QgPSBKU09OLnBhcnNlKExTLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpO1xyXG5cclxuICAgICAgIFxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgSUQgXCIgKyBkYXRhT2JqZWN0Ll9pZCk7XHJcbiAgICAgICAgICBpZihkYXRhT2JqZWN0Ll9pZClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aGlzLnVzZXJJZCA9IGRhdGFPYmplY3QuX2lkO1xyXG4gICAgICAgICAgICAgIHRoaXMudXNlck1vZGUgPSBkYXRhT2JqZWN0LnVzZXJNb2RlO1xyXG4gICAgICAgICAgICAgIGlmKGRhdGFPYmplY3QudXNlck1vZGUgPT0gXCJOZXdcIilcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub2xkcGFzc3dvcmRoaW50ID0gXCJUZW1wb3JhcnkgUGFzc3dvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5QYXNzd29yZExhYmVsID0gXCJTZXQgUGFzc3dvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZHBhc3N3b3JkaGludCA9IFwiT2xkIFBhc3N3b3JkXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBhc3N3b3JkTGFiZWwgPSBcIkNoYW5nZSBQYXNzd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMudXNlcklkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJ1c2VySWRcIl07XHJcbiAgICAgICAgLy8gdGhpcy51c2VyTW9kZSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1zW1widXNlck1vZGVcIl07XHJcbiAgICAgfVxyXG4gICAgcHVibGljIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIC8vIGlmKHRoaXMuaW5wdXQuZmlyc3RuYW1lICYmIHRoaXMuaW5wdXQubGFzdG5hbWUgJiYgdGhpcy5pbnB1dC5lbWFpbCAmJiB0aGlzLmlucHV0LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgLy8gICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWNjb3VudFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlucHV0KSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIChuZXcgU25hY2tCYXIoKSkuc2ltcGxlKFwiQWxsIEZpZWxkcyBSZXF1aXJlZCFcIik7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlYWNoaW5nIFJlZ2lzdGVyIFwiICk7XHJcblxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25OYXZCdG5UYXAoKXtcclxuICAgICAgICAvLyBUaGlzIGNvZGUgd2lsbCBiZSBjYWxsZWQgb25seSBpbiBBbmRyb2lkLlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmF2aWdhdGlvbiBidXR0b24gdGFwcGVkIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWwoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxuICAgIHN0YXJ0QmFja2dyb3VuZEFuaW1hdGlvbihiYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC5hbmltYXRlKHtcclxuICAgICAgICAgIHNjYWxlOiB7IHg6IDEuMCwgeTogMS4wIH0sXHJcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMDBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcblxyXG4gIFxyXG5cclxuICAgIHNlbmRWZXJpZnlBdXRoKHZlcmlmeUF1dGg6IENvb3BlcmF0aXZlU3RhZmYpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmVyaWZ5IFwiKyAgdmVyaWZ5QXV0aC5zdGFmZklkKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmNvb3BlcmF0aXZlU3RhZmZTZXJ2aWNlLnZlcmlmeUF1dGhUb0NyZWF0TGF0ZXIodmVyaWZ5QXV0aCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHsgXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZlcnkgQXV0aCBcIisgSlNPTi5zdHJpbmdpZnkoZGF0YVtcImRhdGFcIl0pICk7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1x0ICBcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCl7XHJcblxyXG4gICAgICAgIGlmIChnZXRDb25uZWN0aW9uVHlwZSgpID09PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiQ29vcGVyIFN3aXRjaCByZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIGxvZyBpbi5cIik7XHJcbiAgIFxyXG4gICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93RXJyb3IoXCJFcnJvciFcIiwgXCJDb29wZXIgU3dpdGNoIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gbG9nIGluLlwiLCBcIk9rXCIpO1xyXG4gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAvL3RoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBSZWFjaGluZyBcIiArIHRoaXMub3Bhc3MgKyBcIiBQYXNzd29yZFwiICsgdGhpcy5ucGFzcyk7XHJcbiAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5yZXNldFBhc3N3b3JkKHRoaXMudXNlcklkLHRoaXMub3Bhc3MsdGhpcy5ucGFzcywgdGhpcy5jbnBhc3MsdGhpcy51c2VyTW9kZSlcclxuICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAvL3RoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlIHBhc3N3b3JkIGRhdGEgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhW1wiZGF0YVwiXSkgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnVzZXJNb2RlID09IFwiTmV3XCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMUy5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTFMuc2V0SXRlbSgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeShkYXRhW1wiZGF0YVwiXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdmVyaWZ5cGhvbmUnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKGVycm9yKTtcclxuICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93RXJyb3IoXCJFcnJvciFcIiwgZXJyb3IuZXJyb3IubWVzc2FnZSwgXCJPa1wiKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBcIiArIEpTT04uc3RyaW5naWZ5KGVycm9yKSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgICBcclxuXHJcbn0iXX0=
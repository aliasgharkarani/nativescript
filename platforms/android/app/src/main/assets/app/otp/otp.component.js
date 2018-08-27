"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
// import { Cooperative } from '../../models/index';
// import {AuthService} from "../../services/auth.service";
// import {CooperativeStaff,VerifyAuth} from "../../models/index";
var LS = require("nativescript-localstorage");
// import { TNSFancyAlert } from "nativescript-fancyalert";
var router_1 = require("@angular/router");
var OtpComponent = /** @class */ (function () {
    // public constructor(private location: Location, private authService: AuthService,private router: Router, private activatedRoute: ActivatedRoute) {
    function OtpComponent(location, router, activatedRoute) {
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
        // cooperative: Array<Cooperative> = [];
        this.hint = "Select Cooperative";
        this.cssClass = "default";
        this.input = {
            "firstname": "",
            "lastname": "",
            "email": "",
            "password": ""
        };
    }
    OtpComponent.prototype.ngAfterViewInit = function () {
    };
    OtpComponent.prototype.ngOnInit = function () {
        var dataObject = JSON.parse(LS.getItem('currentUser'));
        console.log("User ID " + dataObject._id);
        if (dataObject._id) {
            this.userId = dataObject._id;
            this.userMode = dataObject.userMode;
        }
    };
    OtpComponent.prototype.register = function () {
        // if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
        //     ApplicationSettings.setString("account", JSON.stringify(this.input));
        //     this.location.back();
        // } else {
        //     (new SnackBar()).simple("All Fields Required!");
        // }
        console.log("Reaching Register ");
    };
    OtpComponent.prototype.onNavBtnTap = function () {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    };
    OtpComponent.prototype.goBack = function () {
        this.location.back();
    };
    OtpComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    OtpComponent.prototype.oncooperativechange = function (args) {
        // console.log(`Drop Down selected index changed  ${args.oldIndex} to ${args.newIndex}. New value is "${this.sessionitems.getValue(
        //     args.newIndex)}"`);
        console.log("Selected ID " + args.newIndex);
        this.selectedCooperative = this.cooperativeList.getValue(args.newIndex);
        console.log("Selected Id Value  " + this.selectedCooperative);
    };
    OtpComponent.prototype.genarateNewToken = function () {
        this.sendOTP(this.userId);
    };
    OtpComponent.prototype.verifyOTP = function () {
        this.getOTP(this.tpass, this.userId);
    };
    OtpComponent.prototype.sendOTP = function (userId) {
        console.log("Edit Phone Number " + userId);
        // this.authService.sendToken(userId).subscribe(
        (function (data) {
            console.log("OTP Send" + JSON.stringify(data["data"]));
            //send OTP
            //  TNSFancyAlert.showSuccess("Success!", "OTP sent", "Ok")
            //  .then( () => { /* user pressed the button */
            // });
            //   },
            //   err => {
            //    console.log(err);
            //    TNSFancyAlert.showError("Error!", err.error.message, "Ok") .then( () => { /* user pressed the button */
            //  });
        });
        // );	  
    };
    OtpComponent.prototype.getOTP = function (token, userId) {
        var _this = this;
        console.log("Edit Phone Number " + userId);
        // this.authService.getToken(token,userId).subscribe(
        (function (data) {
            console.log("Get OTP Ok " + JSON.stringify(data["data"]));
            //    TNSFancyAlert.showSuccess("Success!", "Token Verified", "Ok")
            //  .then( () => { /* user pressed the button */ 
            // });
            //send OTP
            // Redirect to Change Pin
            if (_this.userMode == "OTPVerify") {
                LS.removeItem('currentUser');
                //  LS.setItem('currentUser', JSON.stringify(data["data"]));
                _this.router.navigate(['/transpin']);
            }
            if (_this.userMode == "TransPin") {
                LS.removeItem('currentUser');
                //  LS.setItem('currentUser', JSON.stringify(data["data"]));
                _this.router.navigate(['/']);
            }
            if (_this.userMode == "Confirm") {
                //  LS.removeItem('currentUser');
                //  LS.setItem('currentUser', JSON.stringify(data["data"]));
                _this.router.navigate(['/']);
            }
            //   },
            //   err => {
            //    console.log(err);
            //    TNSFancyAlert.showError("Error!", err.error.message, "Ok") .then( () => { /* user pressed the button */
            //  });
        });
        // );	  
    };
    OtpComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-otp",
            templateUrl: "otp.component.html",
            styleUrls: ["./otp-common.css", "./otp.component.css"],
        }),
        __metadata("design:paramtypes", [common_1.Location, router_1.Router, router_1.ActivatedRoute])
    ], OtpComponent);
    return OtpComponent;
}());
exports.OtpComponent = OtpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm90cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Q7QUFDL0QsMENBQTJDO0FBWTNDLG9EQUFvRDtBQUVwRCwyREFBMkQ7QUFHM0Qsa0VBQWtFO0FBQ2xFLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBRWhELDJEQUEyRDtBQUUzRCwwQ0FBeUQ7QUFTekQ7SUFnQkksb0pBQW9KO0lBQ3BKLHNCQUEyQixRQUFrQixFQUFTLE1BQWMsRUFBVSxjQUE4QjtRQUFqRixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVg1Ryx3Q0FBd0M7UUFDeEMsU0FBSSxHQUFXLG9CQUFvQixDQUFDO1FBRTdCLGFBQVEsR0FBZ0IsU0FBUyxDQUFDO1FBVXJDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxXQUFXLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxFQUFFO1lBQ2QsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtTQUNqQixDQUFBO0lBQ0wsQ0FBQztJQUVELHNDQUFlLEdBQWY7SUFFRCxDQUFDO0lBRVEsK0JBQVEsR0FBZjtRQUVHLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBSXZELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQ2xCLENBQUM7WUFDRyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFB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Q0FBQyxDQUMvQixDQUFDO2dCQUNHLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRTlCLDREQUE0RDtnQkFFM0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFFRCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUM5QixDQUFDO2dCQUNFLGlDQUFpQztnQkFFakMsNERBQTREO2dCQUUzRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUtGLE9BQU87WUFDUCxhQUFhO1lBQ2IsdUJBQXVCO1lBRXZCLDZHQUE2RztZQUc3RyxPQUFPO1FBRUYsQ0FBQyxDQUFBLENBQUE7UUFDTixRQUFRO0lBQ2hCLENBQUM7SUFsTFEsWUFBWTtRQVB4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUscUJBQXFCLENBQUM7U0FDekQsQ0FBQzt5Q0FtQnVDLGlCQUFRLEVBQWlCLGVBQU0sRUFBMEIsdUJBQWM7T0FqQm5HLFlBQVksQ0FxTHhCO0lBQUQsbUJBQUM7Q0FBQSxBQXJMRCxJQXFMQztBQXJMWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQsQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG4vLyBpbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdGlvblR5cGUsIGdldENvbm5lY3Rpb25UeXBlIH0gZnJvbSBcImNvbm5lY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IHByb21wdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5cclxuaW1wb3J0IHsgVmFsdWVMaXN0LCBEcm9wRG93biB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuLy8gaW1wb3J0IHsgQ29vcGVyYXRpdmUgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW5kZXgnO1xyXG5cclxuLy8gaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5cclxuXHJcbi8vIGltcG9ydCB7Q29vcGVyYXRpdmVTdGFmZixWZXJpZnlBdXRofSBmcm9tIFwiLi4vLi4vbW9kZWxzL2luZGV4XCI7XHJcbmxldCBMUyA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XHJcblxyXG4vLyBpbXBvcnQgeyBUTlNGYW5jeUFsZXJ0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mYW5jeWFsZXJ0XCI7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibnMtb3RwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJvdHAuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9vdHAtY29tbW9uLmNzc1wiLCBcIi4vb3RwLmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgT3RwQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgaW5wdXQ6IGFueTtcclxuICAgIHNlbGVjdGVkQ29vcGVyYXRpdmVJbmRleDogbnVtYmVyIDtcclxuICAgIHNlbGVjdGVkQ29vcGVyYXRpdmUgOiBzdHJpbmc7XHJcbiAgICBzdGFmZklkOiBTdHJpbmc7XHJcbiAgICAvLyBjb29wZXJhdGl2ZTogQXJyYXk8Q29vcGVyYXRpdmU+ID0gW107XHJcbiAgICBoaW50OiBzdHJpbmcgPSBcIlNlbGVjdCBDb29wZXJhdGl2ZVwiO1xyXG4gICAgcHVibGljIGNvb3BlcmF0aXZlTGlzdDogVmFsdWVMaXN0PHN0cmluZz47XHJcbiAgICBwdWJsaWMgY3NzQ2xhc3M6IHN0cmluZyAgICAgID0gXCJkZWZhdWx0XCI7XHJcbiAgICAvLyBjb29wZXJhdGl2ZVN0YWZmOiBDb29wZXJhdGl2ZVN0YWZmO1xyXG4gICAgLy8gdmVyaWZ5QXV0aDogVmVyaWZ5QXV0aDtcclxuICAgIHVzZXJJZDogU3RyaW5nO1xyXG4gICAgdXNlck1vZGU6IFN0cmluZztcclxuICAgIHRwYXNzOiBTdHJpbmc7XHJcblxyXG4gICAgLy8gcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IHtcclxuICAgICAgICAgICAgXCJmaXJzdG5hbWVcIjogXCJcIixcclxuICAgICAgICAgICAgXCJsYXN0bmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICBcclxuICAgfVxyXG4gICBcclxuICAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhT2JqZWN0ID0gSlNPTi5wYXJzZShMUy5nZXRJdGVtKCdjdXJyZW50VXNlcicpKTtcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIElEIFwiICsgZGF0YU9iamVjdC5faWQpO1xyXG4gICAgICAgICAgaWYoZGF0YU9iamVjdC5faWQpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGhpcy51c2VySWQgPSBkYXRhT2JqZWN0Ll9pZDtcclxuICAgICAgICAgICAgICB0aGlzLnVzZXJNb2RlID0gZGF0YU9iamVjdC51c2VyTW9kZTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgfVxyXG4gICAgcHVibGljIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIC8vIGlmKHRoaXMuaW5wdXQuZmlyc3RuYW1lICYmIHRoaXMuaW5wdXQubGFzdG5hbWUgJiYgdGhpcy5pbnB1dC5lbWFpbCAmJiB0aGlzLmlucHV0LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgLy8gICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWNjb3VudFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlucHV0KSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIChuZXcgU25hY2tCYXIoKSkuc2ltcGxlKFwiQWxsIEZpZWxkcyBSZXF1aXJlZCFcIik7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlYWNoaW5nIFJlZ2lzdGVyIFwiICk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uTmF2QnRuVGFwKCl7XHJcbiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgYmUgY2FsbGVkIG9ubHkgaW4gQW5kcm9pZC5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpb24gYnV0dG9uIHRhcHBlZCFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxuICAgIHN0YXJ0QmFja2dyb3VuZEFuaW1hdGlvbihiYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC5hbmltYXRlKHtcclxuICAgICAgICAgIHNjYWxlOiB7IHg6IDEuMCwgeTogMS4wIH0sXHJcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMDBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIG9uY29vcGVyYXRpdmVjaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgRHJvcCBEb3duIHNlbGVjdGVkIGluZGV4IGNoYW5nZWQgICR7YXJncy5vbGRJbmRleH0gdG8gJHthcmdzLm5ld0luZGV4fS4gTmV3IHZhbHVlIGlzIFwiJHt0aGlzLnNlc3Npb25pdGVtcy5nZXRWYWx1ZShcclxuICAgICAgICAvLyAgICAgYXJncy5uZXdJbmRleCl9XCJgKTtcclxuICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBJRCBcIiArIGFyZ3MubmV3SW5kZXggKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvb3BlcmF0aXZlID0gdGhpcy5jb29wZXJhdGl2ZUxpc3QuZ2V0VmFsdWUoYXJncy5uZXdJbmRleCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgSWQgVmFsdWUgIFwiICsgIHRoaXMuc2VsZWN0ZWRDb29wZXJhdGl2ZSApO1xyXG4gICAgICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBnZW5hcmF0ZU5ld1Rva2VuKCl7XHJcbiAgICAgICAgICB0aGlzLnNlbmRPVFAodGhpcy51c2VySWQpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgdmVyaWZ5T1RQKCl7XHJcbiAgICAgICAgICB0aGlzLmdldE9UUCh0aGlzLnRwYXNzLCB0aGlzLnVzZXJJZCk7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgc2VuZE9UUCh1c2VySWQ6U3RyaW5nKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVkaXQgUGhvbmUgTnVtYmVyIFwiKyAgdXNlcklkKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLnNlbmRUb2tlbih1c2VySWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7IFxyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJPVFAgU2VuZFwiKyBKU09OLnN0cmluZ2lmeShkYXRhW1wiZGF0YVwiXSkgKTtcclxuXHJcbiAgICAgICAgICAgICAvL3NlbmQgT1RQXHJcblxyXG4gICAgICAgICAgICAvLyAgVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcyhcIlN1Y2Nlc3MhXCIsIFwiT1RQIHNlbnRcIiwgXCJPa1wiKVxyXG4gICAgICAgICAgICAvLyAgLnRoZW4oICgpID0+IHsgLyogdXNlciBwcmVzc2VkIHRoZSBidXR0b24gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAvLyAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIkVycm9yIVwiLCBlcnIuZXJyb3IubWVzc2FnZSwgXCJPa1wiKSAudGhlbiggKCkgPT4geyAvKiB1c2VyIHByZXNzZWQgdGhlIGJ1dHRvbiAqL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgfSk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyApO1x0ICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRPVFAodG9rZW46U3RyaW5nLHVzZXJJZDpTdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWRpdCBQaG9uZSBOdW1iZXIgXCIrICB1c2VySWQpO1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIC8vIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VG9rZW4odG9rZW4sdXNlcklkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4geyBcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2V0IE9UUCBPayBcIisgSlNPTi5zdHJpbmdpZnkoZGF0YVtcImRhdGFcIl0pICk7XHJcbiAgICAgICAgICAgIC8vICAgIFROU0ZhbmN5QWxlcnQuc2hvd1N1Y2Nlc3MoXCJTdWNjZXNzIVwiLCBcIlRva2VuIFZlcmlmaWVkXCIsIFwiT2tcIilcclxuICAgICAgICAgICAgLy8gIC50aGVuKCAoKSA9PiB7IC8qIHVzZXIgcHJlc3NlZCB0aGUgYnV0dG9uICovIFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgIC8vc2VuZCBPVFBcclxuXHJcbiAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byBDaGFuZ2UgUGluXHJcblxyXG4gICAgICAgICAgICAgaWYodGhpcy51c2VyTW9kZSA9PSBcIk9UUFZlcmlmeVwiKVxyXG4gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIExTLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIExTLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkoZGF0YVtcImRhdGFcIl0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdHJhbnNwaW4nXSk7XHJcbiAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgaWYodGhpcy51c2VyTW9kZSA9PSBcIlRyYW5zUGluXCIpXHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgTFMucmVtb3ZlSXRlbSgnY3VycmVudFVzZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgTFMuc2V0SXRlbSgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeShkYXRhW1wiZGF0YVwiXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgaWYodGhpcy51c2VyTW9kZSA9PSBcIkNvbmZpcm1cIilcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vICBMUy5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICBMUy5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgLy8gICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgVE5TRmFuY3lBbGVydC5zaG93RXJyb3IoXCJFcnJvciFcIiwgZXJyLmVycm9yLm1lc3NhZ2UsIFwiT2tcIikgLnRoZW4oICgpID0+IHsgLyogdXNlciBwcmVzc2VkIHRoZSBidXR0b24gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gIH0pO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gKTtcdCAgXHJcbiAgICB9XHJcbiAgICAgIFxyXG5cclxufSJdfQ==
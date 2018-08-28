"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var page_1 = require("ui/page");
var member_service_1 = require("../../services/member.service");
var auth_service_1 = require("../../services/auth.service");
var LS = require("nativescript-localstorage");
var VerifyNumberComponent = /** @class */ (function () {
    function VerifyNumberComponent(location, memberService, authService, router, activatedRoute, _page) {
        this.location = location;
        this.memberService = memberService;
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._page = _page;
        this.cooperative = [];
        this.hint = "Select Cooperative";
        this.cssClass = "default";
        this.phoneNumber = "08060933727";
        this.isedit = false;
        this.input = {
            "firstname": "",
            "lastname": "",
            "email": "",
            "password": ""
        };
    }
    VerifyNumberComponent.prototype.ngAfterViewInit = function () {
    };
    VerifyNumberComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        var dataObject = JSON.parse(LS.getItem('currentUser'));
        console.log("User ID " + dataObject._id);
        if (dataObject._id) {
            this.userId = dataObject._id;
            this.userMode = dataObject.userMode;
        }
        if (dataObject.phoneNo) {
            this.phoneNumber = dataObject.phoneNo;
        }
    };
    VerifyNumberComponent.prototype.enablePhoneText = function () {
        this.isedit = !this.isedit;
    };
    VerifyNumberComponent.prototype.onNavBtnTap = function () {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    };
    VerifyNumberComponent.prototype.goBack = function () {
        this.location.back();
    };
    VerifyNumberComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    VerifyNumberComponent.prototype.oncooperativechange = function (args) {
        // console.log(`Drop Down selected index changed  ${args.oldIndex} to ${args.newIndex}. New value is "${this.sessionitems.getValue(
        //     args.newIndex)}"`);
        console.log("Selected ID " + args.newIndex);
        this.selectedCooperative = this.cooperativeList.getValue(args.newIndex);
        console.log("Selected Id Value  " + this.selectedCooperative);
    };
    VerifyNumberComponent.prototype.editPhoneNumber = function (userId, phoneNo) {
        var _this = this;
        console.log("Edit Phone Number " + userId);
        this.memberService.editPhoneNumber(userId, phoneNo).subscribe(function (data) {
            console.log("Very Auth " + JSON.stringify(data["data"]));
            //send OTP
            _this.sendOTP(userId);
            if (_this.userMode == "PhoneVerify") {
                LS.removeItem('currentUser');
                LS.setItem('currentUser', JSON.stringify(data["data"]));
                _this.router.navigate(['/otp']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    VerifyNumberComponent.prototype.sendOTP = function (userId) {
        console.log("Edit Phone Number " + userId);
        this.authService.sendToken(userId).subscribe(function (data) {
            console.log("OTP Send" + JSON.stringify(data["data"]));
            //send OTP
        }, function (err) {
            console.log(err);
        });
    };
    VerifyNumberComponent.prototype.sendcode = function () {
        this.editPhoneNumber(this.userId, this.phoneNumber);
    };
    VerifyNumberComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-verifynumber",
            templateUrl: "verifynumber.component.html",
            styleUrls: ["./verifynumber-common.css", "./verifynumber.component.css"],
        }),
        __metadata("design:paramtypes", [common_1.Location, member_service_1.MemberService, auth_service_1.AuthService, router_1.Router, router_1.ActivatedRoute, page_1.Page])
    ], VerifyNumberComponent);
    return VerifyNumberComponent;
}());
exports.VerifyNumberComponent = VerifyNumberComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5bnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlcmlmeW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Q7QUFDL0QsMENBQXlEO0FBQ3pELDBDQUEyQztBQU8zQyxnQ0FBK0I7QUFPL0IsZ0VBQTREO0FBQzVELDREQUF3RDtBQUd4RCxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztBQVFoRDtJQWlCSSwrQkFBMkIsUUFBa0IsRUFBVSxhQUEyQixFQUFTLFdBQXVCLEVBQVMsTUFBYyxFQUFVLGNBQThCLEVBQVUsS0FBVztRQUEzSyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBWHRNLGdCQUFXLEdBQXVCLEVBQUUsQ0FBQztRQUNyQyxTQUFJLEdBQVcsb0JBQW9CLENBQUM7UUFFN0IsYUFBUSxHQUFnQixTQUFTLENBQUM7UUFHekMsZ0JBQVcsR0FBVyxhQUFhLENBQUM7UUFDcEMsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUtwQixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsV0FBVyxFQUFFLEVBQUU7WUFDZixVQUFVLEVBQUUsRUFBRTtZQUNkLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQTtJQUNMLENBQUM7SUFFRCwrQ0FBZSxHQUFmO0lBRUQsQ0FBQztJQUVRLHdDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGFB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QUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FDeEMsVUFBQSxJQUFJO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRSxDQUFDO1lBRXZELFVBQVU7UUFFVCxDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVmLENBQUMsQ0FDTCxDQUFDO0lBQ1YsQ0FBQztJQUNELHdDQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXZELENBQUM7SUFwSVEscUJBQXFCO1FBUGpDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixFQUFFLDhCQUE4QixDQUFDO1NBQzNFLENBQUM7eUNBbUJ1QyxpQkFBUSxFQUF3Qiw4QkFBYSxFQUFxQiwwQkFBVyxFQUFpQixlQUFNLEVBQTBCLHVCQUFjLEVBQWlCLFdBQUk7T0FqQjdMLHFCQUFxQixDQXVJakM7SUFBRCw0QkFBQztDQUFBLEFBdklELElBdUlDO0FBdklZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQsQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdGlvblR5cGUsIGdldENvbm5lY3Rpb25UeXBlIH0gZnJvbSBcImNvbm5lY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IHByb21wdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5cclxuaW1wb3J0IHsgVmFsdWVMaXN0LCBEcm9wRG93biB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0IHsgQ29vcGVyYXRpdmUgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHtNZW1iZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbWVtYmVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHtDb29wZXJhdGl2ZVN0YWZmLFZlcmlmeUF1dGh9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW5kZXhcIjtcclxubGV0IExTID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIgKTtcclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibnMtdmVyaWZ5bnVtYmVyXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJ2ZXJpZnludW1iZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi92ZXJpZnludW1iZXItY29tbW9uLmNzc1wiLCBcIi4vdmVyaWZ5bnVtYmVyLmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmVyaWZ5TnVtYmVyQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgaW5wdXQ6IGFueTtcclxuICAgIHNlbGVjdGVkQ29vcGVyYXRpdmVJbmRleDogbnVtYmVyIDtcclxuICAgIHNlbGVjdGVkQ29vcGVyYXRpdmUgOiBzdHJpbmc7XHJcbiAgICBzdGFmZklkOiBTdHJpbmc7XHJcbiAgICBjb29wZXJhdGl2ZTogQXJyYXk8Q29vcGVyYXRpdmU+ID0gW107XHJcbiAgICBoaW50OiBzdHJpbmcgPSBcIlNlbGVjdCBDb29wZXJhdGl2ZVwiO1xyXG4gICAgcHVibGljIGNvb3BlcmF0aXZlTGlzdDogVmFsdWVMaXN0PHN0cmluZz47XHJcbiAgICBwdWJsaWMgY3NzQ2xhc3M6IHN0cmluZyAgICAgID0gXCJkZWZhdWx0XCI7XHJcbiAgICBjb29wZXJhdGl2ZVN0YWZmOiBDb29wZXJhdGl2ZVN0YWZmO1xyXG4gICAgdmVyaWZ5QXV0aDogVmVyaWZ5QXV0aDtcclxuICAgIHBob25lTnVtYmVyOiBTdHJpbmcgPSBcIjA4MDYwOTMzNzI3XCI7XHJcbiAgICBpc2VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHVzZXJJZDogU3RyaW5nO1xyXG4gICAgdXNlck1vZGU6IFN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgbWVtYmVyU2VydmljZTpNZW1iZXJTZXJ2aWNlLHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UscHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX3BhZ2U6IFBhZ2UpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0ge1xyXG4gICAgICAgICAgICBcImZpcnN0bmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImxhc3RuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJcIixcclxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgIFxyXG4gICB9XHJcbiAgIFxyXG4gICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHZhciBkYXRhT2JqZWN0ID0gSlNPTi5wYXJzZShMUy5nZXRJdGVtKCdjdXJyZW50VXNlcicpKTtcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIElEIFwiICsgZGF0YU9iamVjdC5faWQpO1xyXG4gICAgICAgICAgaWYoZGF0YU9iamVjdC5faWQpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGhpcy51c2VySWQgPSBkYXRhT2JqZWN0Ll9pZDtcclxuICAgICAgICAgICAgICB0aGlzLnVzZXJNb2RlID0gZGF0YU9iamVjdC51c2VyTW9kZTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmKGRhdGFPYmplY3QucGhvbmVObylcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aGlzLnBob25lTnVtYmVyID0gZGF0YU9iamVjdC5waG9uZU5vO1xyXG4gICAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgZW5hYmxlUGhvbmVUZXh0KClcclxuICAgICB7XHJcbiAgICAgICAgIHRoaXMuaXNlZGl0ID0gIXRoaXMuaXNlZGl0O1xyXG4gICAgIH1cclxuICAgIFxyXG4gICAgb25OYXZCdG5UYXAoKXtcclxuICAgICAgICAvLyBUaGlzIGNvZGUgd2lsbCBiZSBjYWxsZWQgb25seSBpbiBBbmRyb2lkLlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmF2aWdhdGlvbiBidXR0b24gdGFwcGVkIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG4gICAgc3RhcnRCYWNrZ3JvdW5kQW5pbWF0aW9uKGJhY2tncm91bmQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2NhbGU6IHsgeDogMS4wLCB5OiAxLjAgfSxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgb25jb29wZXJhdGl2ZWNoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZCAgJHthcmdzLm9sZEluZGV4fSB0byAke2FyZ3MubmV3SW5kZXh9LiBOZXcgdmFsdWUgaXMgXCIke3RoaXMuc2Vzc2lvbml0ZW1zLmdldFZhbHVlKFxyXG4gICAgICAgIC8vICAgICBhcmdzLm5ld0luZGV4KX1cImApO1xyXG4gICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIElEIFwiICsgYXJncy5uZXdJbmRleCApO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29vcGVyYXRpdmUgPSB0aGlzLmNvb3BlcmF0aXZlTGlzdC5nZXRWYWx1ZShhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBJZCBWYWx1ZSAgXCIgKyAgdGhpcy5zZWxlY3RlZENvb3BlcmF0aXZlICk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgIFxyXG5cclxuXHJcbiAgICBlZGl0UGhvbmVOdW1iZXIodXNlcklkOlN0cmluZywgcGhvbmVObzogU3RyaW5nKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVkaXQgUGhvbmUgTnVtYmVyIFwiKyAgdXNlcklkKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLm1lbWJlclNlcnZpY2UuZWRpdFBob25lTnVtYmVyKHVzZXJJZCxwaG9uZU5vKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4geyBcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmVyeSBBdXRoIFwiKyBKU09OLnN0cmluZ2lmeShkYXRhW1wiZGF0YVwiXSkgKTtcclxuXHJcbiAgICAgICAgICAgICAvL3NlbmQgT1RQXHJcbiAgICAgICAgICAgICAgdGhpcy5zZW5kT1RQKHVzZXJJZCk7XHJcbiAgICAgICAgICAgICBpZih0aGlzLnVzZXJNb2RlID09IFwiUGhvbmVWZXJpZnlcIilcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBMUy5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICBMUy5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL290cCddKTtcclxuICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcdCAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBzZW5kT1RQKHVzZXJJZDpTdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWRpdCBQaG9uZSBOdW1iZXIgXCIrICB1c2VySWQpO1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2VuZFRva2VuKHVzZXJJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHsgXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9UUCBTZW5kXCIrIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSApO1xyXG5cclxuICAgICAgICAgICAgIC8vc2VuZCBPVFBcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHQgIFxyXG4gICAgfVxyXG4gICAgc2VuZGNvZGUoKXtcclxuXHJcbiAgICAgICAgdGhpcy5lZGl0UGhvbmVOdW1iZXIodGhpcy51c2VySWQsdGhpcy5waG9uZU51bWJlcik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAgIFxyXG5cclxufSJdfQ==
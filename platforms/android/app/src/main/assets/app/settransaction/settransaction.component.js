"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var page_1 = require("ui/page");
var auth_service_1 = require("../../services/auth.service");
var member_service_1 = require("../../services/member.service");
var LS = require("nativescript-localstorage");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var SetTransactionComponent = /** @class */ (function () {
    function SetTransactionComponent(location, authService, memberService, router, activatedRoute, _page) {
        this.location = location;
        this.authService = authService;
        this.memberService = memberService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this._page = _page;
        this.cooperative = [];
        this.hint = "Select Cooperative";
        this.cssClass = "default";
        this.input = {
            "firstname": "",
            "lastname": "",
            "email": "",
            "password": ""
        };
    }
    SetTransactionComponent.prototype.ngAfterViewInit = function () {
    };
    SetTransactionComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        var dataObject = JSON.parse(LS.getItem('currentUser'));
        console.log("User ID  on TransPIN " + dataObject._id);
        if (dataObject._id) {
            this.userId = dataObject._id;
            this.userMode = dataObject.userMode;
        }
    };
    SetTransactionComponent.prototype.register = function () {
        console.log("Reaching Register ");
    };
    SetTransactionComponent.prototype.onNavBtnTap = function () {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    };
    SetTransactionComponent.prototype.next = function () {
        if (this.pin.length < 4 || this.cpin.length < 4) {
            nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", "The minimum length of Trans Pin is 4 digit", "Ok");
            return;
        }
        if (this.pin != this.cpin) {
            nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", "Your transaction did not match", "Ok");
            return;
        }
        console.log("User Id for setPin " + this.userId);
        this.setPin(this.userId, this.pin, this.cpin);
    };
    SetTransactionComponent.prototype.goBack = function () {
        this.location.back();
    };
    SetTransactionComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    SetTransactionComponent.prototype.oncooperativechange = function (args) {
        // console.log(`Drop Down selected index changed  ${args.oldIndex} to ${args.newIndex}. New value is "${this.sessionitems.getValue(
        //     args.newIndex)}"`);
        console.log("Selected ID " + args.newIndex);
        this.selectedCooperative = this.cooperativeList.getValue(args.newIndex);
        console.log("Selected Id Value  " + this.selectedCooperative);
    };
    SetTransactionComponent.prototype.setPin = function (userId, pin, confirmPin) {
        var _this = this;
        console.log("Set Pin Id " + userId);
        this.memberService.changePin(userId, pin, confirmPin).subscribe(function (data) {
            console.log("Change Pin " + JSON.stringify(data["data"]));
            //send OTP
            _this.sendOTP(userId);
            console.log("Set Pin User Mode " + _this.userMode);
            if (_this.userMode == "TransPin") {
                LS.removeItem('currentUser');
                LS.setItem('currentUser', JSON.stringify(data["data"]));
                _this.router.navigate(['/otp']);
            }
            if (_this.userMode == "Confirm") {
                LS.removeItem('currentUser');
                LS.setItem('currentUser', JSON.stringify(data["data"]));
                _this.router.navigate(['/otp']);
            }
        }, function (err) {
            console.log(err);
            nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", err.error.message, "Ok").then(function () {
            });
        });
    };
    SetTransactionComponent.prototype.sendOTP = function (userId) {
        console.log("Sent Trans Pin OTp " + userId);
        this.authService.sendToken(userId).subscribe(function (data) {
            console.log("OTP Send" + JSON.stringify(data["data"]));
            //send OTP
        }, function (err) {
            console.log(err);
            nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", err.error.message, "Ok").then(function () {
            });
        });
    };
    SetTransactionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-settransaction",
            templateUrl: "./settransaction.component.html",
            styleUrls: ["./settransaction-common.css", "./settransaction.component.css"],
        }),
        __metadata("design:paramtypes", [common_1.Location, auth_service_1.AuthService, member_service_1.MemberService, router_1.Router, router_1.ActivatedRoute, page_1.Page])
    ], SetTransactionComponent);
    return SetTransactionComponent;
}());
exports.SetTransactionComponent = SetTransactionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dHJhbnNhY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dHJhbnNhY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLDBDQUF5RDtBQUN6RCwwQ0FBMkM7QUFPM0MsZ0NBQStCO0FBUS9CLDREQUEwRDtBQUMxRCxnRUFBOEQ7QUFHOUQsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFFLDJCQUEyQixDQUFFLENBQUM7QUFFaEQsbUVBQXdEO0FBVXhEO0lBaUJJLGlDQUEyQixRQUFrQixFQUFVLFdBQXVCLEVBQVUsYUFBMkIsRUFBUyxNQUFjLEVBQVUsY0FBOEIsRUFBVSxLQUFXO1FBQTVLLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFYdk0sZ0JBQVcsR0FBdUIsRUFBRSxDQUFDO1FBQ3JDLFNBQUksR0FBVyxvQkFBb0IsQ0FBQztRQUU3QixhQUFRLEdBQVcsU0FBUyxDQUFDO1FBU2hDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxXQUFXLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxFQUFFO1lBQ2QsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtTQUNqQixDQUFBO0lBQ0wsQ0FBQztJQUVELGlEQUFlLEdBQWY7SUFFQSxDQUFDO0lBRU0sMENBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUV2RCxPQUFPLENBQUMsR0FB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SUFBSTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUUsQ0FBQztZQUV2RCxVQUFVO1FBRVQsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsdUNBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFFLElBQUksQ0FBRTtZQUdsRSxDQUFDLENBQUMsQ0FBQztRQUNELENBQUMsQ0FDTCxDQUFDO0lBQ1YsQ0FBQztJQTdKUSx1QkFBdUI7UUFSbkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsZ0NBQWdDLENBQUM7U0FDL0UsQ0FBQzt5Q0FvQnVDLGlCQUFRLEVBQXNCLDBCQUFXLEVBQXdCLDhCQUFhLEVBQWlCLGVBQU0sRUFBMEIsdUJBQWMsRUFBaUIsV0FBSTtPQWpCOUwsdUJBQXVCLENBa0tuQztJQUFELDhCQUFDO0NBQUEsQUFsS0QsSUFrS0M7QUFsS1ksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XHJcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuXHJcbmltcG9ydCB7IFZhbHVlTGlzdCwgRHJvcERvd24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IENvb3BlcmF0aXZlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2luZGV4JztcclxuXHJcblxyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTWVtYmVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9tZW1iZXIuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29vcGVyYXRpdmVTdGFmZiwgVmVyaWZ5QXV0aCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW5kZXhcIjtcclxubGV0IExTID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIgKTtcclxuXHJcbmltcG9ydCB7IFROU0ZhbmN5QWxlcnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZhbmN5YWxlcnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLXNldHRyYW5zYWN0aW9uXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NldHRyYW5zYWN0aW9uLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vc2V0dHJhbnNhY3Rpb24tY29tbW9uLmNzc1wiLCBcIi4vc2V0dHJhbnNhY3Rpb24uY29tcG9uZW50LmNzc1wiXSxcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2V0VHJhbnNhY3Rpb25Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBpbnB1dDogYW55O1xyXG4gICAgc2VsZWN0ZWRDb29wZXJhdGl2ZUluZGV4OiBudW1iZXI7XHJcbiAgICBzZWxlY3RlZENvb3BlcmF0aXZlOiBzdHJpbmc7XHJcbiAgICBzdGFmZklkOiBTdHJpbmc7XHJcbiAgICBjb29wZXJhdGl2ZTogQXJyYXk8Q29vcGVyYXRpdmU+ID0gW107XHJcbiAgICBoaW50OiBzdHJpbmcgPSBcIlNlbGVjdCBDb29wZXJhdGl2ZVwiO1xyXG4gICAgcHVibGljIGNvb3BlcmF0aXZlTGlzdDogVmFsdWVMaXN0PHN0cmluZz47XHJcbiAgICBwdWJsaWMgY3NzQ2xhc3M6IHN0cmluZyA9IFwiZGVmYXVsdFwiO1xyXG4gICAgY29vcGVyYXRpdmVTdGFmZjogQ29vcGVyYXRpdmVTdGFmZjtcclxuICAgIHZlcmlmeUF1dGg6IFZlcmlmeUF1dGg7XHJcbiAgICBwaW46IFN0cmluZztcclxuICAgIGNwaW46IFN0cmluZztcclxuICAgIHVzZXJJZDogU3RyaW5nO1xyXG4gICAgdXNlck1vZGU6IFN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsIHByaXZhdGUgbWVtYmVyU2VydmljZTpNZW1iZXJTZXJ2aWNlLHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9wYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IHtcclxuICAgICAgICAgICAgXCJmaXJzdG5hbWVcIjogXCJcIixcclxuICAgICAgICAgICAgXCJsYXN0bmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHZhciBkYXRhT2JqZWN0ID0gSlNPTi5wYXJzZShMUy5nZXRJdGVtKCdjdXJyZW50VXNlcicpKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIElEICBvbiBUcmFuc1BJTiBcIiArIGRhdGFPYmplY3QuX2lkKTtcclxuICAgICAgICAgIGlmKGRhdGFPYmplY3QuX2lkKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRoaXMudXNlcklkID0gZGF0YU9iamVjdC5faWQ7XHJcbiAgICAgICAgICAgICAgdGhpcy51c2VyTW9kZSA9IGRhdGFPYmplY3QudXNlck1vZGU7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVhY2hpbmcgUmVnaXN0ZXIgXCIpO1xyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25OYXZCdG5UYXAoKSB7XHJcbiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgYmUgY2FsbGVkIG9ubHkgaW4gQW5kcm9pZC5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpb24gYnV0dG9uIHRhcHBlZCFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpe1xyXG5cclxuICAgICAgICBpZih0aGlzLnBpbi5sZW5ndGggPCA0IHx8IHRoaXMuY3Bpbi5sZW5ndGggPCA0IClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0Vycm9yKFwiRXJyb3IhXCIsIFwiVGhlIG1pbmltdW0gbGVuZ3RoIG9mIFRyYW5zIFBpbiBpcyA0IGRpZ2l0XCIsIFwiT2tcIikgO1xyXG4gICAgICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnBpbiAhPSB0aGlzLmNwaW4pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIkVycm9yIVwiLCBcIllvdXIgdHJhbnNhY3Rpb24gZGlkIG5vdCBtYXRjaFwiLCBcIk9rXCIpIDtcclxuICAgICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIElkIGZvciBzZXRQaW4gXCIgKyB0aGlzLnVzZXJJZClcclxuICAgICAgICB0aGlzLnNldFBpbih0aGlzLnVzZXJJZCx0aGlzLnBpbix0aGlzLmNwaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICB9XHJcbiAgICBzdGFydEJhY2tncm91bmRBbmltYXRpb24oYmFja2dyb3VuZCkge1xyXG4gICAgICAgIGJhY2tncm91bmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjYWxlOiB7IHg6IDEuMCwgeTogMS4wIH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbmNvb3BlcmF0aXZlY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkICAke2FyZ3Mub2xkSW5kZXh9IHRvICR7YXJncy5uZXdJbmRleH0uIE5ldyB2YWx1ZSBpcyBcIiR7dGhpcy5zZXNzaW9uaXRlbXMuZ2V0VmFsdWUoXHJcbiAgICAgICAgLy8gICAgIGFyZ3MubmV3SW5kZXgpfVwiYCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgSUQgXCIgKyBhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29vcGVyYXRpdmUgPSB0aGlzLmNvb3BlcmF0aXZlTGlzdC5nZXRWYWx1ZShhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIElkIFZhbHVlICBcIiArIHRoaXMuc2VsZWN0ZWRDb29wZXJhdGl2ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFBpbih1c2VySWQ6U3RyaW5nLCBwaW46IFN0cmluZywgY29uZmlybVBpbjpTdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2V0IFBpbiBJZCBcIisgIHVzZXJJZCk7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5tZW1iZXJTZXJ2aWNlLmNoYW5nZVBpbih1c2VySWQscGluLGNvbmZpcm1QaW4pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7IFxyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2UgUGluIFwiKyBKU09OLnN0cmluZ2lmeShkYXRhW1wiZGF0YVwiXSkgKTtcclxuXHJcbiAgICAgICAgICAgICAvL3NlbmQgT1RQXHJcbiAgICAgICAgICAgICAgdGhpcy5zZW5kT1RQKHVzZXJJZCk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2V0IFBpbiBVc2VyIE1vZGUgXCIrIHRoaXMudXNlck1vZGUpO1xyXG4gICAgICAgICAgICAgaWYodGhpcy51c2VyTW9kZSA9PSBcIlRyYW5zUGluXCIpXHJcbiAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgTFMucmVtb3ZlSXRlbSgnY3VycmVudFVzZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgTFMuc2V0SXRlbSgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeShkYXRhW1wiZGF0YVwiXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9vdHAnXSk7XHJcbiAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgaWYodGhpcy51c2VyTW9kZSA9PSBcIkNvbmZpcm1cIilcclxuICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICBMUy5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICBMUy5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL290cCddKTtcclxuICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93RXJyb3IoXCJFcnJvciFcIiwgZXJyLmVycm9yLm1lc3NhZ2UsIFwiT2tcIikgLnRoZW4oICgpID0+IHsgLyogdXNlciBwcmVzc2VkIHRoZSBidXR0b24gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1x0ICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHNlbmRPVFAodXNlcklkOlN0cmluZyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW50IFRyYW5zIFBpbiBPVHAgXCIrICB1c2VySWQpO1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2VuZFRva2VuKHVzZXJJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHsgXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9UUCBTZW5kXCIrIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSApO1xyXG5cclxuICAgICAgICAgICAgIC8vc2VuZCBPVFBcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93RXJyb3IoXCJFcnJvciFcIiwgZXJyLmVycm9yLm1lc3NhZ2UsIFwiT2tcIikgLnRoZW4oICgpID0+IHsgLyogdXNlciBwcmVzc2VkIHRoZSBidXR0b24gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1x0ICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcblxyXG59Il19
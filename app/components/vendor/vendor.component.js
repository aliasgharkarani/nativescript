"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var page_1 = require("ui/page");
var nativescript_drop_down_1 = require("nativescript-drop-down");
var cooperative_service_1 = require("../../services/cooperative.service");
var cooperativeStaff_service_1 = require("../../services/cooperativeStaff.service");
var member_service_1 = require("../../services/member.service");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var VendorRegisterComponent = /** @class */ (function () {
    function VendorRegisterComponent(location, cooperativeService, cooperativeStaffService, memberService, route, router, _page) {
        this.location = location;
        this.cooperativeService = cooperativeService;
        this.cooperativeStaffService = cooperativeStaffService;
        this.memberService = memberService;
        this.route = route;
        this.router = router;
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
    VendorRegisterComponent.prototype.ngAfterViewInit = function () {
        this.getCooperative();
    };
    VendorRegisterComponent.prototype.ngOnInit = function () {
        //this._page.actionBarHidden = true;
    };
    VendorRegisterComponent.prototype.register = function () {
        // if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
        //     ApplicationSettings.setString("account", JSON.stringify(this.input));
        //     this.location.back();
        // } else {
        //     (new SnackBar()).simple("All Fields Required!");
        // }
        console.log("Reaching Register ");
        this.getCooperativeStaff(this.staffId, this.selectedCooperative, "", "cooperator");
    };
    VendorRegisterComponent.prototype.registerVendor = function () {
        // if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
        //     ApplicationSettings.setString("account", JSON.stringify(this.input));
        //     this.location.back();
        // } else {
        //     (new SnackBar()).simple("All Fields Required!");
        // }
        console.log("Reaching Register Vendor ");
        this.getCooperativeStaff(this.businessEmail, "0", this.businessName, "vendor");
    };
    VendorRegisterComponent.prototype.onNavBtnTap = function () {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    };
    VendorRegisterComponent.prototype.goBack = function () {
        this.location.back();
    };
    // tabLoaded(event) {
    //     this._bar = <BottomBar>event.object;
    //     this.hidden = false;
    //     this.titleState = TITLE_STATE.SHOW_WHEN_ACTIVE;
    //     this.inactiveColor = "white";
    //     this.accentColor = "blue";
    // }
    //  tabSelected(args: SelectedIndexChangedEventData) {
    //      // only triggered when a different tab is tapped
    //      console.log(args.newIndex);
    //  }
    VendorRegisterComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    VendorRegisterComponent.prototype.oncooperativechange = function (args) {
        // console.log(`Drop Down selected index changed  ${args.oldIndex} to ${args.newIndex}. New value is "${this.sessionitems.getValue(
        //     args.newIndex)}"`);
        console.log("Selected ID " + args.newIndex);
        this.selectedCooperative = this.cooperativeList.getValue(args.newIndex);
        console.log("Selected Id Value  " + this.selectedCooperative);
    };
    VendorRegisterComponent.prototype.getCooperative = function () {
        var _this = this;
        this.cooperativeService.getAllCooperative().subscribe(function (data) {
            console.log("Cooperative List " + JSON.stringify(data["data"]));
            _this.cooperative = data["data"];
            _this.cooperativeList = new nativescript_drop_down_1.ValueList();
            for (var loop = 0; loop < _this.cooperative.length; loop++) {
                _this.cooperativeList.push({ value: "" + _this.cooperative[loop].cooperativeId,
                    display: "" + _this.cooperative[loop].first_name,
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    VendorRegisterComponent.prototype.getCooperativeStaff = function (staffId, cooperativeId, name, userType) {
        var _this = this;
        console.log("Staff and CooperativeId " + staffId + " - " + cooperativeId);
        this.memberService.getCooperativeStaff(staffId, cooperativeId, "New", name, userType).subscribe(function (data) {
            console.log("Cooperative Staff " + JSON.stringify(data["data"]));
            _this.cooperativeStaff = data["data"];
            nativescript_fancyalert_1.TNSFancyAlert.showSuccess("Success!", "Check your email for temporary password", "Ok")
                .then(function () {
                _this.router.navigate(['/login']);
                console.log("Redirect to Change Password");
            });
            console.log("Verifying Staff out side " + _this.cooperativeStaff._id);
            //  this.sendVerifyAuth(this.cooperativeStaff);
        }, function (err) {
            console.log(JSON.stringify(err));
            nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", err.error.message, "Ok").then(function () {
                console.log("Redirect to Change Password");
            });
        });
    };
    VendorRegisterComponent.prototype.sendVerifyAuth = function (verifyAuth) {
        console.log("Verify " + verifyAuth.staffId);
        this.cooperativeStaffService.verifyAuthToCreatLater(verifyAuth).subscribe(function (data) {
            console.log("Very Auth " + JSON.stringify(data["data"]));
        }, function (err) {
            console.log(err);
        });
    };
    VendorRegisterComponent.prototype.showSuccess = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showSuccess("Success!", "Something finished successfully.", "Ok");
    };
    VendorRegisterComponent.prototype.showError = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", "Oh no, something went wrong.", "Dismiss");
    };
    VendorRegisterComponent.prototype.showCustomImage = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showAnimationType = nativescript_fancyalert_1.TNSFancyAlert.SHOW_ANIMATION_TYPES.SlideInFromBottom;
        nativescript_fancyalert_1.TNSFancyAlert.hideAnimationType = nativescript_fancyalert_1.TNSFancyAlert.HIDE_ANIMATION_TYPES.SlideOutToTop;
        nativescript_fancyalert_1.TNSFancyAlert.showCustomImage("polyglot_developer.png", "#911E25", "Custom Image", "Use your own images in an alert!", "Dismiss");
    };
    VendorRegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-vendor",
            templateUrl: "vendor.component.html",
            styleUrls: ["./vendor-common.css", "./vendor.component.css"],
        }),
        __metadata("design:paramtypes", [common_1.Location, cooperative_service_1.CooperativeService, cooperativeStaff_service_1.CooperativeStaffService,
            member_service_1.MemberService, router_1.ActivatedRoute, router_1.Router, page_1.Page])
    ], VendorRegisterComponent);
    return VendorRegisterComponent;
}());
exports.VendorRegisterComponent = VendorRegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Q7QUFDL0QsMENBQXlEO0FBQ3pELDBDQUEyQztBQU8zQyxnQ0FBK0I7QUFHL0IsaUVBQTZEO0FBRzdELDBFQUFzRTtBQUN0RSxvRkFBZ0Y7QUFFaEYsZ0VBQTREO0FBSTVELG1FQUF3RDtBQVN4RDtJQW9CSSxpQ0FBMkIsUUFBa0IsRUFBVSxrQkFBcUMsRUFBVSx1QkFBK0MsRUFDekksYUFBNEIsRUFBVSxLQUFxQixFQUFVLE1BQWMsRUFBVSxLQUFXO1FBRHpGLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF3QjtRQUN6SSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFicEgsZ0JBQVcsR0FBdUIsRUFBRSxDQUFDO1FBQ3JDLFNBQUksR0FBVyxvQkFBb0IsQ0FBQztRQUU3QixhQUFRLEdBQWdCLFNBQVMsQ0FBQztRQVdyQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsV0FBVyxFQUFFLEVBQUU7WUFDZixVQUFVLEVBQUUsRUFBRTtZQUNkLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQTtJQUNMLENBQUM7SUFFRCxpREFBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFUSwwQ0FBUSxHQUFmO1FBQ0ksb0NBQW9DO0lBQ3hDLENBQUM7SUFDSywwQ0FBUSxHQUFmO1FBQ0ksK0ZBQStGO1FBQy9GLDRFQUE0RTtRQUM1RSw0QkFBNEI7UUFDNUIsV0FBVztRQUNYLHVEQUF1RDtR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QUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLHdCQUF3QixDQUFDO1NBQy9ELENBQUM7eUNBc0J1QyxpQkFBUSxFQUE2Qix3Q0FBa0IsRUFBa0Msa0RBQXVCO1lBQzFILDhCQUFhLEVBQWlCLHVCQUFjLEVBQWtCLGVBQU0sRUFBaUIsV0FBSTtPQXJCM0csdUJBQXVCLENBaU1uQztJQUFELDhCQUFDO0NBQUEsQUFqTUQsSUFpTUM7QUFqTVksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LE9uSW5pdCxBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFNuYWNrQmFyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgcHJvbXB0IH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcblxyXG5pbXBvcnQgeyBWYWx1ZUxpc3QsIERyb3BEb3duIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBDb29wZXJhdGl2ZSwgVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy9pbmRleCc7XHJcbmltcG9ydCB7Q29vcGVyYXRpdmVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29vcGVyYXRpdmUuc2VydmljZVwiO1xyXG5pbXBvcnQge0Nvb3BlcmF0aXZlU3RhZmZTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29vcGVyYXRpdmVTdGFmZi5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQge01lbWJlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9tZW1iZXIuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHtDb29wZXJhdGl2ZVN0YWZmLFZlcmlmeUF1dGh9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW5kZXhcIjtcclxuXHJcbmltcG9ydCB7IFROU0ZhbmN5QWxlcnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZhbmN5YWxlcnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLXZlbmRvclwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidmVuZG9yLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vdmVuZG9yLWNvbW1vbi5jc3NcIiwgXCIuL3ZlbmRvci5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlbmRvclJlZ2lzdGVyQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgaW5wdXQ6IGFueTtcclxuICAgIHNlbGVjdGVkQ29vcGVyYXRpdmVJbmRleDogbnVtYmVyIDtcclxuICAgIHNlbGVjdGVkQ29vcGVyYXRpdmUgOiBzdHJpbmc7XHJcbiAgICBzdGFmZklkOiBTdHJpbmc7XHJcbiAgICBidXNpbmVzc05hbWU6IFN0cmluZztcclxuICAgIGJ1c2luZXNzRW1haWw6IFN0cmluZztcclxuICAgIGNvb3BlcmF0aXZlOiBBcnJheTxDb29wZXJhdGl2ZT4gPSBbXTtcclxuICAgIGhpbnQ6IHN0cmluZyA9IFwiU2VsZWN0IENvb3BlcmF0aXZlXCI7XHJcbiAgICBwdWJsaWMgY29vcGVyYXRpdmVMaXN0OiBWYWx1ZUxpc3Q8c3RyaW5nPjtcclxuICAgIHB1YmxpYyBjc3NDbGFzczogc3RyaW5nICAgICAgPSBcImRlZmF1bHRcIjtcclxuICAgIGNvb3BlcmF0aXZlU3RhZmY6IFVzZXI7XHJcbiAgICB2ZXJpZnlBdXRoOiBWZXJpZnlBdXRoO1xyXG4gICAgcHVibGljIGhpZGRlbjogYm9vbGVhbjtcclxuICAgIC8vIHB1YmxpYyB0aXRsZVN0YXRlOiBUSVRMRV9TVEFURTtcclxuICAgIC8vIHB1YmxpYyBfYmFyOiBCb3R0b21CYXI7XHJcbiAgICBwdWJsaWMgaW5hY3RpdmVDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGFjY2VudENvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIGNvb3BlcmF0aXZlU2VydmljZTpDb29wZXJhdGl2ZVNlcnZpY2UsIHByaXZhdGUgY29vcGVyYXRpdmVTdGFmZlNlcnZpY2U6Q29vcGVyYXRpdmVTdGFmZlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBtZW1iZXJTZXJ2aWNlOiBNZW1iZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcGFnZTogUGFnZSwpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0ge1xyXG4gICAgICAgICAgICBcImZpcnN0bmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImxhc3RuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJcIixcclxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldENvb3BlcmF0aXZlKCk7XHJcbiAgIH1cclxuICAgXHJcbiAgICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgICAvL3RoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICB9XHJcbiAgICBwdWJsaWMgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgLy8gaWYodGhpcy5pbnB1dC5maXJzdG5hbWUgJiYgdGhpcy5pbnB1dC5sYXN0bmFtZSAmJiB0aGlzLmlucHV0LmVtYWlsICYmIHRoaXMuaW5wdXQucGFzc3dvcmQpIHtcclxuICAgICAgICAvLyAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJhY2NvdW50XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaW5wdXQpKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVhY2hpbmcgUmVnaXN0ZXIgXCIgKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRDb29wZXJhdGl2ZVN0YWZmKHRoaXMuc3RhZmZJZCx0aGlzLnNlbGVjdGVkQ29vcGVyYXRpdmUsXCJcIixcImNvb3BlcmF0b3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyVmVuZG9yKCkge1xyXG4gICAgICAgIC8vIGlmKHRoaXMuaW5wdXQuZmlyc3RuYW1lICYmIHRoaXMuaW5wdXQubGFzdG5hbWUgJiYgdGhpcy5pbnB1dC5lbWFpbCAmJiB0aGlzLmlucHV0LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgLy8gICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWNjb3VudFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlucHV0KSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIChuZXcgU25hY2tCYXIoKSkuc2ltcGxlKFwiQWxsIEZpZWxkcyBSZXF1aXJlZCFcIik7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlYWNoaW5nIFJlZ2lzdGVyIFZlbmRvciBcIiApO1xyXG5cclxuICAgICAgICB0aGlzLmdldENvb3BlcmF0aXZlU3RhZmYodGhpcy5idXNpbmVzc0VtYWlsLFwiMFwiLHRoaXMuYnVzaW5lc3NOYW1lLFwidmVuZG9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmF2QnRuVGFwKCl7XHJcbiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgYmUgY2FsbGVkIG9ubHkgaW4gQW5kcm9pZC5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpb24gYnV0dG9uIHRhcHBlZCFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWJMb2FkZWQoZXZlbnQpIHtcclxuLy8gICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xyXG4vLyAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuLy8gICAgIHRoaXMudGl0bGVTdGF0ZSA9IFRJVExFX1NUQVRFLlNIT1dfV0hFTl9BQ1RJVkU7XHJcbi8vICAgICB0aGlzLmluYWN0aXZlQ29sb3IgPSBcIndoaXRlXCI7XHJcbi8vICAgICB0aGlzLmFjY2VudENvbG9yID0gXCJibHVlXCI7XHJcbi8vIH1cclxuXHJcbi8vICB0YWJTZWxlY3RlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4vLyAgICAgIC8vIG9ubHkgdHJpZ2dlcmVkIHdoZW4gYSBkaWZmZXJlbnQgdGFiIGlzIHRhcHBlZFxyXG4vLyAgICAgIGNvbnNvbGUubG9nKGFyZ3MubmV3SW5kZXgpO1xyXG4vLyAgfVxyXG5cclxuICAgIHN0YXJ0QmFja2dyb3VuZEFuaW1hdGlvbihiYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC5hbmltYXRlKHtcclxuICAgICAgICAgIHNjYWxlOiB7IHg6IDEuMCwgeTogMS4wIH0sXHJcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMDBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIG9uY29vcGVyYXRpdmVjaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgRHJvcCBEb3duIHNlbGVjdGVkIGluZGV4IGNoYW5nZWQgICR7YXJncy5vbGRJbmRleH0gdG8gJHthcmdzLm5ld0luZGV4fS4gTmV3IHZhbHVlIGlzIFwiJHt0aGlzLnNlc3Npb25pdGVtcy5nZXRWYWx1ZShcclxuICAgICAgICAvLyAgICAgYXJncy5uZXdJbmRleCl9XCJgKTtcclxuICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBJRCBcIiArIGFyZ3MubmV3SW5kZXggKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvb3BlcmF0aXZlID0gdGhpcy5jb29wZXJhdGl2ZUxpc3QuZ2V0VmFsdWUoYXJncy5uZXdJbmRleCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgSWQgVmFsdWUgIFwiICsgIHRoaXMuc2VsZWN0ZWRDb29wZXJhdGl2ZSApO1xyXG4gICAgICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBnZXRDb29wZXJhdGl2ZSgpe1xyXG4gICAgICAgIHRoaXMuY29vcGVyYXRpdmVTZXJ2aWNlLmdldEFsbENvb3BlcmF0aXZlKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHsgXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvb3BlcmF0aXZlIExpc3QgXCIrIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSApO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgICB0aGlzLmNvb3BlcmF0aXZlID0gZGF0YVtcImRhdGFcIl07XHJcblxyXG4gICAgICAgICAgICAgdGhpcy5jb29wZXJhdGl2ZUxpc3QgPSBuZXcgVmFsdWVMaXN0PHN0cmluZz4oKTtcclxuICAgICAgICAgICAgIGZvciAoIGxldCBsb29wID0gMDsgbG9vcCA8IHRoaXMuY29vcGVyYXRpdmUubGVuZ3RoOyBsb29wKysgKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuY29vcGVyYXRpdmVMaXN0LnB1c2goeyB2YWx1ZTogICBgJHt0aGlzLmNvb3BlcmF0aXZlW2xvb3BdLmNvb3BlcmF0aXZlSWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYCR7dGhpcy5jb29wZXJhdGl2ZVtsb29wXS5maXJzdF9uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1x0ICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29wZXJhdGl2ZVN0YWZmKHN0YWZmSWQ6U3RyaW5nLGNvb3BlcmF0aXZlSWQ6U3RyaW5nLG5hbWU6U3RyaW5nLCB1c2VyVHlwZTogU3RyaW5nKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YWZmIGFuZCBDb29wZXJhdGl2ZUlkIFwiKyAgc3RhZmZJZCArIFwiIC0gXCIgKyBjb29wZXJhdGl2ZUlkKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLm1lbWJlclNlcnZpY2UuZ2V0Q29vcGVyYXRpdmVTdGFmZihzdGFmZklkLGNvb3BlcmF0aXZlSWQsXCJOZXdcIixuYW1lLHVzZXJUeXBlKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4geyBcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcGVyYXRpdmUgU3RhZmYgXCIrIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSApO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgICB0aGlzLmNvb3BlcmF0aXZlU3RhZmYgPSBkYXRhW1wiZGF0YVwiXTtcclxuXHJcbiAgICAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dTdWNjZXNzKFwiU3VjY2VzcyFcIiwgXCJDaGVjayB5b3VyIGVtYWlsIGZvciB0ZW1wb3JhcnkgcGFzc3dvcmRcIiwgXCJPa1wiKVxyXG4gICAgICAgICAgICAgLnRoZW4oICgpID0+IHsgLyogdXNlciBwcmVzc2VkIHRoZSBidXR0b24gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWRpcmVjdCB0byBDaGFuZ2UgUGFzc3dvcmRcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmVyaWZ5aW5nIFN0YWZmIG91dCBzaWRlIFwiICsgdGhpcy5jb29wZXJhdGl2ZVN0YWZmLl9pZCk7XHJcbiAgICAgICAgICAgLy8gIHRoaXMuc2VuZFZlcmlmeUF1dGgodGhpcy5jb29wZXJhdGl2ZVN0YWZmKTtcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0Vycm9yKFwiRXJyb3IhXCIsIGVyci5lcnJvci5tZXNzYWdlLCBcIk9rXCIpIC50aGVuKCAoKSA9PiB7IC8qIHVzZXIgcHJlc3NlZCB0aGUgYnV0dG9uICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWRpcmVjdCB0byBDaGFuZ2UgUGFzc3dvcmRcIik7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHQgIFxyXG4gICAgfVxyXG5cclxuICAgIHNlbmRWZXJpZnlBdXRoKHZlcmlmeUF1dGg6IENvb3BlcmF0aXZlU3RhZmYpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmVyaWZ5IFwiKyAgdmVyaWZ5QXV0aC5zdGFmZklkKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmNvb3BlcmF0aXZlU3RhZmZTZXJ2aWNlLnZlcmlmeUF1dGhUb0NyZWF0TGF0ZXIodmVyaWZ5QXV0aCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHsgXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZlcnkgQXV0aCBcIisgSlNPTi5zdHJpbmdpZnkoZGF0YVtcImRhdGFcIl0pICk7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1x0ICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1N1Y2Nlc3MoKSB7XHJcbiAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcyhcIlN1Y2Nlc3MhXCIsIFwiU29tZXRoaW5nIGZpbmlzaGVkIHN1Y2Nlc3NmdWxseS5cIiwgXCJPa1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0Vycm9yKCkge1xyXG4gICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0Vycm9yKFwiRXJyb3IhXCIsIFwiT2ggbm8sIHNvbWV0aGluZyB3ZW50IHdyb25nLlwiLCBcIkRpc21pc3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dDdXN0b21JbWFnZSgpIHtcclxuICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dBbmltYXRpb25UeXBlID0gVE5TRmFuY3lBbGVydC5TSE9XX0FOSU1BVElPTl9UWVBFUy5TbGlkZUluRnJvbUJvdHRvbTtcclxuICAgICAgICBUTlNGYW5jeUFsZXJ0LmhpZGVBbmltYXRpb25UeXBlID0gVE5TRmFuY3lBbGVydC5ISURFX0FOSU1BVElPTl9UWVBFUy5TbGlkZU91dFRvVG9wO1xyXG4gICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0N1c3RvbUltYWdlKFwicG9seWdsb3RfZGV2ZWxvcGVyLnBuZ1wiLCBcIiM5MTFFMjVcIiwgXCJDdXN0b20gSW1hZ2VcIiwgXCJVc2UgeW91ciBvd24gaW1hZ2VzIGluIGFuIGFsZXJ0IVwiLCBcIkRpc21pc3NcIik7XHJcbiAgICB9XHJcbiAgICAgIFxyXG5cclxufSJdfQ==
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
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(location, cooperativeService, cooperativeStaffService, memberService, route, router, _page) {
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
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.getCooperative();
    };
    RegisterComponent.prototype.ngOnInit = function () {
        //this._page.actionBarHidden = true;
    };
    RegisterComponent.prototype.register = function () {
        // if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
        //     ApplicationSettings.setString("account", JSON.stringify(this.input));
        //     this.location.back();
        // } else {
        //     (new SnackBar()).simple("All Fields Required!");
        // }
        console.log("Reaching Register ");
        this.getCooperativeStaff(this.staffId, this.selectedCooperative, "", "cooperator");
    };
    RegisterComponent.prototype.registerVendor = function () {
        // if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
        //     ApplicationSettings.setString("account", JSON.stringify(this.input));
        //     this.location.back();
        // } else {
        //     (new SnackBar()).simple("All Fields Required!");
        // }
        console.log("Reaching Register Vendor ");
        this.getCooperativeStaff(this.businessEmail, "0", this.businessName, "vendor");
    };
    RegisterComponent.prototype.onNavBtnTap = function () {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    };
    RegisterComponent.prototype.goBack = function () {
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
    RegisterComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    RegisterComponent.prototype.oncooperativechange = function (args) {
        // console.log(`Drop Down selected index changed  ${args.oldIndex} to ${args.newIndex}. New value is "${this.sessionitems.getValue(
        //     args.newIndex)}"`);
        console.log("Selected ID " + args.newIndex);
        this.selectedCooperative = this.cooperativeList.getValue(args.newIndex);
        console.log("Selected Id Value  " + this.selectedCooperative);
    };
    RegisterComponent.prototype.getCooperative = function () {
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
    RegisterComponent.prototype.getCooperativeStaff = function (staffId, cooperativeId, name, userType) {
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
    RegisterComponent.prototype.sendVerifyAuth = function (verifyAuth) {
        console.log("Verify " + verifyAuth.staffId);
        this.cooperativeStaffService.verifyAuthToCreatLater(verifyAuth).subscribe(function (data) {
            console.log("Very Auth " + JSON.stringify(data["data"]));
        }, function (err) {
            console.log(err);
        });
    };
    RegisterComponent.prototype.showSuccess = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showSuccess("Success!", "Something finished successfully.", "Ok");
    };
    RegisterComponent.prototype.showError = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", "Oh no, something went wrong.", "Dismiss");
    };
    RegisterComponent.prototype.showCustomImage = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showAnimationType = nativescript_fancyalert_1.TNSFancyAlert.SHOW_ANIMATION_TYPES.SlideInFromBottom;
        nativescript_fancyalert_1.TNSFancyAlert.hideAnimationType = nativescript_fancyalert_1.TNSFancyAlert.HIDE_ANIMATION_TYPES.SlideOutToTop;
        nativescript_fancyalert_1.TNSFancyAlert.showCustomImage("polyglot_developer.png", "#911E25", "Custom Image", "Use your own images in an alert!", "Dismiss");
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-register",
            templateUrl: "register.component.html",
            styleUrls: ["./register-common.css", "./register.component.css"],
        }),
        __metadata("design:paramtypes", [common_1.Location, cooperative_service_1.CooperativeService, cooperativeStaff_service_1.CooperativeStaffService,
            member_service_1.MemberService, router_1.ActivatedRoute, router_1.Router, page_1.Page])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStEO0FBQy9ELDBDQUF5RDtBQUN6RCwwQ0FBMkM7QUFPM0MsZ0NBQStCO0FBRy9CLGlFQUE2RDtBQUc3RCwwRUFBc0U7QUFDdEUsb0ZBQWdGO0FBRWhGLGdFQUE0RDtBQUk1RCxtRUFBd0Q7QUFTeEQ7SUFvQkksMkJBQTJCLFFBQWtCLEVBQVUsa0JBQXFDLEVBQVUsdUJBQStDLEVBQ3pJLGFBQTRCLEVBQVUsS0FBcUIsRUFBVSxNQUFjLEVBQVUsS0FBVztRQUR6RixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUFVLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBd0I7UUFDekksa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBYnBILGdCQUFXLEdBQXVCLEVBQUUsQ0FBQztRQUNyQyxTQUFJLEdBQVcsb0JBQW9CLENBQUM7UUFFN0IsYUFBUSxHQUFnQixTQUFTLENBQUM7UUFXckMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFdBQVcsRUFBRSxFQUFFO1lBQ2YsVUFBVSxFQUFFLEVBQUU7WUFDZCxPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxFQUFFO1NBQ2pCLENBQUE7SUFDTCxDQUFDO0lBRUQsMkNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRVEsb0NBQVEsR0FBZjtRQUNJLG9DQUFvQztJQUN4QyxDQUFDO0lBQ0ssb0NBQVEsR0FBZjtRQUNJLCtGQUErRjtRQUMvRiw0RUFBNEU7UUFDNUUsNEJBQTRCO1FBQzVCLFdBQVc7UUFDWCx1REFBdUQ7UUFDdkQsSUFBSTtRQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUUsQ0FBQztRQUVuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUMsRUFBRSxFQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSwwQ0FBYyxHQUFyQjtRQUNJLCtGQUErRjtRQUMvRiw0RUFBNEU7UUFDNUUsNEJBQTRCO1FBQzVCLFdBQVc7UUFDWCx1REFBdUQ7UUFDdkQsSUFBSTtRQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUUsQ0FBQztRQUUxQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxRQUFRLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNJLDRDQUE0QztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxxQkFBcUI7SUFDekIsMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQixzREFBc0Q7SUFDdEQsb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxJQUFJO0lBRUosc0RBQXNEO0lBQ3RELHdEQUF3RDtJQUN4RCxtQ0FBbUM7SUFDbkMsS0FBSztJQUVELG9EQUF3QixHQUF4QixVQUF5QixVQUFVO1FBQy9CLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSwrQ0FBbUIsR0FBMUIsVUFBMkIsSUFBbUM7UUFDNUQsbUlBQW1JO1FBQ25JLDBCQUEwQjtRQUUxQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBRSxDQUFDO0lBRXRFLENBQUM7SUFFRCwwQ0FBYyxHQUFkO1FBQUEsaUJBc0JEO1FBckJHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFNBQVMsQ0FDakQsVUFBQSxJQUFJO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFLENBQUM7WUFFaEUsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFaEMsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGtDQUFTLEVBQVUsQ0FBQztZQUMvQyxHQUFHLENBQUMsQ0FBRSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFHLENBQUM7Z0JBQzVELEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFJLEtBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFlO29CQUN4RSxPQUFPLEVBQUUsS0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVk7aUJBQ2xELENBQUMsQ0FBQztZQUNQLENBQUM7UUFJQSxDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVmLENBQUMsQ0FDTCxDQUFDO0lBQ1YsQ0FBQztJQUVELCtDQUFtQixHQUFuQixVQUFvQixPQUFjLEVBQUMsYUFBb0IsRUFBQyxJQUFXLEVBQUUsUUFBZ0I7UUFBckYsaUJBZ0NDO1FBL0JHLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQztRQUcxRSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ3ZGLFVBQUEsSUFBSTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRSxDQUFDO1lBRWpFLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFckMsdUNBQWEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLHlDQUF5QyxFQUFFLElBQUksQ0FBQztpQkFDckYsSUFBSSxDQUFFO2dCQUVKLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1lBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkUsK0NBQStDO1FBSTVDLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqQyx1Q0FBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUUsSUFBSSxDQUFFO2dCQUVqRSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFFQyxDQUFDLENBQ0wsQ0FBQztJQUNWLENBQUM7SUFFRCwwQ0FBYyxHQUFkLFVBQWUsVUFBNEI7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRzVDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQ3JFLFVBQUEsSUFBSTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUUsQ0FBQztRQUl4RCxDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVmLENBQUMsQ0FDTCxDQUFDO0lBQ1YsQ0FBQztJQUVNLHVDQUFXLEdBQWxCO1FBQ0ksdUNBQWEsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSxxQ0FBUyxHQUFoQjtRQUNJLHVDQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSw4QkFBOEIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRU0sMkNBQWUsR0FBdEI7UUFDSSx1Q0FBYSxDQUFDLGlCQUFpQixHQUFHLHVDQUFhLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7UUFDdkYsdUNBQWEsQ0FBQyxpQkFBaUIsR0FBRyx1Q0FBYSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztRQUNuRix1Q0FBYSxDQUFDLGVBQWUsQ0FBQyx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLGtDQUFrQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3RJLENBQUM7SUE5TFEsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSwwQkFBMEIsQ0FBQztTQUNuRSxDQUFDO3lDQXNCdUMsaUJBQVEsRUFBNkIsd0NBQWtCLEVBQWtDLGtEQUF1QjtZQUMxSCw4QkFBYSxFQUFpQix1QkFBYyxFQUFrQixlQUFNLEVBQWlCLFdBQUk7T0FyQjNHLGlCQUFpQixDQWlNN0I7SUFBRCx3QkFBQztDQUFBLEFBak1ELElBaU1DO0FBak1ZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxPbkluaXQsQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdGlvblR5cGUsIGdldENvbm5lY3Rpb25UeXBlIH0gZnJvbSBcImNvbm5lY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IHByb21wdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5cclxuaW1wb3J0IHsgVmFsdWVMaXN0LCBEcm9wRG93biB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0IHsgQ29vcGVyYXRpdmUsIFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW5kZXgnO1xyXG5pbXBvcnQge0Nvb3BlcmF0aXZlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Nvb3BlcmF0aXZlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb29wZXJhdGl2ZVN0YWZmU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Nvb3BlcmF0aXZlU3RhZmYuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHtNZW1iZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbWVtYmVyLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7Q29vcGVyYXRpdmVTdGFmZixWZXJpZnlBdXRofSBmcm9tIFwiLi4vLi4vbW9kZWxzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBUTlNGYW5jeUFsZXJ0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mYW5jeWFsZXJ0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJucy1yZWdpc3RlclwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9yZWdpc3Rlci1jb21tb24uY3NzXCIsIFwiLi9yZWdpc3Rlci5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgaW5wdXQ6IGFueTtcclxuICAgIHNlbGVjdGVkQ29vcGVyYXRpdmVJbmRleDogbnVtYmVyIDtcclxuICAgIHNlbGVjdGVkQ29vcGVyYXRpdmUgOiBzdHJpbmc7XHJcbiAgICBzdGFmZklkOiBTdHJpbmc7XHJcbiAgICBidXNpbmVzc05hbWU6IFN0cmluZztcclxuICAgIGJ1c2luZXNzRW1haWw6IFN0cmluZztcclxuICAgIGNvb3BlcmF0aXZlOiBBcnJheTxDb29wZXJhdGl2ZT4gPSBbXTtcclxuICAgIGhpbnQ6IHN0cmluZyA9IFwiU2VsZWN0IENvb3BlcmF0aXZlXCI7XHJcbiAgICBwdWJsaWMgY29vcGVyYXRpdmVMaXN0OiBWYWx1ZUxpc3Q8c3RyaW5nPjtcclxuICAgIHB1YmxpYyBjc3NDbGFzczogc3RyaW5nICAgICAgPSBcImRlZmF1bHRcIjtcclxuICAgIGNvb3BlcmF0aXZlU3RhZmY6IFVzZXI7XHJcbiAgICB2ZXJpZnlBdXRoOiBWZXJpZnlBdXRoO1xyXG4gICAgcHVibGljIGhpZGRlbjogYm9vbGVhbjtcclxuICAgIC8vIHB1YmxpYyB0aXRsZVN0YXRlOiBUSVRMRV9TVEFURTtcclxuICAgIC8vIHB1YmxpYyBfYmFyOiBCb3R0b21CYXI7XHJcbiAgICBwdWJsaWMgaW5hY3RpdmVDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGFjY2VudENvbG9yOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIGNvb3BlcmF0aXZlU2VydmljZTpDb29wZXJhdGl2ZVNlcnZpY2UsIHByaXZhdGUgY29vcGVyYXRpdmVTdGFmZlNlcnZpY2U6Q29vcGVyYXRpdmVTdGFmZlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBtZW1iZXJTZXJ2aWNlOiBNZW1iZXJTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcGFnZTogUGFnZSwpIHtcclxuICAgICAgICB0aGlzLmlucHV0ID0ge1xyXG4gICAgICAgICAgICBcImZpcnN0bmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImxhc3RuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJcIixcclxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldENvb3BlcmF0aXZlKCk7XHJcbiAgIH1cclxuICAgXHJcbiAgICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgICAvL3RoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICB9XHJcbiAgICBwdWJsaWMgcmVnaXN0ZXIoKSB7XHJcbiAgICAgICAgLy8gaWYodGhpcy5pbnB1dC5maXJzdG5hbWUgJiYgdGhpcy5pbnB1dC5sYXN0bmFtZSAmJiB0aGlzLmlucHV0LmVtYWlsICYmIHRoaXMuaW5wdXQucGFzc3dvcmQpIHtcclxuICAgICAgICAvLyAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJhY2NvdW50XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaW5wdXQpKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVhY2hpbmcgUmVnaXN0ZXIgXCIgKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRDb29wZXJhdGl2ZVN0YWZmKHRoaXMuc3RhZmZJZCx0aGlzLnNlbGVjdGVkQ29vcGVyYXRpdmUsXCJcIixcImNvb3BlcmF0b3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZ2lzdGVyVmVuZG9yKCkge1xyXG4gICAgICAgIC8vIGlmKHRoaXMuaW5wdXQuZmlyc3RuYW1lICYmIHRoaXMuaW5wdXQubGFzdG5hbWUgJiYgdGhpcy5pbnB1dC5lbWFpbCAmJiB0aGlzLmlucHV0LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgLy8gICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWNjb3VudFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlucHV0KSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIChuZXcgU25hY2tCYXIoKSkuc2ltcGxlKFwiQWxsIEZpZWxkcyBSZXF1aXJlZCFcIik7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlYWNoaW5nIFJlZ2lzdGVyIFZlbmRvciBcIiApO1xyXG5cclxuICAgICAgICB0aGlzLmdldENvb3BlcmF0aXZlU3RhZmYodGhpcy5idXNpbmVzc0VtYWlsLFwiMFwiLHRoaXMuYnVzaW5lc3NOYW1lLFwidmVuZG9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmF2QnRuVGFwKCl7XHJcbiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgYmUgY2FsbGVkIG9ubHkgaW4gQW5kcm9pZC5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpb24gYnV0dG9uIHRhcHBlZCFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWJMb2FkZWQoZXZlbnQpIHtcclxuLy8gICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xyXG4vLyAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuLy8gICAgIHRoaXMudGl0bGVTdGF0ZSA9IFRJVExFX1NUQVRFLlNIT1dfV0hFTl9BQ1RJVkU7XHJcbi8vICAgICB0aGlzLmluYWN0aXZlQ29sb3IgPSBcIndoaXRlXCI7XHJcbi8vICAgICB0aGlzLmFjY2VudENvbG9yID0gXCJibHVlXCI7XHJcbi8vIH1cclxuXHJcbi8vICB0YWJTZWxlY3RlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4vLyAgICAgIC8vIG9ubHkgdHJpZ2dlcmVkIHdoZW4gYSBkaWZmZXJlbnQgdGFiIGlzIHRhcHBlZFxyXG4vLyAgICAgIGNvbnNvbGUubG9nKGFyZ3MubmV3SW5kZXgpO1xyXG4vLyAgfVxyXG5cclxuICAgIHN0YXJ0QmFja2dyb3VuZEFuaW1hdGlvbihiYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC5hbmltYXRlKHtcclxuICAgICAgICAgIHNjYWxlOiB7IHg6IDEuMCwgeTogMS4wIH0sXHJcbiAgICAgICAgICBkdXJhdGlvbjogMTAwMDBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIG9uY29vcGVyYXRpdmVjaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgRHJvcCBEb3duIHNlbGVjdGVkIGluZGV4IGNoYW5nZWQgICR7YXJncy5vbGRJbmRleH0gdG8gJHthcmdzLm5ld0luZGV4fS4gTmV3IHZhbHVlIGlzIFwiJHt0aGlzLnNlc3Npb25pdGVtcy5nZXRWYWx1ZShcclxuICAgICAgICAvLyAgICAgYXJncy5uZXdJbmRleCl9XCJgKTtcclxuICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBJRCBcIiArIGFyZ3MubmV3SW5kZXggKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvb3BlcmF0aXZlID0gdGhpcy5jb29wZXJhdGl2ZUxpc3QuZ2V0VmFsdWUoYXJncy5uZXdJbmRleCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgSWQgVmFsdWUgIFwiICsgIHRoaXMuc2VsZWN0ZWRDb29wZXJhdGl2ZSApO1xyXG4gICAgICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICBnZXRDb29wZXJhdGl2ZSgpe1xyXG4gICAgICAgIHRoaXMuY29vcGVyYXRpdmVTZXJ2aWNlLmdldEFsbENvb3BlcmF0aXZlKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHsgXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvb3BlcmF0aXZlIExpc3QgXCIrIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSApO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgICB0aGlzLmNvb3BlcmF0aXZlID0gZGF0YVtcImRhdGFcIl07XHJcblxyXG4gICAgICAgICAgICAgdGhpcy5jb29wZXJhdGl2ZUxpc3QgPSBuZXcgVmFsdWVMaXN0PHN0cmluZz4oKTtcclxuICAgICAgICAgICAgIGZvciAoIGxldCBsb29wID0gMDsgbG9vcCA8IHRoaXMuY29vcGVyYXRpdmUubGVuZ3RoOyBsb29wKysgKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuY29vcGVyYXRpdmVMaXN0LnB1c2goeyB2YWx1ZTogICBgJHt0aGlzLmNvb3BlcmF0aXZlW2xvb3BdLmNvb3BlcmF0aXZlSWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYCR7dGhpcy5jb29wZXJhdGl2ZVtsb29wXS5maXJzdF9uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1x0ICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29wZXJhdGl2ZVN0YWZmKHN0YWZmSWQ6U3RyaW5nLGNvb3BlcmF0aXZlSWQ6U3RyaW5nLG5hbWU6U3RyaW5nLCB1c2VyVHlwZTogU3RyaW5nKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YWZmIGFuZCBDb29wZXJhdGl2ZUlkIFwiKyAgc3RhZmZJZCArIFwiIC0gXCIgKyBjb29wZXJhdGl2ZUlkKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLm1lbWJlclNlcnZpY2UuZ2V0Q29vcGVyYXRpdmVTdGFmZihzdGFmZklkLGNvb3BlcmF0aXZlSWQsXCJOZXdcIixuYW1lLHVzZXJUeXBlKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4geyBcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcGVyYXRpdmUgU3RhZmYgXCIrIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSApO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgICB0aGlzLmNvb3BlcmF0aXZlU3RhZmYgPSBkYXRhW1wiZGF0YVwiXTtcclxuXHJcbiAgICAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dTdWNjZXNzKFwiU3VjY2VzcyFcIiwgXCJDaGVjayB5b3VyIGVtYWlsIGZvciB0ZW1wb3JhcnkgcGFzc3dvcmRcIiwgXCJPa1wiKVxyXG4gICAgICAgICAgICAgLnRoZW4oICgpID0+IHsgLyogdXNlciBwcmVzc2VkIHRoZSBidXR0b24gKi9cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWRpcmVjdCB0byBDaGFuZ2UgUGFzc3dvcmRcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmVyaWZ5aW5nIFN0YWZmIG91dCBzaWRlIFwiICsgdGhpcy5jb29wZXJhdGl2ZVN0YWZmLl9pZCk7XHJcbiAgICAgICAgICAgLy8gIHRoaXMuc2VuZFZlcmlmeUF1dGgodGhpcy5jb29wZXJhdGl2ZVN0YWZmKTtcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0Vycm9yKFwiRXJyb3IhXCIsIGVyci5lcnJvci5tZXNzYWdlLCBcIk9rXCIpIC50aGVuKCAoKSA9PiB7IC8qIHVzZXIgcHJlc3NlZCB0aGUgYnV0dG9uICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWRpcmVjdCB0byBDaGFuZ2UgUGFzc3dvcmRcIik7XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHQgIFxyXG4gICAgfVxyXG5cclxuICAgIHNlbmRWZXJpZnlBdXRoKHZlcmlmeUF1dGg6IENvb3BlcmF0aXZlU3RhZmYpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmVyaWZ5IFwiKyAgdmVyaWZ5QXV0aC5zdGFmZklkKTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmNvb3BlcmF0aXZlU3RhZmZTZXJ2aWNlLnZlcmlmeUF1dGhUb0NyZWF0TGF0ZXIodmVyaWZ5QXV0aCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHsgXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZlcnkgQXV0aCBcIisgSlNPTi5zdHJpbmdpZnkoZGF0YVtcImRhdGFcIl0pICk7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1x0ICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1N1Y2Nlc3MoKSB7XHJcbiAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcyhcIlN1Y2Nlc3MhXCIsIFwiU29tZXRoaW5nIGZpbmlzaGVkIHN1Y2Nlc3NmdWxseS5cIiwgXCJPa1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0Vycm9yKCkge1xyXG4gICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0Vycm9yKFwiRXJyb3IhXCIsIFwiT2ggbm8sIHNvbWV0aGluZyB3ZW50IHdyb25nLlwiLCBcIkRpc21pc3NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dDdXN0b21JbWFnZSgpIHtcclxuICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dBbmltYXRpb25UeXBlID0gVE5TRmFuY3lBbGVydC5TSE9XX0FOSU1BVElPTl9UWVBFUy5TbGlkZUluRnJvbUJvdHRvbTtcclxuICAgICAgICBUTlNGYW5jeUFsZXJ0LmhpZGVBbmltYXRpb25UeXBlID0gVE5TRmFuY3lBbGVydC5ISURFX0FOSU1BVElPTl9UWVBFUy5TbGlkZU91dFRvVG9wO1xyXG4gICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0N1c3RvbUltYWdlKFwicG9seWdsb3RfZGV2ZWxvcGVyLnBuZ1wiLCBcIiM5MTFFMjVcIiwgXCJDdXN0b20gSW1hZ2VcIiwgXCJVc2UgeW91ciBvd24gaW1hZ2VzIGluIGFuIGFsZXJ0IVwiLCBcIkRpc21pc3NcIik7XHJcbiAgICB9XHJcbiAgICAgIFxyXG5cclxufSJdfQ==
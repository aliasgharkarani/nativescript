"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var dialogs_1 = require("ui/dialogs");
var nativescript_drop_down_1 = require("nativescript-drop-down");
var cooperative_service_1 = require("../../services/cooperative.service");
var cooperativeStaff_service_1 = require("../../services/cooperativeStaff.service");
var coopercooperative_service_1 = require("../../services/coopercooperative.service");
var auth_service_1 = require("../../services/auth.service");
var product_service_1 = require("../../services/product.service");
var cooperativestaffaccount_service_1 = require("../../services/cooperativestaffaccount.service");
var LS = require("nativescript-localstorage");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var PayComponent = /** @class */ (function () {
    function PayComponent(location, cooperativeService, cooperativeStaffService, cooperCooperativeService, authService, productService, cooperativeStaffAccountService, router, activatedRoute) {
        this.location = location;
        this.cooperativeService = cooperativeService;
        this.cooperativeStaffService = cooperativeStaffService;
        this.cooperCooperativeService = cooperCooperativeService;
        this.authService = authService;
        this.productService = productService;
        this.cooperativeStaffAccountService = cooperativeStaffAccountService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.selectedCooperative = "";
        this.cooperative = [];
        this.assignedcooperatives = [];
        this.hint = " 1";
        this.cssClass = "default";
        this.cartProducts = [];
        this.notification = "You can access your personal offer, updates and price drop here";
        // this.input = {
        //     "firstname": "",
        //     "lastname": "",
        //     "email": "",
        //     "password": ""
        // }
    }
    PayComponent.prototype.ngAfterViewInit = function () {
        this.getCooperative();
    };
    PayComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (LS.getItem('mycartproducts')) {
            this.cartProducts = [];
            var mycartproducts = LS.getItem('mycartproducts');
            mycartproducts.forEach(function (element) {
                if (element.isSelected) {
                    _this.cartProducts.push(element);
                }
            });
            //this.cartProducts = mycartproducts;
            this.getTotalWeight();
        }
        var dataObject = JSON.parse(LS.getItem('currentUser'));
        console.log("User ID " + dataObject._id);
        if (dataObject._id) {
            this.userId = dataObject._id;
            this.cooperId = dataObject.cooperId;
        }
    };
    PayComponent.prototype.register = function () {
        // if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
        //     ApplicationSettings.setString("account", JSON.stringify(this.input));
        //     this.location.back();
        // } else {
        //     (new SnackBar()).simple("All Fields Required!");
        // }
        console.log("Reaching Register ");
        this.getCooperativeStaff(this.staffId, this.selectedCooperative);
    };
    PayComponent.prototype.onNavBtnTap = function () {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    };
    PayComponent.prototype.removefromCart = function (productChecked) {
        var _this = this;
        console.log("Selected Product Delete " + productChecked);
        nativescript_fancyalert_1.TNSFancyAlert.showWarning("Warning!", "Are you sure you want to delete this item?", "Ok").then(function () {
            console.log("delete approved " + productChecked);
            var index = _this.cartProducts.indexOf(productChecked, 0);
            if (index > -1) {
                _this.cartProducts.splice(index, 1);
            }
            LS.removeItem('mycartproducts');
            LS.setItem('mycartproducts', _this.cartProducts);
            //this.getTotalWeight();
        });
    };
    PayComponent.prototype.goBack = function () {
        this.location.back();
    };
    PayComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    PayComponent.prototype.onqtychange = function (args, productChecked) {
        // console.log(`Drop Down selected index changed  ${args.oldIndex} to ${args.newIndex}. New value is "${this.sessionitems.getValue(
        //     args.newIndex)}"`);
        console.log("Selected ID " + args.newIndex);
        //this.selectedCooperative = this.productChecked.qtyList.getValue(args.newIndex);
        console.log("Selected Id Value  " + productChecked.qtyList.getValue(args.newIndex));
        var newqty = +productChecked.qtyList.getValue(args.newIndex);
        for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
            var product = _a[_i];
            // console.log(product); // 1, "string", false
            if (productChecked._id == product._id) {
                product.qty = newqty;
                product.amount = product.price * newqty;
            }
        }
        this.getTotalWeight();
    };
    PayComponent.prototype.getTotalWeight = function () {
        var total = 0;
        var selectedCount = 0;
        if (this.cartProducts != null && this.cartProducts.length > 0) {
            this.cartProducts.forEach(function (x) {
                if (x.isSelected) {
                    total += x.amount;
                    selectedCount += 1;
                }
            });
        }
        this.totalSelectedAmount = total;
        this.totalSelectedItem = selectedCount;
        // if(this.cartProducts.length == selectedCount )
        // {
        //     this.isSelectAll = true;
        // }else{
        //     this.isSelectAll = false;
        // }
        LS.removeItem('mycartproducts');
        LS.setItem('mycartproducts', this.cartProducts);
        return total;
    };
    PayComponent.prototype.oncooperativechange = function (args) {
        // console.log(`Drop Down selected index changed  ${args.oldIndex} to ${args.newIndex}. New value is "${this.sessionitems.getValue(
        //     args.newIndex)}"`);
        console.log("Selected ID " + args.newIndex);
        this.selectedCooperative = this.cooperativeList.getValue(args.newIndex);
        console.log("Selected Id Value  " + this.selectedCooperative);
    };
    PayComponent.prototype.getCooperative = function () {
        var _this = this;
        this.cooperativeService.getAllCooperative().subscribe(function (data) {
            console.log("Cooperative List " + JSON.stringify(data["data"]));
            _this.cooperative = data["data"];
            _this.getAllCooperativesAssigned(_this.cooperId);
        }, function (err) {
            console.log(err);
        });
    };
    PayComponent.prototype.getCooperativeStaff = function (staffId, cooperativeId) {
        var _this = this;
        console.log("Staff and CooperativeId " + staffId + " - " + cooperativeId);
        this.cooperativeStaffService.getCooperativeStaff(staffId, cooperativeId).subscribe(function (data) {
            console.log("Cooperative Staff " + JSON.stringify(data["data"]));
            _this.cooperativeStaff = data["data"];
            console.log("Verifying Staff out side " + _this.cooperativeStaff.staffId);
            _this.sendVerifyAuth(_this.cooperativeStaff);
        }, function (err) {
            console.log(err);
        });
    };
    PayComponent.prototype.getAllCooperativesAssigned = function (cooperId) {
        var _this = this;
        console.log("Staff and CooperativeId " + cooperId);
        this.cooperCooperativeService.getAllCooperativesCooper(cooperId).subscribe(function (data) {
            console.log("Assigned Cooperative " + data["data"]);
            _this.assignedcooperatives = data["data"];
            _this.cooperativeList = new nativescript_drop_down_1.ValueList();
            var _loop_1 = function (loop) {
                _this.assignedcooperatives.forEach(function (element) {
                    if (_this.cooperative[loop].cooperativeId == element.cooperativeId) {
                        _this.cooperativeList.push({
                            value: "" + _this.cooperative[loop].cooperativeId,
                            display: "" + _this.cooperative[loop].first_name,
                        });
                    }
                });
            };
            //    for (let loop = 0; loop < this.cooperative.length; loop++) {
            //    }
            for (var loop = 0; loop < _this.cooperative.length; loop++) {
                _loop_1(loop);
            }
            if (_this.assignedcooperatives.length == 1) {
                _this.selectedCooperative = _this.assignedcooperatives[0].cooperativeId;
            }
            _this.staffId = _this.assignedcooperatives[0].staffId;
        }, function (err) {
            nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", err.error.message, "Ok");
            console.log(err);
        });
    };
    PayComponent.prototype.sendVerifyAuth = function (verifyAuth) {
        console.log("Verify " + verifyAuth.staffId);
        this.cooperativeStaffService.verifyAuthToCreatLater(verifyAuth).subscribe(function (data) {
            console.log("Very Auth " + JSON.stringify(data["data"]));
        }, function (err) {
            console.log(err);
        });
    };
    PayComponent.prototype.pay = function () {
        var _this = this;
        if (this.selectedCooperative == "") {
            nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", "Please Select a Cooperative to continue", "Ok");
            return;
        }
        var options = {
            title: "Transaction PIN",
            defaultText: "",
            inputType: dialogs_1.inputType.password,
            okButtonText: "Confirm",
            cancelButtonText: "Cancel"
        };
        dialogs_1.prompt(options).then(function (result) {
            console.log("Hello, " + result.text);
            _this.checkUserPIn(_this.userId, result.text);
            console.log("Selected Id Value  " + _this.selectedCooperative);
        });
    };
    PayComponent.prototype.displayPromptDialog = function () {
        // >> prompt-dialog-code
        // << prompt-dialog-code
    };
    PayComponent.prototype.reduceProduct = function (productId, quantity, batchNo, cooperId, cooperativeId, staffId, transAmount) {
        console.log("Verify " + productId);
        this.productService.deductProduct(productId, quantity, batchNo, cooperId, cooperativeId, staffId, transAmount).subscribe(function (data) {
            console.log("Product " + JSON.stringify(data["data"]));
        }, function (err) {
            nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", err.error.message, "Ok");
            console.log(err);
        });
    };
    PayComponent.prototype.reduceStaffAccount = function (cooperativeId, staffId, amount) {
        var _this = this;
        console.log("Cooperative Id " + cooperativeId);
        this.cooperativeStaffAccountService.deductCooperativeAccount(cooperativeId, staffId, amount, "Savings").subscribe(function (data) {
            console.log("Staff Account " + JSON.stringify(data["data"]));
            //Generate Batch No
            var batchNo = Math.floor(Math.random());
            _this.cartProducts.forEach(function (element) {
                _this.reduceProduct(element._id, element.qty.toString(), batchNo.toString(), _this.cooperId, _this.selectedCooperative, _this.staffId, element.amount.toString());
            });
            // empty Cart 
            LS.removeItem('mycartproducts');
            _this.cartProducts = [];
            nativescript_fancyalert_1.TNSFancyAlert.showSuccess("Success!", " Your transaction was successful", "Ok")
                .then(function () {
                _this.router.navigate(["/"]);
            });
            // Redirect to Home
        }, function (err) {
            nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", err.error.message, "Ok");
            console.log(err);
        });
    };
    PayComponent.prototype.checkUserPIn = function (userId, pin) {
        var _this = this;
        console.log("Verify " + userId);
        this.authService.checkTransPin(userId, pin).subscribe(function (data) {
            console.log("User Found " + JSON.stringify(data["data"]));
            if (_this.selectedCooperative == "") {
                nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", "Please Select a Cooperative to continue", "Ok");
            }
            else {
                _this.reduceStaffAccount(_this.selectedCooperative, _this.staffId, _this.totalSelectedAmount.toString());
                //  
            }
        }, function (err) {
            nativescript_fancyalert_1.TNSFancyAlert.showError("Error!", err.error.message, "Ok");
            console.log(err);
        });
    };
    PayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-pay",
            templateUrl: "./pay.component.html",
            styleUrls: ["./pay-common.css", "./pay.component.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [common_1.Location, cooperative_service_1.CooperativeService, cooperativeStaff_service_1.CooperativeStaffService,
            coopercooperative_service_1.CooperCooperativeService, auth_service_1.AuthService, product_service_1.ProductService,
            cooperativestaffaccount_service_1.CooperativeStaffAccountService, router_1.Router, router_1.ActivatedRoute])
    ], PayComponent);
    return PayComponent;
}());
exports.PayComponent = PayComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkY7QUFDM0YsMENBQXlEO0FBQ3pELDBDQUEyQztBQU0zQyxzQ0FBNEQ7QUFPNUQsaUVBQTZEO0FBRzdELDBFQUF3RTtBQUN4RSxvRkFBa0Y7QUFDbEYsc0ZBQW9GO0FBQ3BGLDREQUEwRDtBQUMxRCxrRUFBZ0U7QUFDaEUsa0dBQWdHO0FBS2hHLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBQ2hELG1FQUE2RTtBQWdCN0U7SUF5Qkksc0JBQTJCLFFBQWtCLEVBQVUsa0JBQXNDLEVBQVUsdUJBQWdELEVBQy9JLHdCQUFpRCxFQUFVLFdBQXVCLEVBQVUsY0FBNkIsRUFDekgsOEJBQTZELEVBQVUsTUFBYyxFQUFVLGNBQThCO1FBRjFHLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUMvSSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUN6SCxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQStCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXZCckksd0JBQW1CLEdBQVcsRUFBRSxDQUFDO1FBRWpDLGdCQUFXLEdBQXVCLEVBQUUsQ0FBQztRQUNyQyx5QkFBb0IsR0FBZSxFQUFFLENBQUM7UUFDdEMsU0FBSSxHQUFXLElBQUksQ0FBQztRQUViLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFHcEMsaUJBQVksR0FBdUIsRUFBRSxDQUFDO1FBT3JDLGlCQUFZLEdBQVcsaUVBQWlFLENBQUM7UUFTdEYsaUJBQWlCO1FBQ2pC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Q0wsQ0FBQztRQUVSLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDQyx1Q0FBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUE3YlEsWUFBWTtRQVZ4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUscUJBQXFCLENBQUM7WUFDdEQsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FFbEQsQ0FBQzt5Q0E0QnVDLGlCQUFRLEVBQThCLHdDQUFrQixFQUFtQyxrREFBdUI7WUFDdEgsb0RBQXdCLEVBQXNCLDBCQUFXLEVBQXlCLGdDQUFjO1lBQzFGLGdFQUE4QixFQUFrQixlQUFNLEVBQTBCLHVCQUFjO09BM0I1SCxZQUFZLENBaWN4QjtJQUFELG1CQUFDO0NBQUEsQUFqY0QsSUFpY0M7QUFqY1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFNuYWNrQmFyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUgfSBmcm9tIFwiY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgcHJvbXB0LFByb21wdFJlc3VsdCwgaW5wdXRUeXBlIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCAqIGFzIHRleHRWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtdmlld1wiO1xyXG4gIFxyXG5cclxuXHJcbmltcG9ydCB7IFZhbHVlTGlzdCwgRHJvcERvd24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IENvb3BlcmF0aXZlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2luZGV4JztcclxuaW1wb3J0IHsgQ29vcGVyYXRpdmVTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Nvb3BlcmF0aXZlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29vcGVyYXRpdmVTdGFmZlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29vcGVyYXRpdmVTdGFmZi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvb3BlckNvb3BlcmF0aXZlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb29wZXJjb29wZXJhdGl2ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29vcGVyYXRpdmVTdGFmZkFjY291bnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Nvb3BlcmF0aXZlc3RhZmZhY2NvdW50LnNlcnZpY2VcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBDb29wZXJhdGl2ZVN0YWZmLCBWZXJpZnlBdXRoLFByb2R1Y3RDYXJ0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbmRleFwiO1xyXG5cclxubGV0IExTID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIgKTtcclxuaW1wb3J0IHsgVE5TRmFuY3lBbGVydCwgVE5TRmFuY3lBbGVydEJ1dHRvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmFuY3lhbGVydFwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIm5zLXBheVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYXkuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9wYXktY29tbW9uLmNzc1wiLCBcIi4vcGF5LmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGF5Q29tcG9uZW50IHtcclxuXHJcbiAgICBwdWJsaWMgaW5wdXQ6IGFueTtcclxuICAgIHNlbGVjdGVkQ29vcGVyYXRpdmVJbmRleDogbnVtYmVyO1xyXG4gICAgc2VsZWN0ZWRDb29wZXJhdGl2ZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHN0YWZmSWQ6IFN0cmluZztcclxuICAgIGNvb3BlcmF0aXZlOiBBcnJheTxDb29wZXJhdGl2ZT4gPSBbXTtcclxuICAgIGFzc2lnbmVkY29vcGVyYXRpdmVzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBoaW50OiBzdHJpbmcgPSBcIiAxXCI7XHJcbiAgICBwdWJsaWMgY29vcGVyYXRpdmVMaXN0OiBWYWx1ZUxpc3Q8c3RyaW5nPjtcclxuICAgIHB1YmxpYyBjc3NDbGFzczogc3RyaW5nID0gXCJkZWZhdWx0XCI7XHJcbiAgICBjb29wZXJhdGl2ZVN0YWZmOiBDb29wZXJhdGl2ZVN0YWZmO1xyXG4gICAgdmVyaWZ5QXV0aDogVmVyaWZ5QXV0aDtcclxuICAgIGNhcnRQcm9kdWN0czogQXJyYXk8UHJvZHVjdENhcnQ+ID0gW107XHJcbiAgICB0b3RhbFNlbGVjdGVkQW1vdW50OiBudW1iZXI7XHJcbiAgICB0b3RhbFNlbGVjdGVkSXRlbTogbnVtYmVyO1xyXG4gICAgdXNlcklkOiBTdHJpbmc7XHJcbiAgICBjb29wZXJJZDogU3RyaW5nO1xyXG5cclxuXHJcbiAgICAgbm90aWZpY2F0aW9uOiBTdHJpbmcgPSBcIllvdSBjYW4gYWNjZXNzIHlvdXIgcGVyc29uYWwgb2ZmZXIsIHVwZGF0ZXMgYW5kIHByaWNlIGRyb3AgaGVyZVwiO1xyXG5cclxuXHJcblxyXG4gICAgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIGNvb3BlcmF0aXZlU2VydmljZTogQ29vcGVyYXRpdmVTZXJ2aWNlLCBwcml2YXRlIGNvb3BlcmF0aXZlU3RhZmZTZXJ2aWNlOiBDb29wZXJhdGl2ZVN0YWZmU2VydmljZSxcclxuICAgIHByaXZhdGUgY29vcGVyQ29vcGVyYXRpdmVTZXJ2aWNlOkNvb3BlckNvb3BlcmF0aXZlU2VydmljZSwgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSwgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTpQcm9kdWN0U2VydmljZSxcclxuICAgIHByaXZhdGUgY29vcGVyYXRpdmVTdGFmZkFjY291bnRTZXJ2aWNlOkNvb3BlcmF0aXZlU3RhZmZBY2NvdW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuKSB7XHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dCA9IHtcclxuICAgICAgICAvLyAgICAgXCJmaXJzdG5hbWVcIjogXCJcIixcclxuICAgICAgICAvLyAgICAgXCJsYXN0bmFtZVwiOiBcIlwiLFxyXG4gICAgICAgIC8vICAgICBcImVtYWlsXCI6IFwiXCIsXHJcbiAgICAgICAgLy8gICAgIFwicGFzc3dvcmRcIjogXCJcIlxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRDb29wZXJhdGl2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZihMUy5nZXRJdGVtKCdteWNhcnRwcm9kdWN0cycpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0UHJvZHVjdHMgPSBbXTtcclxuICAgICAgICAgICAgdmFyIG15Y2FydHByb2R1Y3RzID0gTFMuZ2V0SXRlbSgnbXljYXJ0cHJvZHVjdHMnKTtcclxuICAgICAgICAgICAgbXljYXJ0cHJvZHVjdHMuZm9yRWFjaCggKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuaXNTZWxlY3RlZClcclxuICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcnRQcm9kdWN0cy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy90aGlzLmNhcnRQcm9kdWN0cyA9IG15Y2FydHByb2R1Y3RzO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRUb3RhbFdlaWdodCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkYXRhT2JqZWN0ID0gSlNPTi5wYXJzZShMUy5nZXRJdGVtKCdjdXJyZW50VXNlcicpKTtcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIElEIFwiICsgZGF0YU9iamVjdC5faWQpO1xyXG4gICAgICAgICAgaWYoZGF0YU9iamVjdC5faWQpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGhpcy51c2VySWQgPSBkYXRhT2JqZWN0Ll9pZDtcclxuICAgICAgICAgICAgICB0aGlzLmNvb3BlcklkID0gZGF0YU9iamVjdC5jb29wZXJJZDtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyByZWdpc3RlcigpIHtcclxuICAgICAgICAvLyBpZih0aGlzLmlucHV0LmZpcnN0bmFtZSAmJiB0aGlzLmlucHV0Lmxhc3RuYW1lICYmIHRoaXMuaW5wdXQuZW1haWwgJiYgdGhpcy5pbnB1dC5wYXNzd29yZCkge1xyXG4gICAgICAgIC8vICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjY291bnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pbnB1dCkpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAobmV3IFNuYWNrQmFyKCkpLnNpbXBsZShcIkFsbCBGaWVsZHMgUmVxdWlyZWQhXCIpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWFjaGluZyBSZWdpc3RlciBcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0Q29vcGVyYXRpdmVTdGFmZih0aGlzLnN0YWZmSWQsIHRoaXMuc2VsZWN0ZWRDb29wZXJhdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25OYXZCdG5UYXAoKSB7XHJcbiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgYmUgY2FsbGVkIG9ubHkgaW4gQW5kcm9pZC5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpb24gYnV0dG9uIHRhcHBlZCFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICByZW1vdmVmcm9tQ2FydCggcHJvZHVjdENoZWNrZWQ6UHJvZHVjdENhcnQpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBQcm9kdWN0IERlbGV0ZSBcIiArIHByb2R1Y3RDaGVja2VkICk7XHJcbiAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd1dhcm5pbmcoXCJXYXJuaW5nIVwiLCBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtP1wiLCBcIk9rXCIpIC50aGVuKCAoKSA9PiB7IC8qIHVzZXIgcHJlc3NlZCB0aGUgYnV0dG9uICovXHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGUgYXBwcm92ZWQgXCIrIHByb2R1Y3RDaGVja2VkKVxyXG4gICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jYXJ0UHJvZHVjdHMuaW5kZXhPZihwcm9kdWN0Q2hlY2tlZCwgMCk7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuY2FydFByb2R1Y3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgTFMucmVtb3ZlSXRlbSgnbXljYXJ0cHJvZHVjdHMnKTtcclxuXHJcbiAgICAgIExTLnNldEl0ZW0oJ215Y2FydHByb2R1Y3RzJyx0aGlzLmNhcnRQcm9kdWN0cyk7XHJcblxyXG4gICAgICAgICAgLy90aGlzLmdldFRvdGFsV2VpZ2h0KCk7XHJcbiAgICAgIFxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgIFxyXG5cclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG4gICAgc3RhcnRCYWNrZ3JvdW5kQW5pbWF0aW9uKGJhY2tncm91bmQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY2FsZTogeyB4OiAxLjAsIHk6IDEuMCB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMDBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIG9ucXR5Y2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLHByb2R1Y3RDaGVja2VkOlByb2R1Y3RDYXJ0KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkICAke2FyZ3Mub2xkSW5kZXh9IHRvICR7YXJncy5uZXdJbmRleH0uIE5ldyB2YWx1ZSBpcyBcIiR7dGhpcy5zZXNzaW9uaXRlbXMuZ2V0VmFsdWUoXHJcbiAgICAgICAgLy8gICAgIGFyZ3MubmV3SW5kZXgpfVwiYCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgSUQgXCIgKyBhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICAvL3RoaXMuc2VsZWN0ZWRDb29wZXJhdGl2ZSA9IHRoaXMucHJvZHVjdENoZWNrZWQucXR5TGlzdC5nZXRWYWx1ZShhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIElkIFZhbHVlICBcIiArIHByb2R1Y3RDaGVja2VkLnF0eUxpc3QuZ2V0VmFsdWUoYXJncy5uZXdJbmRleCkpO1xyXG4gICAgICAgIGxldCBuZXdxdHkgPSArcHJvZHVjdENoZWNrZWQucXR5TGlzdC5nZXRWYWx1ZShhcmdzLm5ld0luZGV4KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvZHVjdCBvZiB0aGlzLmNhcnRQcm9kdWN0cykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0KTsgLy8gMSwgXCJzdHJpbmdcIiwgZmFsc2VcclxuXHJcbiAgICAgICAgICAgIGlmKHByb2R1Y3RDaGVja2VkLl9pZCA9PSBwcm9kdWN0Ll9pZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdC5xdHkgPSBuZXdxdHk7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LmFtb3VudCA9IHByb2R1Y3QucHJpY2UgKiBuZXdxdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgdGhpcy5nZXRUb3RhbFdlaWdodCgpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFRvdGFsV2VpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gMDtcclxuICAgICAgICB2YXIgc2VsZWN0ZWRDb3VudCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FydFByb2R1Y3RzICE9IG51bGwgJiYgdGhpcy5jYXJ0UHJvZHVjdHMubGVuZ3RoID4gMCkgeyAgICAgIFxyXG4gICAgICAgICAgdGhpcy5jYXJ0UHJvZHVjdHMuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICBpZih4LmlzU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdG90YWwgKz0geC5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvdGFsU2VsZWN0ZWRBbW91bnQgPSB0b3RhbDtcclxuICAgICAgICB0aGlzLnRvdGFsU2VsZWN0ZWRJdGVtID0gc2VsZWN0ZWRDb3VudDtcclxuICAgICAgICAvLyBpZih0aGlzLmNhcnRQcm9kdWN0cy5sZW5ndGggPT0gc2VsZWN0ZWRDb3VudCApXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzU2VsZWN0QWxsID0gdHJ1ZTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc1NlbGVjdEFsbCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgTFMucmVtb3ZlSXRlbSgnbXljYXJ0cHJvZHVjdHMnKTtcclxuXHJcbiAgICAgICAgTFMuc2V0SXRlbSgnbXljYXJ0cHJvZHVjdHMnLHRoaXMuY2FydFByb2R1Y3RzKTtcclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICAgIH0gIFxyXG5cclxuXHJcbiAgICBwdWJsaWMgb25jb29wZXJhdGl2ZWNoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZCAgJHthcmdzLm9sZEluZGV4fSB0byAke2FyZ3MubmV3SW5kZXh9LiBOZXcgdmFsdWUgaXMgXCIke3RoaXMuc2Vzc2lvbml0ZW1zLmdldFZhbHVlKFxyXG4gICAgICAgIC8vICAgICBhcmdzLm5ld0luZGV4KX1cImApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIElEIFwiICsgYXJncy5uZXdJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvb3BlcmF0aXZlID0gdGhpcy5jb29wZXJhdGl2ZUxpc3QuZ2V0VmFsdWUoYXJncy5uZXdJbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBJZCBWYWx1ZSAgXCIgKyB0aGlzLnNlbGVjdGVkQ29vcGVyYXRpdmUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29wZXJhdGl2ZSgpIHtcclxuICAgICAgICB0aGlzLmNvb3BlcmF0aXZlU2VydmljZS5nZXRBbGxDb29wZXJhdGl2ZSgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvb3BlcmF0aXZlIExpc3QgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhW1wiZGF0YVwiXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29vcGVyYXRpdmUgPSBkYXRhW1wiZGF0YVwiXTtcclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5nZXRBbGxDb29wZXJhdGl2ZXNBc3NpZ25lZCh0aGlzLmNvb3BlcklkKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29wZXJhdGl2ZVN0YWZmKHN0YWZmSWQ6IFN0cmluZywgY29vcGVyYXRpdmVJZDogU3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFmZiBhbmQgQ29vcGVyYXRpdmVJZCBcIiArIHN0YWZmSWQgKyBcIiAtIFwiICsgY29vcGVyYXRpdmVJZCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmNvb3BlcmF0aXZlU3RhZmZTZXJ2aWNlLmdldENvb3BlcmF0aXZlU3RhZmYoc3RhZmZJZCwgY29vcGVyYXRpdmVJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcGVyYXRpdmUgU3RhZmYgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhW1wiZGF0YVwiXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29vcGVyYXRpdmVTdGFmZiA9IGRhdGFbXCJkYXRhXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmVyaWZ5aW5nIFN0YWZmIG91dCBzaWRlIFwiICsgdGhpcy5jb29wZXJhdGl2ZVN0YWZmLnN0YWZmSWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kVmVyaWZ5QXV0aCh0aGlzLmNvb3BlcmF0aXZlU3RhZmYpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRBbGxDb29wZXJhdGl2ZXNBc3NpZ25lZChjb29wZXJJZDogU3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFmZiBhbmQgQ29vcGVyYXRpdmVJZCBcIiArIGNvb3BlcklkICk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmNvb3BlckNvb3BlcmF0aXZlU2VydmljZS5nZXRBbGxDb29wZXJhdGl2ZXNDb29wZXIoY29vcGVySWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2lnbmVkIENvb3BlcmF0aXZlIFwiICsgZGF0YVtcImRhdGFcIl0pO1xyXG5cclxuICAgICAgICAgICAgICAgdGhpcy5hc3NpZ25lZGNvb3BlcmF0aXZlcyA9IGRhdGFbXCJkYXRhXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHRoaXMuY29vcGVyYXRpdmVMaXN0ID0gbmV3IFZhbHVlTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgIC8vICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgdGhpcy5jb29wZXJhdGl2ZS5sZW5ndGg7IGxvb3ArKykge1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgdGhpcy5jb29wZXJhdGl2ZS5sZW5ndGg7IGxvb3ArKykge1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzaWduZWRjb29wZXJhdGl2ZXMuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jb29wZXJhdGl2ZVtsb29wXS5jb29wZXJhdGl2ZUlkID09IGVsZW1lbnQuY29vcGVyYXRpdmVJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb29wZXJhdGl2ZUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgJHt0aGlzLmNvb3BlcmF0aXZlW2xvb3BdLmNvb3BlcmF0aXZlSWR9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYCR7dGhpcy5jb29wZXJhdGl2ZVtsb29wXS5maXJzdF9uYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hc3NpZ25lZGNvb3BlcmF0aXZlcy5sZW5ndGggPT0gMSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb29wZXJhdGl2ZSA9IHRoaXMuYXNzaWduZWRjb29wZXJhdGl2ZXNbMF0uY29vcGVyYXRpdmVJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhZmZJZCA9IHRoaXMuYXNzaWduZWRjb29wZXJhdGl2ZXNbMF0uc3RhZmZJZDtcclxuICAgICAgICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0Vycm9yKFwiRXJyb3IhXCIsIGVyci5lcnJvci5tZXNzYWdlLCBcIk9rXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZW5kVmVyaWZ5QXV0aCh2ZXJpZnlBdXRoOiBDb29wZXJhdGl2ZVN0YWZmKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJWZXJpZnkgXCIgKyB2ZXJpZnlBdXRoLnN0YWZmSWQpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jb29wZXJhdGl2ZVN0YWZmU2VydmljZS52ZXJpZnlBdXRoVG9DcmVhdExhdGVyKHZlcmlmeUF1dGgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZlcnkgQXV0aCBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHBheSgpe1xyXG5cclxuICAgICAgICBpZih0aGlzLnNlbGVjdGVkQ29vcGVyYXRpdmUgPT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0Vycm9yKFwiRXJyb3IhXCIsIFwiUGxlYXNlIFNlbGVjdCBhIENvb3BlcmF0aXZlIHRvIGNvbnRpbnVlXCIsIFwiT2tcIik7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRyYW5zYWN0aW9uIFBJTlwiLFxyXG4gICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcclxuICAgICAgICAgICAgaW5wdXRUeXBlOiBpbnB1dFR5cGUucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJDb25maXJtXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwcm9tcHQob3B0aW9ucykudGhlbigocmVzdWx0OiBQcm9tcHRSZXN1bHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG8sIFwiICsgcmVzdWx0LnRleHQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVc2VyUEluKHRoaXMudXNlcklkLHJlc3VsdC50ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgSWQgVmFsdWUgIFwiICsgdGhpcy5zZWxlY3RlZENvb3BlcmF0aXZlKTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBkaXNwbGF5UHJvbXB0RGlhbG9nKCkge1xyXG4gICAgICAgIC8vID4+IHByb21wdC1kaWFsb2ctY29kZVxyXG4gICAgICAgXHJcbiAgICAgICAgLy8gPDwgcHJvbXB0LWRpYWxvZy1jb2RlXHJcbiAgICB9XHJcblxyXG4gICAgcmVkdWNlUHJvZHVjdChwcm9kdWN0SWQ6IFN0cmluZyxxdWFudGl0eSA6IFN0cmluZywgYmF0Y2hObzogU3RyaW5nLGNvb3BlcklkOlN0cmluZyxjb29wZXJhdGl2ZUlkOlN0cmluZyxzdGFmZklkOiBTdHJpbmcsdHJhbnNBbW91bnQ6IFN0cmluZyApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlZlcmlmeSBcIiArIHByb2R1Y3RJZCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmRlZHVjdFByb2R1Y3QocHJvZHVjdElkLHF1YW50aXR5LGJhdGNoTm8sY29vcGVySWQsY29vcGVyYXRpdmVJZCxzdGFmZklkLHRyYW5zQW1vdW50KS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm9kdWN0IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YVtcImRhdGFcIl0pKTtcclxuXHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0Vycm9yKFwiRXJyb3IhXCIsIGVyci5lcnJvci5tZXNzYWdlLCBcIk9rXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICByZWR1Y2VTdGFmZkFjY291bnQoY29vcGVyYXRpdmVJZDogU3RyaW5nLHN0YWZmSWQgOiBTdHJpbmcsIGFtb3VudDogU3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb29wZXJhdGl2ZSBJZCBcIiArIGNvb3BlcmF0aXZlSWQpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jb29wZXJhdGl2ZVN0YWZmQWNjb3VudFNlcnZpY2UuZGVkdWN0Q29vcGVyYXRpdmVBY2NvdW50KGNvb3BlcmF0aXZlSWQsc3RhZmZJZCxhbW91bnQsXCJTYXZpbmdzXCIpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN0YWZmIEFjY291bnQgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhW1wiZGF0YVwiXSkpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvL0dlbmVyYXRlIEJhdGNoIE5vXHJcbiAgICAgICAgICAgICAgICBsZXQgYmF0Y2hObyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJ0UHJvZHVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZVByb2R1Y3QoZWxlbWVudC5faWQsZWxlbWVudC5xdHkudG9TdHJpbmcoKSxiYXRjaE5vLnRvU3RyaW5nKCksdGhpcy5jb29wZXJJZCx0aGlzLnNlbGVjdGVkQ29vcGVyYXRpdmUsdGhpcy5zdGFmZklkLGVsZW1lbnQuYW1vdW50LnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGVtcHR5IENhcnQgXHJcblxyXG4gICAgICAgICAgICAgICAgTFMucmVtb3ZlSXRlbSgnbXljYXJ0cHJvZHVjdHMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgdGhpcy5jYXJ0UHJvZHVjdHMgPSBbXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd1N1Y2Nlc3MoXCJTdWNjZXNzIVwiLCBcIiBZb3VyIHRyYW5zYWN0aW9uIHdhcyBzdWNjZXNzZnVsXCIsIFwiT2tcIilcclxuICAgICAgICAgICAgICAgICAudGhlbiggKCkgPT4geyAvKiB1c2VyIHByZXNzZWQgdGhlIGJ1dHRvbiAqL1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byBIb21lXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93RXJyb3IoXCJFcnJvciFcIiwgZXJyLmVycm9yLm1lc3NhZ2UsIFwiT2tcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjaGVja1VzZXJQSW4odXNlcklkOiBTdHJpbmcsIHBpbjogU3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJWZXJpZnkgXCIgKyB1c2VySWQpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5jaGVja1RyYW5zUGluKHVzZXJJZCxwaW4pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgRm91bmQgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhW1wiZGF0YVwiXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRDb29wZXJhdGl2ZSA9PSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0Vycm9yKFwiRXJyb3IhXCIsIFwiUGxlYXNlIFNlbGVjdCBhIENvb3BlcmF0aXZlIHRvIGNvbnRpbnVlXCIsIFwiT2tcIik7XHJcbiAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlU3RhZmZBY2NvdW50KHRoaXMuc2VsZWN0ZWRDb29wZXJhdGl2ZSx0aGlzLnN0YWZmSWQsdGhpcy50b3RhbFNlbGVjdGVkQW1vdW50LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICBcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgXHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93RXJyb3IoXCJFcnJvciFcIiwgZXJyLmVycm9yLm1lc3NhZ2UsIFwiT2tcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG59Il19
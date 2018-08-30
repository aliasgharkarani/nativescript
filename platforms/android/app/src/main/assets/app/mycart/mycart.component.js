"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var nativescript_bottombar_1 = require("nativescript-bottombar");
var nativescript_drop_down_1 = require("nativescript-drop-down");
var cooperative_service_1 = require("../../services/cooperative.service");
var cooperativeStaff_service_1 = require("../../services/cooperativeStaff.service");
var LS = require("nativescript-localstorage");
var config_1 = require("../../shared/config");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var MyCartComponent = /** @class */ (function () {
    function MyCartComponent(location, cooperativeService, cooperativeStaffService, formBuilder) {
        this.location = location;
        this.cooperativeService = cooperativeService;
        this.cooperativeStaffService = cooperativeStaffService;
        this.formBuilder = formBuilder;
        this.productImageUrl = config_1.Config.productImageURL;
        this.cooperative = [];
        this.hint = " 1";
        this.cssClass = "default";
        this.cartProducts = [];
        this.cartSelectedProducts = [];
        this.totalSelectedAmount = 0;
        this.totalSelectedItem = 0;
        this.isSelectAll = false;
        this.accentColor = "rgb(254, 204, 22)";
        this.notification = "You can access your personal offer, updates and price drop here";
        this.itemsMenu = [
            new nativescript_bottombar_1.BottomBarItem(0, "Cart", "ic_home_black_24dp", "#9A9999")
        ];
    }
    MyCartComponent.prototype.ngAfterViewInit = function () {
        this.getCooperative();
    };
    MyCartComponent.prototype.ngOnInit = function () {
        if (LS.getItem('mycartproducts')) {
            this.cartProducts = [];
            var mycartproducts = LS.getItem('mycartproducts');
            this.cartProducts = mycartproducts;
        }
        this.formGroup = this.formBuilder.group({
            testCheck: [
                {
                    value: true,
                    disabled: false
                },
                [forms_1.Validators.required]
            ]
        });
    };
    MyCartComponent.prototype.tabLoaded = function (event) {
        this._bar = event.object;
        this.hidden = false;
        this.titleState = 0 /* SHOW_WHEN_ACTIVE */;
        this.inactiveColor = "white";
        this.accentColor = "rgb(254, 204, 22)";
    };
    MyCartComponent.prototype.tabSelected = function (args) {
        // only triggered when a different tab is tapped
        console.log(args.newIndex);
        if (args.newIndex == 3) {
            //this.router.navigate(["/account"]);
        }
    };
    MyCartComponent.prototype.toggleCheck = function () {
        this.FirstCheckBox.nativeElement.toggle();
    };
    MyCartComponent.prototype.getCheckProp = function () {
        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
    };
    MyCartComponent.prototype.register = function () {
        // if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
        //     ApplicationSettings.setString("account", JSON.stringify(this.input));
        //     this.location.back();
        // } else {
        //     (new SnackBar()).simple("All Fields Required!");
        // }
        console.log("Reaching Register ");
        this.getCooperativeStaff(this.staffId, this.selectedCooperative);
    };
    MyCartComponent.prototype.onNavBtnTap = function () {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    };
    MyCartComponent.prototype.productChecked = function (checkedProduct, event) {
        console.log("Checked Product " + checkedProduct);
        console.log("Event " + event.checked);
    };
    MyCartComponent.prototype.productcheckedChange = function (modelRef, productChecked) {
        //console.log("checkedChange: ", modelRef.checked);
        //console.log("Product Checked : ", JSON.stringify(productChecked));
        if (modelRef.checked) {
            for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                // console.log(product); // 1, "string", false
                if (productChecked._id == product._id) {
                    product.isSelected = true;
                }
            }
            //console.log("Product Checked : ", JSON.stringify(productChecked));
            //this.cartSelectedProducts.push(productChecked);
            //console.log("Items Selected: ", this.cartSelectedProducts);
        }
        else {
            //this.cartSelectedProducts.reduce(productChecked);
            // var index = this.cartSelectedProducts.indexOf(productChecked, 0);
            // if (index > -1) {
            //     this.cartSelectedProducts.splice(index, 1);
            // }
            //console.log("Items Selected remove: ", this.cartSelectedProducts);
            for (var _b = 0, _c = this.cartProducts; _b < _c.length; _b++) {
                var product = _c[_b];
                // console.log(product); // 1, "string", false
                if (productChecked._id == product._id) {
                    product.isSelected = false;
                }
            }
        }
        this.getTotalWeight();
    };
    MyCartComponent.prototype.removefromCart = function (productChecked) {
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
            _this.getTotalWeight();
        });
    };
    MyCartComponent.prototype.productcheckedAllChange = function (modelRef) {
        console.log("Selected All " + modelRef);
        if (modelRef.checked) {
            for (var _i = 0, _a = this.cartProducts; _i < _a.length; _i++) {
                var product = _a[_i];
                // console.log(product); // 1, "string", false
                product.isSelected = true;
            }
        }
        else {
            // for (let product of this.cartProducts) {
            //     // console.log(product); // 1, "string", false
            //     product.isSelected = false;
            //  }
        }
        this.getTotalWeight();
    };
    MyCartComponent.prototype.goBack = function () {
        this.location.back();
    };
    MyCartComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    MyCartComponent.prototype.oncooperativechange = function (args) {
        // console.log(`Drop Down selected index changed  ${args.oldIndex} to ${args.newIndex}. New value is "${this.sessionitems.getValue(
        //     args.newIndex)}"`);
        console.log("Selected ID " + args.newIndex);
        this.selectedCooperative = this.cooperativeList.getValue(args.newIndex);
        console.log("Selected Id Value  " + this.selectedCooperative);
    };
    MyCartComponent.prototype.onqtychange = function (args, productChecked) {
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
    MyCartComponent.prototype.getCooperative = function () {
        var _this = this;
        this.cooperativeService.getAllCooperative().subscribe(function (data) {
            console.log("Cooperative List " + JSON.stringify(data["data"]));
            _this.cooperative = data["data"];
            _this.cooperativeList = new nativescript_drop_down_1.ValueList();
            for (var loop = 0; loop < _this.cooperative.length; loop++) {
                _this.cooperativeList.push({
                    value: "" + _this.cooperative[loop].cooperativeId,
                    display: "" + _this.cooperative[loop].first_name,
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    MyCartComponent.prototype.getCooperativeStaff = function (staffId, cooperativeId) {
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
    MyCartComponent.prototype.sendVerifyAuth = function (verifyAuth) {
        console.log("Verify " + verifyAuth.staffId);
        this.cooperativeStaffService.verifyAuthToCreatLater(verifyAuth).subscribe(function (data) {
            console.log("Very Auth " + JSON.stringify(data["data"]));
        }, function (err) {
            console.log(err);
        });
    };
    MyCartComponent.prototype.getTotalWeight = function () {
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
        if (this.cartProducts.length == selectedCount) {
            this.isSelectAll = true;
        }
        else {
            this.isSelectAll = false;
        }
        LS.removeItem('mycartproducts');
        LS.setItem('mycartproducts', this.cartProducts);
        return total;
    };
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], MyCartComponent.prototype, "FirstCheckBox", void 0);
    MyCartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-mycart",
            templateUrl: "./mycart.component.html",
            styleUrls: ["./mycart-common.css", "./mycart.component.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [common_1.Location, cooperative_service_1.CooperativeService, cooperativeStaff_service_1.CooperativeStaffService,
            forms_1.FormBuilder])
    ], MyCartComponent);
    return MyCartComponent;
}());
exports.MyCartComponent = MyCartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXljYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15Y2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0g7QUFDaEgsd0NBQW9FO0FBQ3BFLDBDQUEyQztBQVczQyxpRUFBNkY7QUFJN0YsaUVBQTZEO0FBRzdELDBFQUF3RTtBQUN4RSxvRkFBa0Y7QUFHbEYsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFFLDJCQUEyQixDQUFFLENBQUM7QUFDaEQsOENBQTZDO0FBRTdDLG1FQUF3RDtBQVl4RDtJQXVDSSx5QkFBMkIsUUFBa0IsRUFBVSxrQkFBc0MsRUFBVSx1QkFBZ0QsRUFDM0ksV0FBd0I7UUFEVCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUFVLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDM0ksZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUF2Q3BDLG9CQUFlLEdBQVksZUFBTSxDQUFDLGVBQWUsQ0FBQztRQUtsRCxnQkFBVyxHQUF1QixFQUFFLENBQUM7UUFDckMsU0FBSSxHQUFXLElBQUksQ0FBQztRQUViLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFHcEMsaUJBQVksR0FBdUIsRUFBRSxDQUFDO1FBQ3RDLHlCQUFvQixHQUFlLEVBQUUsQ0FBQztRQUN0Qyx3QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFDaEMsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRzlCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBS3RCLGdCQUFXLEdBQVcsbUJBQW1CLENBQUM7UUFLaEQsaUJBQVksR0FBVyxpRUFBaUUsQ0FBQztRQUlsRixjQUFTLEdBQXlCO1lBQ3RDLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsQ0FBQztTQUVoRSxDQUFDO0lBT0YsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDSSxJQUFJLENB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksVmlld0NoaWxkICxFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XHJcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0ICogYXMgdGV4dFZpZXdNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC12aWV3XCI7XHJcblxyXG5pbXBvcnQgeyBCb3R0b21CYXIsIEJvdHRvbUJhckl0ZW0sIFRJVExFX1NUQVRFLCBOb3RpZmljYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtYm90dG9tYmFyJztcclxuICBcclxuXHJcblxyXG5pbXBvcnQgeyBWYWx1ZUxpc3QsIERyb3BEb3duIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBDb29wZXJhdGl2ZSB9IGZyb20gJy4uLy4uL21vZGVscy9pbmRleCc7XHJcbmltcG9ydCB7IENvb3BlcmF0aXZlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb29wZXJhdGl2ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvb3BlcmF0aXZlU3RhZmZTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Nvb3BlcmF0aXZlU3RhZmYuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgQ29vcGVyYXRpdmVTdGFmZiwgVmVyaWZ5QXV0aCxQcm9kdWN0LFByb2R1Y3RDYXJ0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbmRleFwiO1xyXG5sZXQgTFMgPSByZXF1aXJlKCBcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIiApO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHsgVE5TRmFuY3lBbGVydCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmFuY3lhbGVydFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibnMtbXljYXJ0XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL215Y2FydC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL215Y2FydC1jb21tb24uY3NzXCIsIFwiLi9teWNhcnQuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNeUNhcnRDb21wb25lbnQge1xyXG4gICAgcHJvZHVjdEltYWdlVXJsOiBzdHJpbmcgID0gQ29uZmlnLnByb2R1Y3RJbWFnZVVSTDtcclxuICAgIHB1YmxpYyBpbnB1dDogYW55O1xyXG4gICAgc2VsZWN0ZWRDb29wZXJhdGl2ZUluZGV4OiBudW1iZXI7XHJcbiAgICBzZWxlY3RlZENvb3BlcmF0aXZlOiBzdHJpbmc7XHJcbiAgICBzdGFmZklkOiBTdHJpbmc7XHJcbiAgICBjb29wZXJhdGl2ZTogQXJyYXk8Q29vcGVyYXRpdmU+ID0gW107XHJcbiAgICBoaW50OiBzdHJpbmcgPSBcIiAxXCI7XHJcbiAgICBwdWJsaWMgY29vcGVyYXRpdmVMaXN0OiBWYWx1ZUxpc3Q8c3RyaW5nPjtcclxuICAgIHB1YmxpYyBjc3NDbGFzczogc3RyaW5nID0gXCJkZWZhdWx0XCI7XHJcbiAgICBjb29wZXJhdGl2ZVN0YWZmOiBDb29wZXJhdGl2ZVN0YWZmO1xyXG4gICAgdmVyaWZ5QXV0aDogVmVyaWZ5QXV0aDtcclxuICAgIGNhcnRQcm9kdWN0czogQXJyYXk8UHJvZHVjdENhcnQ+ID0gW107XHJcbiAgICBjYXJ0U2VsZWN0ZWRQcm9kdWN0czogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgdG90YWxTZWxlY3RlZEFtb3VudDogbnVtYmVyID0gMDtcclxuICAgIHRvdGFsU2VsZWN0ZWRJdGVtOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGhpZGRlbjogYm9vbGVhbjtcclxuXHJcbiAgICBpc1NlbGVjdEFsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyB0aXRsZVN0YXRlOiBUSVRMRV9TVEFURTtcclxuICAgIHB1YmxpYyBfYmFyOiBCb3R0b21CYXI7XHJcbiAgICBwdWJsaWMgaW5hY3RpdmVDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGFjY2VudENvbG9yOiBzdHJpbmcgPSBcInJnYigyNTQsIDIwNCwgMjIpXCI7XHJcblxyXG4gICAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgY2hlY2tUZXN0OiBib29sZWFuO1xyXG5cclxuICAgICBub3RpZmljYXRpb246IFN0cmluZyA9IFwiWW91IGNhbiBhY2Nlc3MgeW91ciBwZXJzb25hbCBvZmZlciwgdXBkYXRlcyBhbmQgcHJpY2UgZHJvcCBoZXJlXCI7XHJcblxyXG4gICAgIEBWaWV3Q2hpbGQoXCJDQjFcIikgRmlyc3RDaGVja0JveDogRWxlbWVudFJlZjtcclxuXHJcbiAgICAgcHVibGljIGl0ZW1zTWVudTogQXJyYXk8Qm90dG9tQmFySXRlbT4gPSBbXHJcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJDYXJ0XCIsIFwiaWNfaG9tZV9ibGFja18yNGRwXCIsIFwiIzlBOTk5OVwiKVxyXG4gICAgICBcclxuICAgIF07XHJcblxyXG5cclxuICAgICBcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSBjb29wZXJhdGl2ZVNlcnZpY2U6IENvb3BlcmF0aXZlU2VydmljZSwgcHJpdmF0ZSBjb29wZXJhdGl2ZVN0YWZmU2VydmljZTogQ29vcGVyYXRpdmVTdGFmZlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0Q29vcGVyYXRpdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYoTFMuZ2V0SXRlbSgnbXljYXJ0cHJvZHVjdHMnKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydFByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgIHZhciBteWNhcnRwcm9kdWN0cyA9IExTLmdldEl0ZW0oJ215Y2FydHByb2R1Y3RzJyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydFByb2R1Y3RzID0gbXljYXJ0cHJvZHVjdHM7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcclxuICAgICAgICAgICAgdGVzdENoZWNrOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJMb2FkZWQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9iYXIgPSA8Qm90dG9tQmFyPmV2ZW50Lm9iamVjdDtcclxuICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGl0bGVTdGF0ZSA9IFRJVExFX1NUQVRFLlNIT1dfV0hFTl9BQ1RJVkU7XHJcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRoaXMuYWNjZW50Q29sb3IgPSBcInJnYigyNTQsIDIwNCwgMjIpXCI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICB0YWJTZWxlY3RlZChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgICAvLyBvbmx5IHRyaWdnZXJlZCB3aGVuIGEgZGlmZmVyZW50IHRhYiBpcyB0YXBwZWRcclxuICAgICAgICAgY29uc29sZS5sb2coYXJncy5uZXdJbmRleCk7XHJcblxyXG4gICAgICAgICBpZihhcmdzLm5ld0luZGV4ID09IDMpXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWNjb3VudFwiXSk7XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbiAgICBwdWJsaWMgdG9nZ2xlQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5GaXJzdENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQudG9nZ2xlKCk7XHJcbiAgICB9XHJcbiBcclxuICAgIHB1YmxpYyBnZXRDaGVja1Byb3AoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrZWQgcHJvcCB2YWx1ZSA9ICcgKyB0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZWdpc3RlcigpIHtcclxuICAgICAgICAvLyBpZih0aGlzLmlucHV0LmZpcnN0bmFtZSAmJiB0aGlzLmlucHV0Lmxhc3RuYW1lICYmIHRoaXMuaW5wdXQuZW1haWwgJiYgdGhpcy5pbnB1dC5wYXNzd29yZCkge1xyXG4gICAgICAgIC8vICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjY291bnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pbnB1dCkpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAobmV3IFNuYWNrQmFyKCkpLnNpbXBsZShcIkFsbCBGaWVsZHMgUmVxdWlyZWQhXCIpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWFjaGluZyBSZWdpc3RlciBcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0Q29vcGVyYXRpdmVTdGFmZih0aGlzLnN0YWZmSWQsIHRoaXMuc2VsZWN0ZWRDb29wZXJhdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25OYXZCdG5UYXAoKSB7XHJcbiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgYmUgY2FsbGVkIG9ubHkgaW4gQW5kcm9pZC5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpb24gYnV0dG9uIHRhcHBlZCFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvZHVjdENoZWNrZWQoY2hlY2tlZFByb2R1Y3Q6IFByb2R1Y3QsZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGVja2VkIFByb2R1Y3QgXCIrIGNoZWNrZWRQcm9kdWN0KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFdmVudCBcIisgZXZlbnQuY2hlY2tlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByb2R1Y3RjaGVja2VkQ2hhbmdlKG1vZGVsUmVmLHByb2R1Y3RDaGVja2VkOlByb2R1Y3RDYXJ0KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNoZWNrZWRDaGFuZ2U6IFwiLCBtb2RlbFJlZi5jaGVja2VkKTtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIlByb2R1Y3QgQ2hlY2tlZCA6IFwiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0Q2hlY2tlZCkpO1xyXG5cclxuICAgICAgIGlmKG1vZGVsUmVmLmNoZWNrZWQpXHJcbiAgICAgICB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHByb2R1Y3Qgb2YgdGhpcy5jYXJ0UHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjdCk7IC8vIDEsIFwic3RyaW5nXCIsIGZhbHNlXHJcblxyXG4gICAgICAgICAgICBpZihwcm9kdWN0Q2hlY2tlZC5faWQgPT0gcHJvZHVjdC5faWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJQcm9kdWN0IENoZWNrZWQgOiBcIiwgSlNPTi5zdHJpbmdpZnkocHJvZHVjdENoZWNrZWQpKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAvL3RoaXMuY2FydFNlbGVjdGVkUHJvZHVjdHMucHVzaChwcm9kdWN0Q2hlY2tlZCk7XHJcblxyXG4gICAgICAgICAgIC8vY29uc29sZS5sb2coXCJJdGVtcyBTZWxlY3RlZDogXCIsIHRoaXMuY2FydFNlbGVjdGVkUHJvZHVjdHMpO1xyXG4gICAgICAgfWVsc2V7XHJcbiAgICAgICAgLy90aGlzLmNhcnRTZWxlY3RlZFByb2R1Y3RzLnJlZHVjZShwcm9kdWN0Q2hlY2tlZCk7XHJcblxyXG4gICAgICAgIC8vIHZhciBpbmRleCA9IHRoaXMuY2FydFNlbGVjdGVkUHJvZHVjdHMuaW5kZXhPZihwcm9kdWN0Q2hlY2tlZCwgMCk7XHJcbiAgICAgICAgLy8gaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYXJ0U2VsZWN0ZWRQcm9kdWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkl0ZW1zIFNlbGVjdGVkIHJlbW92ZTogXCIsIHRoaXMuY2FydFNlbGVjdGVkUHJvZHVjdHMpO1xyXG4gICAgICAgIGZvciAobGV0IHByb2R1Y3Qgb2YgdGhpcy5jYXJ0UHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjdCk7IC8vIDEsIFwic3RyaW5nXCIsIGZhbHNlXHJcblxyXG4gICAgICAgICAgICBpZihwcm9kdWN0Q2hlY2tlZC5faWQgPT0gcHJvZHVjdC5faWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QuaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgfVxyXG5cclxuICAgICAgIFxyXG4gICAgICB0aGlzLmdldFRvdGFsV2VpZ2h0KCk7XHJcbiAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVtb3ZlZnJvbUNhcnQoIHByb2R1Y3RDaGVja2VkOlByb2R1Y3RDYXJ0KVxyXG4gICAgICB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIFByb2R1Y3QgRGVsZXRlIFwiICsgcHJvZHVjdENoZWNrZWQgKTtcclxuICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dXYXJuaW5nKFwiV2FybmluZyFcIiwgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT9cIiwgXCJPa1wiKSAudGhlbiggKCkgPT4geyAvKiB1c2VyIHByZXNzZWQgdGhlIGJ1dHRvbiAqL1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGUgYXBwcm92ZWQgXCIrIHByb2R1Y3RDaGVja2VkKVxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNhcnRQcm9kdWN0cy5pbmRleE9mKHByb2R1Y3RDaGVja2VkLCAwKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FydFByb2R1Y3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExTLnJlbW92ZUl0ZW0oJ215Y2FydHByb2R1Y3RzJyk7XHJcblxyXG4gICAgICAgIExTLnNldEl0ZW0oJ215Y2FydHByb2R1Y3RzJyx0aGlzLmNhcnRQcm9kdWN0cyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldFRvdGFsV2VpZ2h0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgIFxyXG5cclxuICAgICAgIFxyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgcHJvZHVjdGNoZWNrZWRBbGxDaGFuZ2UobW9kZWxSZWYpe1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIEFsbCBcIiArIG1vZGVsUmVmKTtcclxuICAgICAgICAgaWYobW9kZWxSZWYuY2hlY2tlZClcclxuICAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgcHJvZHVjdCBvZiB0aGlzLmNhcnRQcm9kdWN0cykge1xyXG4gICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0KTsgLy8gMSwgXCJzdHJpbmdcIiwgZmFsc2VcclxuICAgICAgICAgICAgICAgcHJvZHVjdC5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9ZWxzZVxyXG4gICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IHByb2R1Y3Qgb2YgdGhpcy5jYXJ0UHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3QpOyAvLyAxLCBcInN0cmluZ1wiLCBmYWxzZVxyXG4gICAgICAgICAgICAvLyAgICAgcHJvZHVjdC5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5nZXRUb3RhbFdlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICB9XHJcbiAgICBzdGFydEJhY2tncm91bmRBbmltYXRpb24oYmFja2dyb3VuZCkge1xyXG4gICAgICAgIGJhY2tncm91bmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjYWxlOiB7IHg6IDEuMCwgeTogMS4wIH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbmNvb3BlcmF0aXZlY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkICAke2FyZ3Mub2xkSW5kZXh9IHRvICR7YXJncy5uZXdJbmRleH0uIE5ldyB2YWx1ZSBpcyBcIiR7dGhpcy5zZXNzaW9uaXRlbXMuZ2V0VmFsdWUoXHJcbiAgICAgICAgLy8gICAgIGFyZ3MubmV3SW5kZXgpfVwiYCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgSUQgXCIgKyBhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29vcGVyYXRpdmUgPSB0aGlzLmNvb3BlcmF0aXZlTGlzdC5nZXRWYWx1ZShhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIElkIFZhbHVlICBcIiArIHRoaXMuc2VsZWN0ZWRDb29wZXJhdGl2ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgb25xdHljaGFuZ2UoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEscHJvZHVjdENoZWNrZWQ6UHJvZHVjdENhcnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgRHJvcCBEb3duIHNlbGVjdGVkIGluZGV4IGNoYW5nZWQgICR7YXJncy5vbGRJbmRleH0gdG8gJHthcmdzLm5ld0luZGV4fS4gTmV3IHZhbHVlIGlzIFwiJHt0aGlzLnNlc3Npb25pdGVtcy5nZXRWYWx1ZShcclxuICAgICAgICAvLyAgICAgYXJncy5uZXdJbmRleCl9XCJgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBJRCBcIiArIGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgICAgIC8vdGhpcy5zZWxlY3RlZENvb3BlcmF0aXZlID0gdGhpcy5wcm9kdWN0Q2hlY2tlZC5xdHlMaXN0LmdldFZhbHVlKGFyZ3MubmV3SW5kZXgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgSWQgVmFsdWUgIFwiICsgcHJvZHVjdENoZWNrZWQucXR5TGlzdC5nZXRWYWx1ZShhcmdzLm5ld0luZGV4KSk7XHJcbiAgICAgICAgbGV0IG5ld3F0eSA9ICtwcm9kdWN0Q2hlY2tlZC5xdHlMaXN0LmdldFZhbHVlKGFyZ3MubmV3SW5kZXgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9kdWN0IG9mIHRoaXMuY2FydFByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2R1Y3QpOyAvLyAxLCBcInN0cmluZ1wiLCBmYWxzZVxyXG5cclxuICAgICAgICAgICAgaWYocHJvZHVjdENoZWNrZWQuX2lkID09IHByb2R1Y3QuX2lkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnF0eSA9IG5ld3F0eTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QuYW1vdW50ID0gcHJvZHVjdC5wcmljZSAqIG5ld3F0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB0aGlzLmdldFRvdGFsV2VpZ2h0KCk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgZ2V0Q29vcGVyYXRpdmUoKSB7XHJcbiAgICAgICAgdGhpcy5jb29wZXJhdGl2ZVNlcnZpY2UuZ2V0QWxsQ29vcGVyYXRpdmUoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb29wZXJhdGl2ZSBMaXN0IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YVtcImRhdGFcIl0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3BlcmF0aXZlID0gZGF0YVtcImRhdGFcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb29wZXJhdGl2ZUxpc3QgPSBuZXcgVmFsdWVMaXN0PHN0cmluZz4oKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgdGhpcy5jb29wZXJhdGl2ZS5sZW5ndGg7IGxvb3ArKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29vcGVyYXRpdmVMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYCR7dGhpcy5jb29wZXJhdGl2ZVtsb29wXS5jb29wZXJhdGl2ZUlkfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGAke3RoaXMuY29vcGVyYXRpdmVbbG9vcF0uZmlyc3RfbmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvb3BlcmF0aXZlU3RhZmYoc3RhZmZJZDogU3RyaW5nLCBjb29wZXJhdGl2ZUlkOiBTdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlN0YWZmIGFuZCBDb29wZXJhdGl2ZUlkIFwiICsgc3RhZmZJZCArIFwiIC0gXCIgKyBjb29wZXJhdGl2ZUlkKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY29vcGVyYXRpdmVTdGFmZlNlcnZpY2UuZ2V0Q29vcGVyYXRpdmVTdGFmZihzdGFmZklkLCBjb29wZXJhdGl2ZUlkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb29wZXJhdGl2ZSBTdGFmZiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb29wZXJhdGl2ZVN0YWZmID0gZGF0YVtcImRhdGFcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWZXJpZnlpbmcgU3RhZmYgb3V0IHNpZGUgXCIgKyB0aGlzLmNvb3BlcmF0aXZlU3RhZmYuc3RhZmZJZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRWZXJpZnlBdXRoKHRoaXMuY29vcGVyYXRpdmVTdGFmZik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFZlcmlmeUF1dGgodmVyaWZ5QXV0aDogQ29vcGVyYXRpdmVTdGFmZikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVmVyaWZ5IFwiICsgdmVyaWZ5QXV0aC5zdGFmZklkKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY29vcGVyYXRpdmVTdGFmZlNlcnZpY2UudmVyaWZ5QXV0aFRvQ3JlYXRMYXRlcih2ZXJpZnlBdXRoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWZXJ5IEF1dGggXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhW1wiZGF0YVwiXSkpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvdGFsV2VpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gMDtcclxuICAgICAgICB2YXIgc2VsZWN0ZWRDb3VudCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FydFByb2R1Y3RzICE9IG51bGwgJiYgdGhpcy5jYXJ0UHJvZHVjdHMubGVuZ3RoID4gMCkgeyAgICAgIFxyXG4gICAgICAgICAgdGhpcy5jYXJ0UHJvZHVjdHMuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICBpZih4LmlzU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdG90YWwgKz0geC5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvdGFsU2VsZWN0ZWRBbW91bnQgPSB0b3RhbDtcclxuICAgICAgICB0aGlzLnRvdGFsU2VsZWN0ZWRJdGVtID0gc2VsZWN0ZWRDb3VudDtcclxuICAgICAgICBpZih0aGlzLmNhcnRQcm9kdWN0cy5sZW5ndGggPT0gc2VsZWN0ZWRDb3VudCApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2VsZWN0QWxsID0gdHJ1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5pc1NlbGVjdEFsbCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTFMucmVtb3ZlSXRlbSgnbXljYXJ0cHJvZHVjdHMnKTtcclxuXHJcbiAgICAgICAgTFMuc2V0SXRlbSgnbXljYXJ0cHJvZHVjdHMnLHRoaXMuY2FydFByb2R1Y3RzKTtcclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICAgIH0gIFxyXG5cclxuXHJcbiAgICBcclxuXHJcbn0iXX0=
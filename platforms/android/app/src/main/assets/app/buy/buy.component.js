"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var nativescript_drop_down_1 = require("nativescript-drop-down");
var cooperative_service_1 = require("../../services/cooperative.service");
var cooperativeStaff_service_1 = require("../../services/cooperativeStaff.service");
var product_service_1 = require("../../services/product.service");
var config_1 = require("../../shared/config");
var LS = require("nativescript-localstorage");
var BuyComponent = /** @class */ (function () {
    function BuyComponent(location, cooperativeService, cooperativeStaffService, productService, router, activatedRoute) {
        this.location = location;
        this.cooperativeService = cooperativeService;
        this.cooperativeStaffService = cooperativeStaffService;
        this.productService = productService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.productImageUrl = config_1.Config.productImageURL;
        this.cooperative = [];
        this.hint = " 1";
        this.cssClass = "default";
        this.cartProducts = [];
        this.notification = "You can access your personal offer, updates and price drop here";
        this.images = [];
    }
    BuyComponent.prototype.ngOnInit = function () {
        this.productId = this.activatedRoute.snapshot.params["id"];
        var dataObject = JSON.parse(LS.getItem('currentUser'));
        if (dataObject._id) {
            this.userId = dataObject._id;
            this.cooperId = dataObject.cooperId;
        }
        this.getProductById(this.productId, this.userId);
    };
    BuyComponent.prototype.register = function () {
        // if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
        //     ApplicationSettings.setString("account", JSON.stringify(this.input));
        //     this.location.back();
        // } else {
        //     (new SnackBar()).simple("All Fields Required!");
        // }
        console.log("Reaching Register ");
        this.getCooperativeStaff(this.staffId, this.selectedCooperative);
    };
    BuyComponent.prototype.onNavBtnTap = function () {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    };
    BuyComponent.prototype.goBack = function () {
        this.location.back();
    };
    BuyComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    BuyComponent.prototype.addToCart = function () {
        // let buttons = [
        //     new TNSFancyAlertButton({ label: 'Continue Shopping', action: () => { console.log('One'); } }),
        //     new TNSFancyAlertButton({ label: 'Proceed to Checkout', action: () => { console.log('Two'); } })
        var _this = this;
        //   ];
        if (LS.getItem('mycartproducts')) {
            this.cartProducts = [];
            var mycartproducts2 = LS.getItem('mycartproducts');
            console.log("Product Id " + this.product._id);
            var mycartproducts = mycartproducts2;
            console.log("Cart Count " + mycartproducts.length);
            var mainlength = mycartproducts.length;
            var itemExist_1 = false;
            mycartproducts.forEach(function (element) {
                var newProduct = element;
                if (_this.product == element) {
                    element.qty += 1;
                    element.amount = element.price * element.qty;
                    element.isSelected = false;
                    element.selectedQtyIndex = newProduct.qty - 1;
                    itemExist_1 = true;
                }
            });
            if (!itemExist_1) {
                this.product.qty = 1;
                console.log("Qty When New " + this.product.qty);
                //console.log("New Qty " + this.product.qty);
                this.product.isSelected = false;
                this.product.amount = this.product.price;
                this.product.selectedQtyIndex = this.product.qty - 1;
                this.product.qtyList = new nativescript_drop_down_1.ValueList();
                for (var loop = 0; loop < this.product.quantity; loop++) {
                    if (loop > 0) {
                        this.product.qtyList.push({
                            value: loop.toString(),
                            display: loop.toString(),
                        });
                    }
                }
                mycartproducts.push(this.product);
            }
            this.cartProducts = mycartproducts;
            LS.removeItem('mycartproducts');
            LS.setItem('mycartproducts', this.cartProducts);
            //  console.log("Qty Array " + this.product.qtyList);
            //  TNSFancyAlert.showSuccess("Success!", this.product.productName + " was successfully added", "Ok")
            //  .then( () => { /* user pressed the button */
            // });
            var dialogs = require("ui/dialogs");
            dialogs.confirm({
                title: "Success",
                message: " \"A new Item has been added to your shopping cart. You now have " + this.cartProducts.length + " item(s) in your shopping cart\"",
                okButtonText: "Proceed to Checkout",
                cancelButtonText: "Continue Shopping"
            }).then(function (result) {
                // result argument is boolean
                console.log("Dialog result: " + result);
                if (result) {
                    //Go to Cart
                    this.router.navigate(["/mycart"]);
                }
                else {
                    // Continuing Shopping
                    this.router.navigate(["/shop"]);
                }
            });
        }
        else {
            console.log("Cart is empty");
            this.product.qty = 1;
            this.product.isSelected = false;
            this.product.amount = this.product.price;
            this.product.selectedQtyIndex = this.product.qty - 1;
            this.product.qtyList = new nativescript_drop_down_1.ValueList();
            for (var loop = 0; loop < this.product.quantity; loop++) {
                if (loop > 0) {
                    this.product.qtyList.push({
                        value: loop.toString(),
                        display: loop.toString(),
                    });
                }
            }
            // console.log("Qty Array when empty " + JSON.stringify(this.product.qtyList));
            this.cartProducts.push(this.product);
            LS.setItem('mycartproducts', this.cartProducts);
            //  TNSFancyAlert.showSuccess("Success!", this.product.productName + " was successfully added", "Ok")
            //  .then( () => { /* user pressed the button */
            // });
            var dialogs = require("ui/dialogs");
            dialogs.confirm({
                title: "Success",
                message: "\"A new Item has been added to your shopping cart. You now have " + this.cartProducts.length + " item(s) in your shopping cart\"",
                okButtonText: "Proceed to Checkout",
                cancelButtonText: "Continue Shopping"
            }).then(function (result) {
                // result argument is boolean
                console.log("Dialog result: " + result);
                if (result) {
                    //Go to Cart
                    this.router.navigate(["/mycart"]);
                }
                else {
                    // Continuing Shopping
                    this.router.navigate(["/shop"]);
                }
            });
            //     TNSFancyAlert.showSuccess("Success!", this.product.productName + " was successfully added", "Ok")
            //     .then( () => { /* user pressed the button */
            //    });
            //  TNSFancyAlert.showCustomButtons(buttons, undefined, undefined, 'Success!', `A new item has been added to your shopping cart. You now have 1 item(s) in your shopping cart`, 'Ok');
        }
        //
    };
    BuyComponent.prototype.findIndexToUpdate = function (newItem) {
        return newItem.id === this;
    };
    BuyComponent.prototype.oncooperativechange = function (args) {
        // console.log(`Drop Down selected index changed  ${args.oldIndex} to ${args.newIndex}. New value is "${this.sessionitems.getValue(
        //     args.newIndex)}"`);
        console.log("Selected ID " + args.newIndex);
        this.selectedCooperative = this.cooperativeList.getValue(args.newIndex);
        console.log("Selected Id Value  " + this.selectedCooperative);
    };
    BuyComponent.prototype.getCooperative = function () {
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
    BuyComponent.prototype.getCooperativeStaff = function (staffId, cooperativeId) {
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
    BuyComponent.prototype.sendVerifyAuth = function (verifyAuth) {
        console.log("Verify " + verifyAuth.staffId);
        this.cooperativeStaffService.verifyAuthToCreatLater(verifyAuth).subscribe(function (data) {
            console.log("Very Auth " + JSON.stringify(data["data"]));
        }, function (err) {
            console.log(err);
        });
    };
    BuyComponent.prototype.getProductById = function (productId, userId) {
        var _this = this;
        console.log("Product Id Buy" + productId);
        this.product = null;
        this.productService.getproduct(productId, userId).subscribe(function (data) {
            // console.log("Single Product " + JSON.stringify(data["data"]));
            _this.product = data["data"];
        }, function (err) {
            console.log(err);
        });
    };
    BuyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-buy",
            templateUrl: "./buy.component.html",
            styleUrls: ["./buy-common.css", "./buy.component.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [common_1.Location, cooperative_service_1.CooperativeService, cooperativeStaff_service_1.CooperativeStaffService,
            product_service_1.ProductService, router_1.Router, router_1.ActivatedRoute])
    ], BuyComponent);
    return BuyComponent;
}());
exports.BuyComponent = BuyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1eS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkY7QUFDM0YsMENBQXlEO0FBQ3pELDBDQUEyQztBQWEzQyxpRUFBNkQ7QUFHN0QsMEVBQXdFO0FBQ3hFLG9GQUFrRjtBQUNsRixrRUFBZ0U7QUFLaEUsOENBQTZDO0FBQzdDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBY2hEO0lBeUJJLHNCQUEyQixRQUFrQixFQUFVLGtCQUFzQyxFQUFVLHVCQUFnRCxFQUMvSSxjQUE2QixFQUFVLE1BQWMsRUFBVSxjQUE4QjtRQUQxRSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUFVLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDL0ksbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBekJyRyxvQkFBZSxHQUFZLGVBQU0sQ0FBQyxlQUFlLENBQUM7UUFLbEQsZ0JBQVcsR0FBdUIsRUFBRSxDQUFDO1FBQ3JDLFNBQUksR0FBVyxJQUFJLENBQUM7UUFFYixhQUFRLEdBQVcsU0FBUyxDQUFDO1FBUXBDLGlCQUFZLEdBQXVCLEVBQUUsQ0FBQztRQUVyQyxpQkFBWSxHQUFXLGlFQUFpRSxDQUFDO1FBQ25GLFdBQU0sR0FBZSxFQUFFLENBQUM7SUFXL0IsQ0FBQztJQUlNLCtCQUFRLEdBQWY7UUFFSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztR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bEQsQ0FBQzt5Q0E0QnVDLGlCQUFRLEVBQThCLHdDQUFrQixFQUFtQyxrREFBdUI7WUFDaEksZ0NBQWMsRUFBa0IsZUFBTSxFQUEwQix1QkFBYztPQTFCNUYsWUFBWSxDQWtZeEI7SUFBRCxtQkFBQztDQUFBLEFBbFlELElBa1lDO0FBbFlZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgY29ubmVjdGlvblR5cGUsIGdldENvbm5lY3Rpb25UeXBlIH0gZnJvbSBcImNvbm5lY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IHByb21wdCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgKiBhcyB0ZXh0Vmlld01vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIjtcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgVmFsdWVMaXN0LCBEcm9wRG93biB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd25cIjtcclxuaW1wb3J0IHsgQ29vcGVyYXRpdmUgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb29wZXJhdGl2ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29vcGVyYXRpdmUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb29wZXJhdGl2ZVN0YWZmU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb29wZXJhdGl2ZVN0YWZmLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJvZHVjdC5zZXJ2aWNlXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgQ29vcGVyYXRpdmVTdGFmZiwgVmVyaWZ5QXV0aCwgUHJvZHVjdCxQcm9kdWN0Q2FydCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvaW5kZXhcIjtcclxuXHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlnXCI7XHJcbmxldCBMUyA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XHJcblxyXG5pbXBvcnQgeyBUTlNGYW5jeUFsZXJ0LCBUTlNGYW5jeUFsZXJ0QnV0dG9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mYW5jeWFsZXJ0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJucy1idXlcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYnV5LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vYnV5LWNvbW1vbi5jc3NcIiwgXCIuL2J1eS5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1eUNvbXBvbmVudCAge1xyXG4gICAgcHJvZHVjdEltYWdlVXJsOiBzdHJpbmcgID0gQ29uZmlnLnByb2R1Y3RJbWFnZVVSTDtcclxuICAgIHB1YmxpYyBpbnB1dDogYW55O1xyXG4gICAgc2VsZWN0ZWRDb29wZXJhdGl2ZUluZGV4OiBudW1iZXI7XHJcbiAgICBzZWxlY3RlZENvb3BlcmF0aXZlOiBzdHJpbmc7XHJcbiAgICBzdGFmZklkOiBTdHJpbmc7XHJcbiAgICBjb29wZXJhdGl2ZTogQXJyYXk8Q29vcGVyYXRpdmU+ID0gW107XHJcbiAgICBoaW50OiBzdHJpbmcgPSBcIiAxXCI7XHJcbiAgICBwdWJsaWMgY29vcGVyYXRpdmVMaXN0OiBWYWx1ZUxpc3Q8c3RyaW5nPjtcclxuICAgIHB1YmxpYyBjc3NDbGFzczogc3RyaW5nID0gXCJkZWZhdWx0XCI7XHJcbiAgICBjb29wZXJhdGl2ZVN0YWZmOiBDb29wZXJhdGl2ZVN0YWZmO1xyXG4gICAgdmVyaWZ5QXV0aDogVmVyaWZ5QXV0aDtcclxuICAgIHByb2R1Y3RJZDogU3RyaW5nO1xyXG4gICAgcHJvZHVjdDogUHJvZHVjdENhcnQ7XHJcbiAgICB1c2VySWQ6IFN0cmluZztcclxuICAgIGNvb3BlcklkOiBTdHJpbmc7XHJcblxyXG4gICAgY2FydFByb2R1Y3RzOiBBcnJheTxQcm9kdWN0Q2FydD4gPSBbXTtcclxuXHJcbiAgICAgbm90aWZpY2F0aW9uOiBTdHJpbmcgPSBcIllvdSBjYW4gYWNjZXNzIHlvdXIgcGVyc29uYWwgb2ZmZXIsIHVwZGF0ZXMgYW5kIHByaWNlIGRyb3AgaGVyZVwiO1xyXG4gICAgcHVibGljIGltYWdlczogQXJyYXk8YW55PiA9IFtdO1xyXG4gICBcclxuXHJcblxyXG4gICAgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIGNvb3BlcmF0aXZlU2VydmljZTogQ29vcGVyYXRpdmVTZXJ2aWNlLCBwcml2YXRlIGNvb3BlcmF0aXZlU3RhZmZTZXJ2aWNlOiBDb29wZXJhdGl2ZVN0YWZmU2VydmljZSxcclxuICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6UHJvZHVjdFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgIFxyXG5cclxuICAgICAgIFxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gIFxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9kdWN0SWQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xyXG5cclxuICAgICAgICB2YXIgZGF0YU9iamVjdCA9IEpTT04ucGFyc2UoTFMuZ2V0SXRlbSgnY3VycmVudFVzZXInKSk7XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgaWYoZGF0YU9iamVjdC5faWQpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGhpcy51c2VySWQgPSBkYXRhT2JqZWN0Ll9pZDtcclxuICAgICAgICAgICAgICB0aGlzLmNvb3BlcklkID0gZGF0YU9iamVjdC5jb29wZXJJZDtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdEJ5SWQodGhpcy5wcm9kdWN0SWQsdGhpcy51c2VySWQpO1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyByZWdpc3RlcigpIHtcclxuICAgICAgICAvLyBpZih0aGlzLmlucHV0LmZpcnN0bmFtZSAmJiB0aGlzLmlucHV0Lmxhc3RuYW1lICYmIHRoaXMuaW5wdXQuZW1haWwgJiYgdGhpcy5pbnB1dC5wYXNzd29yZCkge1xyXG4gICAgICAgIC8vICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcImFjY291bnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5pbnB1dCkpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAobmV3IFNuYWNrQmFyKCkpLnNpbXBsZShcIkFsbCBGaWVsZHMgUmVxdWlyZWQhXCIpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWFjaGluZyBSZWdpc3RlciBcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0Q29vcGVyYXRpdmVTdGFmZih0aGlzLnN0YWZmSWQsIHRoaXMuc2VsZWN0ZWRDb29wZXJhdGl2ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBvbk5hdkJ0blRhcCgpIHtcclxuICAgICAgICAvLyBUaGlzIGNvZGUgd2lsbCBiZSBjYWxsZWQgb25seSBpbiBBbmRyb2lkLlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmF2aWdhdGlvbiBidXR0b24gdGFwcGVkIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG4gICAgc3RhcnRCYWNrZ3JvdW5kQW5pbWF0aW9uKGJhY2tncm91bmQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY2FsZTogeyB4OiAxLjAsIHk6IDEuMCB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMDBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0NhcnQoKXtcclxuXHJcbiAgICAgICAgLy8gbGV0IGJ1dHRvbnMgPSBbXHJcbiAgICAgICAgLy8gICAgIG5ldyBUTlNGYW5jeUFsZXJ0QnV0dG9uKHsgbGFiZWw6ICdDb250aW51ZSBTaG9wcGluZycsIGFjdGlvbjogKCkgPT4geyBjb25zb2xlLmxvZygnT25lJyk7IH0gfSksXHJcbiAgICAgICAgLy8gICAgIG5ldyBUTlNGYW5jeUFsZXJ0QnV0dG9uKHsgbGFiZWw6ICdQcm9jZWVkIHRvIENoZWNrb3V0JywgYWN0aW9uOiAoKSA9PiB7IGNvbnNvbGUubG9nKCdUd28nKTsgfSB9KVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgXTtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgaWYoTFMuZ2V0SXRlbSgnbXljYXJ0cHJvZHVjdHMnKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydFByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgIHZhciBteWNhcnRwcm9kdWN0czIgPSBMUy5nZXRJdGVtKCdteWNhcnRwcm9kdWN0cycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgSWQgXCIgKyB0aGlzLnByb2R1Y3QuX2lkKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBteWNhcnRwcm9kdWN0czogQXJyYXk8UHJvZHVjdENhcnQ+ID0gbXljYXJ0cHJvZHVjdHMyO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhcnQgQ291bnQgXCIrIG15Y2FydHByb2R1Y3RzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWFpbmxlbmd0aCA9IG15Y2FydHByb2R1Y3RzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtRXhpc3QgOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgbXljYXJ0cHJvZHVjdHMuZm9yRWFjaCggKGVsZW1lbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3UHJvZHVjdCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb2R1Y3QgPT0gZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucXR5ICs9ICAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFtb3VudCA9IGVsZW1lbnQucHJpY2UgKiBlbGVtZW50LnF0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0ZWRRdHlJbmRleCA9IG5ld1Byb2R1Y3QucXR5IC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUV4aXN0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZighaXRlbUV4aXN0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QucXR5ID0gMTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXR5IFdoZW4gTmV3IFwiICsgdGhpcy5wcm9kdWN0LnF0eSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTmV3IFF0eSBcIiArIHRoaXMucHJvZHVjdC5xdHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0LmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdC5hbW91bnQgPSAgdGhpcy5wcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0LnNlbGVjdGVkUXR5SW5kZXggPSB0aGlzLnByb2R1Y3QucXR5IC0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QucXR5TGlzdCA9IG5ldyBWYWx1ZUxpc3Q8c3RyaW5nPigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBsb29wID0gMDsgbG9vcCA8IHRoaXMucHJvZHVjdC5xdWFudGl0eTsgbG9vcCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZihsb29wID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0LnF0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGxvb3AudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBsb29wLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbXljYXJ0cHJvZHVjdHMucHVzaCh0aGlzLnByb2R1Y3QpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNhcnRQcm9kdWN0cyA9IG15Y2FydHByb2R1Y3RzO1xyXG4gICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIExTLnJlbW92ZUl0ZW0oJ215Y2FydHByb2R1Y3RzJyk7XHJcblxyXG4gICAgICAgICAgICBMUy5zZXRJdGVtKCdteWNhcnRwcm9kdWN0cycsdGhpcy5jYXJ0UHJvZHVjdHMpO1xyXG5cclxuICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIlF0eSBBcnJheSBcIiArIHRoaXMucHJvZHVjdC5xdHlMaXN0KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vICBUTlNGYW5jeUFsZXJ0LnNob3dTdWNjZXNzKFwiU3VjY2VzcyFcIiwgdGhpcy5wcm9kdWN0LnByb2R1Y3ROYW1lICsgXCIgd2FzIHN1Y2Nlc3NmdWxseSBhZGRlZFwiLCBcIk9rXCIpXHJcbiAgICAgICAgICAgICAgICAvLyAgLnRoZW4oICgpID0+IHsgLyogdXNlciBwcmVzc2VkIHRoZSBidXR0b24gKi9cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOmAgXCJBIG5ldyBJdGVtIGhhcyBiZWVuIGFkZGVkIHRvIHlvdXIgc2hvcHBpbmcgY2FydC4gWW91IG5vdyBoYXZlICR7dGhpcy5jYXJ0UHJvZHVjdHMubGVuZ3RofSBpdGVtKHMpIGluIHlvdXIgc2hvcHBpbmcgY2FydFwiYCxcclxuICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiUHJvY2VlZCB0byBDaGVja291dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ29udGludWUgU2hvcHBpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9HbyB0byBDYXJ0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbXljYXJ0XCJdKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWluZyBTaG9wcGluZ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Nob3BcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYXJ0IGlzIGVtcHR5XCIpO1xyXG4gICAgICAgICAgICAgIHRoaXMucHJvZHVjdC5xdHkgPSAxO1xyXG4gICAgICAgICAgICAgIHRoaXMucHJvZHVjdC5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0LmFtb3VudCA9ICB0aGlzLnByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0LnNlbGVjdGVkUXR5SW5kZXggPSB0aGlzLnByb2R1Y3QucXR5IC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdC5xdHlMaXN0ID0gbmV3IFZhbHVlTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCB0aGlzLnByb2R1Y3QucXVhbnRpdHk7IGxvb3ArKykge1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGlmKGxvb3AgPiAwKVxyXG4gICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0LnF0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbG9vcC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbG9vcC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUXR5IEFycmF5IHdoZW4gZW1wdHkgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnByb2R1Y3QucXR5TGlzdCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FydFByb2R1Y3RzLnB1c2godGhpcy5wcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgTFMuc2V0SXRlbSgnbXljYXJ0cHJvZHVjdHMnLCB0aGlzLmNhcnRQcm9kdWN0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIFROU0ZhbmN5QWxlcnQuc2hvd1N1Y2Nlc3MoXCJTdWNjZXNzIVwiLCB0aGlzLnByb2R1Y3QucHJvZHVjdE5hbWUgKyBcIiB3YXMgc3VjY2Vzc2Z1bGx5IGFkZGVkXCIsIFwiT2tcIilcclxuICAgICAgICAgICAgICAgIC8vICAudGhlbiggKCkgPT4geyAvKiB1c2VyIHByZXNzZWQgdGhlIGJ1dHRvbiAqL1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBcIkEgbmV3IEl0ZW0gaGFzIGJlZW4gYWRkZWQgdG8geW91ciBzaG9wcGluZyBjYXJ0LiBZb3Ugbm93IGhhdmUgJHt0aGlzLmNhcnRQcm9kdWN0cy5sZW5ndGh9IGl0ZW0ocykgaW4geW91ciBzaG9wcGluZyBjYXJ0XCJgLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJQcm9jZWVkIHRvIENoZWNrb3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDb250aW51ZSBTaG9wcGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHQpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0dvIHRvIENhcnRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9teWNhcnRcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51aW5nIFNob3BwaW5nXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2hvcFwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcyhcIlN1Y2Nlc3MhXCIsIHRoaXMucHJvZHVjdC5wcm9kdWN0TmFtZSArIFwiIHdhcyBzdWNjZXNzZnVsbHkgYWRkZWRcIiwgXCJPa1wiKVxyXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4oICgpID0+IHsgLyogdXNlciBwcmVzc2VkIHRoZSBidXR0b24gKi9cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIC8vICBUTlNGYW5jeUFsZXJ0LnNob3dDdXN0b21CdXR0b25zKGJ1dHRvbnMsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnU3VjY2VzcyEnLCBgQSBuZXcgaXRlbSBoYXMgYmVlbiBhZGRlZCB0byB5b3VyIHNob3BwaW5nIGNhcnQuIFlvdSBub3cgaGF2ZSAxIGl0ZW0ocykgaW4geW91ciBzaG9wcGluZyBjYXJ0YCwgJ09rJyk7XHJcbiAgXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAvL1xyXG5cclxuXHJcblxyXG4gICAgICBcclxuICAgIFxyXG4gICBcclxuICAgICAgICBcclxuICAgIFxyXG5cclxufVxyXG5cclxuICAgIGZpbmRJbmRleFRvVXBkYXRlKG5ld0l0ZW0pIHsgXHJcbiAgICAgICAgcmV0dXJuIG5ld0l0ZW0uaWQgPT09IHRoaXM7XHJcbiAgfVxyXG5cclxuICAgIHB1YmxpYyBvbmNvb3BlcmF0aXZlY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkICAke2FyZ3Mub2xkSW5kZXh9IHRvICR7YXJncy5uZXdJbmRleH0uIE5ldyB2YWx1ZSBpcyBcIiR7dGhpcy5zZXNzaW9uaXRlbXMuZ2V0VmFsdWUoXHJcbiAgICAgICAgLy8gICAgIGFyZ3MubmV3SW5kZXgpfVwiYCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgSUQgXCIgKyBhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29vcGVyYXRpdmUgPSB0aGlzLmNvb3BlcmF0aXZlTGlzdC5nZXRWYWx1ZShhcmdzLm5ld0luZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIElkIFZhbHVlICBcIiArIHRoaXMuc2VsZWN0ZWRDb29wZXJhdGl2ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldENvb3BlcmF0aXZlKCkge1xyXG4gICAgICAgIHRoaXMuY29vcGVyYXRpdmVTZXJ2aWNlLmdldEFsbENvb3BlcmF0aXZlKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcGVyYXRpdmUgTGlzdCBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb29wZXJhdGl2ZSA9IGRhdGFbXCJkYXRhXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29vcGVyYXRpdmVMaXN0ID0gbmV3IFZhbHVlTGlzdDxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBsb29wID0gMDsgbG9vcCA8IHRoaXMuY29vcGVyYXRpdmUubGVuZ3RoOyBsb29wKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb3BlcmF0aXZlTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGAke3RoaXMuY29vcGVyYXRpdmVbbG9vcF0uY29vcGVyYXRpdmVJZH1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBgJHt0aGlzLmNvb3BlcmF0aXZlW2xvb3BdLmZpcnN0X25hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29wZXJhdGl2ZVN0YWZmKHN0YWZmSWQ6IFN0cmluZywgY29vcGVyYXRpdmVJZDogU3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFmZiBhbmQgQ29vcGVyYXRpdmVJZCBcIiArIHN0YWZmSWQgKyBcIiAtIFwiICsgY29vcGVyYXRpdmVJZCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmNvb3BlcmF0aXZlU3RhZmZTZXJ2aWNlLmdldENvb3BlcmF0aXZlU3RhZmYoc3RhZmZJZCwgY29vcGVyYXRpdmVJZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcGVyYXRpdmUgU3RhZmYgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhW1wiZGF0YVwiXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29vcGVyYXRpdmVTdGFmZiA9IGRhdGFbXCJkYXRhXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmVyaWZ5aW5nIFN0YWZmIG91dCBzaWRlIFwiICsgdGhpcy5jb29wZXJhdGl2ZVN0YWZmLnN0YWZmSWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kVmVyaWZ5QXV0aCh0aGlzLmNvb3BlcmF0aXZlU3RhZmYpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRWZXJpZnlBdXRoKHZlcmlmeUF1dGg6IENvb3BlcmF0aXZlU3RhZmYpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlZlcmlmeSBcIiArIHZlcmlmeUF1dGguc3RhZmZJZCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmNvb3BlcmF0aXZlU3RhZmZTZXJ2aWNlLnZlcmlmeUF1dGhUb0NyZWF0TGF0ZXIodmVyaWZ5QXV0aCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVmVyeSBBdXRoIFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YVtcImRhdGFcIl0pKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kdWN0QnlJZChwcm9kdWN0SWQ6IFN0cmluZywgdXNlcklkOiBTdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlByb2R1Y3QgSWQgQnV5XCIgKyBwcm9kdWN0SWQpO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0cHJvZHVjdChwcm9kdWN0SWQsdXNlcklkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJTaW5nbGUgUHJvZHVjdCBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGFbXCJkYXRhXCJdKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSBkYXRhW1wiZGF0YVwiXTtcclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59Il19
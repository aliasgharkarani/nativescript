"use strict";
// import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
// import { Page } from "ui/page";
// import { ActionItem } from "ui/action-bar";
// import { Observable } from "data/observable";
// import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
// // import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
// @Component({
//   moduleId: module.id,
//   selector: 'app-vendordashboard',
//   templateUrl: './vendordashboard.component.html',
//   styleUrls: ['./vendordashboard.component.scss']
// })
// export class VendordashboardComponent implements OnInit {
//   private _mainContentText: string;
//   expandedItemIndex: number;
Object.defineProperty(exports, "__esModule", { value: true });
//   data: {
//     coverUrl: string;
//     name: string;
//     date: string;
//     price: string;
//     orderId: number;
//   }[] = [
//       {
//         coverUrl: 'backarrow.png',
//         name: 'Nikon D3400 24.9MP - Black',
//         date: '15 March,2018',
//         price: 'N8,850.00',
//         orderId: 12345
//       },
//       {
//         coverUrl: 'forwardarrow.png',
//         name: 'Nikon D3400 24.9MP - Black',
//         date: '15 March,2018',
//         price: 'N8,850.00',
//         orderId: 12345
//       },
//       {
//         coverUrl: 'backarrow.png',
//         name: 'Nikon D3400 24.9MP - Black',
//         date: '15 March,2018',
//         price: 'N8,850.00',
//         orderId: 12345
//       },
//       {
//         coverUrl: 'backarrow.png',
//         name: 'Nikon D3400 24.9MP - Black',
//         date: '15 March,2018',
//         price: 'N8,850.00',
//         orderId: 12345
//       },
//       {
//         coverUrl: 'backarrow.png',
//         name: 'Nikon D3400 24.9MP - Black',
//         date: '15 March,2018',
//         price: 'N8,850.00',
//         orderId: 12345
//       },
//     ];
//   constructor(private _changeDetectionRef: ChangeDetectorRef) { }
//   expand(i: number) {
//     console.warn('this is a inde ===> ', i)
//     if (this.expandedItemIndex >= 0 && this.expandedItemIndex === i) {
//       this.expandedItemIndex = null;
//       return;
//     }
//     this.expandedItemIndex = i;
//   }
//   @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
//   private drawer;
//   ngAfterViewInit() {
//     this.drawer = this.drawerComponent.sideDrawer;
//     console.log(this.drawer);
//     this._changeDetectionRef.detectChanges();
//   }
//   ngOnInit() {
//     this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
//   }
//   get mainContentText() {
//     return this._mainContentText;
//   }
//   set mainContentText(value: string) {
//     this._mainContentText = value;
//   }
//   public openDrawer() {
//     // this.drawer.showDrawer();
//     console.log("jhjghjfhfjvnxcnvj");
//   }
//   public onCloseDrawerTap() {
//     // this.drawer.closeDrawer();
//   }
// }
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var VendordashboardComponent = /** @class */ (function () {
    function VendordashboardComponent(_changeDetectionRef, page) {
        this._changeDetectionRef = _changeDetectionRef;
        this.data = [
            {
                coverUrl: 'backarrow.png',
                name: 'Nikon D3400 24.9MP - Black',
                date: '15 March,2018',
                price: 'N8,850.00',
                orderId: 12345
            },
            {
                coverUrl: 'forwardarrow.png',
                name: 'Nikon D3400 24.9MP - Black',
                date: '15 March,2018',
                price: 'N8,850.00',
                orderId: 12345
            },
            {
                coverUrl: 'backarrow.png',
                name: 'Nikon D3400 24.9MP - Black',
                date: '15 March,2018',
                price: 'N8,850.00',
                orderId: 12345
            },
            {
                coverUrl: 'backarrow.png',
                name: 'Nikon D3400 24.9MP - Black',
                date: '15 March,2018',
                price: 'N8,850.00',
                orderId: 12345
            },
            {
                coverUrl: 'backarrow.png',
                name: 'Nikon D3400 24.9MP - Black',
                date: '15 March,2018',
                price: 'N8,850.00',
                orderId: 12345
            },
        ];
        page.actionBarHidden = true;
    }
    VendordashboardComponent.prototype.expand = function (i) {
        console.warn('this is a inde ===> ', i);
        if (this.expandedItemIndex >= 0 && this.expandedItemIndex === i) {
            this.expandedItemIndex = null;
            return;
        }
        this.expandedItemIndex = i;
    };
    VendordashboardComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    VendordashboardComponent.prototype.ngOnInit = function () {
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    };
    Object.defineProperty(VendordashboardComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    VendordashboardComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    VendordashboardComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], VendordashboardComponent.prototype, "drawerComponent", void 0);
    VendordashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-vendordashboard',
            templateUrl: './vendordashboard.component.html',
            styleUrls: ['./vendordashboard.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, page_1.Page])
    ], VendordashboardComponent);
    return VendordashboardComponent;
}());
exports.VendordashboardComponent = VendordashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvcmRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtHQUFrRztBQUNsRyxrQ0FBa0M7QUFDbEMsOENBQThDO0FBQzlDLGdEQUFnRDtBQUNoRCwrRkFBK0Y7QUFDL0YsaUVBQWlFO0FBQ2pFLGVBQWU7QUFDZix5QkFBeUI7QUFDekIscUNBQXFDO0FBQ3JDLHFEQUFxRDtBQUNyRCxvREFBb0Q7QUFDcEQsS0FBSztBQUNMLDREQUE0RDtBQUM1RCxzQ0FBc0M7QUFDdEMsK0JBQStCOztBQUUvQixZQUFZO0FBQ1osd0JBQXdCO0FBQ3hCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QixZQUFZO0FBQ1osVUFBVTtBQUNWLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFDOUMsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5Qix5QkFBeUI7QUFDekIsV0FBVztBQUNYLFVBQVU7QUFDVix3Q0FBd0M7QUFDeEMsOENBQThDO0FBQzlDLGlDQUFpQztBQUNqQyw4QkFBOEI7QUFDOUIseUJBQXlCO0FBQ3pCLFdBQVc7QUFDWCxVQUFVO0FBQ1YscUNBQXFDO0FBQ3JDLDhDQUE4QztBQUM5QyxpQ0FBaUM7QUFDakMsOEJBQThCO0FBQzlCLHlCQUF5QjtBQUN6QixXQUFXO0FBQ1gsVUFBVTtBQUNWLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFDOUMsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5Qix5QkFBeUI7QUFDekIsV0FBVztBQUNYLFVBQVU7QUFDVixxQ0FBcUM7QUFDckMsOENBQThDO0FBQzlDLGlDQUFpQztBQUNqQyw4QkFBOEI7QUFDOUIseUJBQXlCO0FBQ3pCLFdBQVc7QUFDWCxTQUFTO0FBRVQsb0VBQW9FO0FBQ3BFLHdCQUF3QjtBQUN4Qiw4Q0FBOEM7QUFDOUMseUVBQXlFO0FBQ3pF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LEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sbURBQWdCLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBMUJrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7cUVBQUM7SUEzRHpFLHdCQUF3QjtRQU5wQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztTQUNsRCxDQUFDO3lDQUsyQyx3QkFBaUIsRUFBUSxXQUFJO09BSjdELHdCQUF3QixDQXNGcEM7SUFBRCwrQkFBQztDQUFBLEFBdEZELElBc0ZDO0FBdEZZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vIGltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuLy8gaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XG4vLyBpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuLy8gaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuLy8gLy8gaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbi8vIEBDb21wb25lbnQoe1xuLy8gICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuLy8gICBzZWxlY3RvcjogJ2FwcC12ZW5kb3JkYXNoYm9hcmQnLFxuLy8gICB0ZW1wbGF0ZVVybDogJy4vdmVuZG9yZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbi8vICAgc3R5bGVVcmxzOiBbJy4vdmVuZG9yZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzJ11cbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgVmVuZG9yZGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbi8vICAgcHJpdmF0ZSBfbWFpbkNvbnRlbnRUZXh0OiBzdHJpbmc7XG4vLyAgIGV4cGFuZGVkSXRlbUluZGV4OiBudW1iZXI7XG5cbi8vICAgZGF0YToge1xuLy8gICAgIGNvdmVyVXJsOiBzdHJpbmc7XG4vLyAgICAgbmFtZTogc3RyaW5nO1xuLy8gICAgIGRhdGU6IHN0cmluZztcbi8vICAgICBwcmljZTogc3RyaW5nO1xuLy8gICAgIG9yZGVySWQ6IG51bWJlcjtcbi8vICAgfVtdID0gW1xuLy8gICAgICAge1xuLy8gICAgICAgICBjb3ZlclVybDogJ2JhY2thcnJvdy5wbmcnLFxuLy8gICAgICAgICBuYW1lOiAnTmlrb24gRDM0MDAgMjQuOU1QIC0gQmxhY2snLFxuLy8gICAgICAgICBkYXRlOiAnMTUgTWFyY2gsMjAxOCcsXG4vLyAgICAgICAgIHByaWNlOiAnTjgsODUwLjAwJyxcbi8vICAgICAgICAgb3JkZXJJZDogMTIzNDVcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIGNvdmVyVXJsOiAnZm9yd2FyZGFycm93LnBuZycsXG4vLyAgICAgICAgIG5hbWU6ICdOaWtvbiBEMzQwMCAyNC45TVAgLSBCbGFjaycsXG4vLyAgICAgICAgIGRhdGU6ICcxNSBNYXJjaCwyMDE4Jyxcbi8vICAgICAgICAgcHJpY2U6ICdOOCw4NTAuMDAnLFxuLy8gICAgICAgICBvcmRlcklkOiAxMjM0NVxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgY292ZXJVcmw6ICdiYWNrYXJyb3cucG5nJyxcbi8vICAgICAgICAgbmFtZTogJ05pa29uIEQzNDAwIDI0LjlNUCAtIEJsYWNrJyxcbi8vICAgICAgICAgZGF0ZTogJzE1IE1hcmNoLDIwMTgnLFxuLy8gICAgICAgICBwcmljZTogJ044LDg1MC4wMCcsXG4vLyAgICAgICAgIG9yZGVySWQ6IDEyMzQ1XG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICBjb3ZlclVybDogJ2JhY2thcnJvdy5wbmcnLFxuLy8gICAgICAgICBuYW1lOiAnTmlrb24gRDM0MDAgMjQuOU1QIC0gQmxhY2snLFxuLy8gICAgICAgICBkYXRlOiAnMTUgTWFyY2gsMjAxOCcsXG4vLyAgICAgICAgIHByaWNlOiAnTjgsODUwLjAwJyxcbi8vICAgICAgICAgb3JkZXJJZDogMTIzNDVcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIGNvdmVyVXJsOiAnYmFja2Fycm93LnBuZycsXG4vLyAgICAgICAgIG5hbWU6ICdOaWtvbiBEMzQwMCAyNC45TVAgLSBCbGFjaycsXG4vLyAgICAgICAgIGRhdGU6ICcxNSBNYXJjaCwyMDE4Jyxcbi8vICAgICAgICAgcHJpY2U6ICdOOCw4NTAuMDAnLFxuLy8gICAgICAgICBvcmRlcklkOiAxMjM0NVxuLy8gICAgICAgfSxcbi8vICAgICBdO1xuXG4vLyAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuLy8gICBleHBhbmQoaTogbnVtYmVyKSB7XG4vLyAgICAgY29uc29sZS53YXJuKCd0aGlzIGlzIGEgaW5kZSA9PT0+ICcsIGkpXG4vLyAgICAgaWYgKHRoaXMuZXhwYW5kZWRJdGVtSW5kZXggPj0gMCAmJiB0aGlzLmV4cGFuZGVkSXRlbUluZGV4ID09PSBpKSB7XG4vLyAgICAgICB0aGlzLmV4cGFuZGVkSXRlbUluZGV4ID0gbnVsbDtcbi8vICAgICAgIHJldHVybjtcbi8vICAgICB9XG4vLyAgICAgdGhpcy5leHBhbmRlZEl0ZW1JbmRleCA9IGk7XG4vLyAgIH1cbi8vICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuLy8gICBwcml2YXRlIGRyYXdlcjtcblxuLy8gICBuZ0FmdGVyVmlld0luaXQoKSB7XG4vLyAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZHJhd2VyKTtcbi8vICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuLy8gICB9XG5cbi8vICAgbmdPbkluaXQoKSB7XG4vLyAgICAgdGhpcy5tYWluQ29udGVudFRleHQgPSBcIlNpZGVEcmF3ZXIgZm9yIE5hdGl2ZVNjcmlwdCBjYW4gYmUgZWFzaWx5IHNldHVwIGluIHRoZSBIVE1MIGRlZmluaXRpb24gb2YgeW91ciBwYWdlIGJ5IGRlZmluaW5nIHRrRHJhd2VyQ29udGVudCBhbmQgdGtNYWluQ29udGVudC4gVGhlIGNvbXBvbmVudCBoYXMgYSBkZWZhdWx0IHRyYW5zaXRpb24gYW5kIHBvc2l0aW9uIGFuZCBhbHNvIGV4cG9zZXMgbm90aWZpY2F0aW9ucyByZWxhdGVkIHRvIGNoYW5nZXMgaW4gaXRzIHN0YXRlLiBTd2lwZSBmcm9tIGxlZnQgdG8gb3BlbiBzaWRlIGRyYXdlci5cIjtcbi8vICAgfVxuXG4vLyAgIGdldCBtYWluQ29udGVudFRleHQoKSB7XG4vLyAgICAgcmV0dXJuIHRoaXMuX21haW5Db250ZW50VGV4dDtcbi8vICAgfVxuXG4vLyAgIHNldCBtYWluQ29udGVudFRleHQodmFsdWU6IHN0cmluZykge1xuLy8gICAgIHRoaXMuX21haW5Db250ZW50VGV4dCA9IHZhbHVlO1xuLy8gICB9XG5cbi8vICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XG4vLyAgICAgLy8gdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiamhqZ2hqZmhmanZueGNudmpcIik7XG4vLyAgIH1cblxuLy8gICBwdWJsaWMgb25DbG9zZURyYXdlclRhcCgpIHtcbi8vICAgICAvLyB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuLy8gICB9XG4vLyB9XG5cblxuXG5cblxuXG5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLXZlbmRvcmRhc2hib2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZlbmRvcmRhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdmVuZG9yZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVmVuZG9yZGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgICBwcml2YXRlIF9tYWluQ29udGVudFRleHQ6IHN0cmluZztcbiAgICAgIGV4cGFuZGVkSXRlbUluZGV4OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwYWdlOiBQYWdlKSB7XG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgZXhwYW5kKGk6IG51bWJlcikge1xuICAgICAgICAgICAgIGNvbnNvbGUud2FybigndGhpcyBpcyBhIGluZGUgPT09PiAnLCBpKVxuICAgICAgICAgICAgIGlmICh0aGlzLmV4cGFuZGVkSXRlbUluZGV4ID49IDAgJiYgdGhpcy5leHBhbmRlZEl0ZW1JbmRleCA9PT0gaSkge1xuICAgICAgICAgICAgICAgdGhpcy5leHBhbmRlZEl0ZW1JbmRleCA9IG51bGw7XG4gICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLmV4cGFuZGVkSXRlbUluZGV4ID0gaTtcbiAgICB9XG4gICAgZGF0YToge1xuICAgICAgICBjb3ZlclVybDogc3RyaW5nO1xuICAgICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICAgIGRhdGU6IHN0cmluZztcbiAgICAgICAgcHJpY2U6IHN0cmluZztcbiAgICAgICAgb3JkZXJJZDogbnVtYmVyO1xuICAgIH1bXSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3ZlclVybDogJ2JhY2thcnJvdy5wbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdOaWtvbiBEMzQwMCAyNC45TVAgLSBCbGFjaycsXG4gICAgICAgICAgICAgICAgZGF0ZTogJzE1IE1hcmNoLDIwMTgnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnTjgsODUwLjAwJyxcbiAgICAgICAgICAgICAgICBvcmRlcklkOiAxMjM0NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3ZlclVybDogJ2ZvcndhcmRhcnJvdy5wbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdOaWtvbiBEMzQwMCAyNC45TVAgLSBCbGFjaycsXG4gICAgICAgICAgICAgICAgZGF0ZTogJzE1IE1hcmNoLDIwMTgnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnTjgsODUwLjAwJyxcbiAgICAgICAgICAgICAgICBvcmRlcklkOiAxMjM0NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3ZlclVybDogJ2JhY2thcnJvdy5wbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdOaWtvbiBEMzQwMCAyNC45TVAgLSBCbGFjaycsXG4gICAgICAgICAgICAgICAgZGF0ZTogJzE1IE1hcmNoLDIwMTgnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnTjgsODUwLjAwJyxcbiAgICAgICAgICAgICAgICBvcmRlcklkOiAxMjM0NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3ZlclVybDogJ2JhY2thcnJvdy5wbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdOaWtvbiBEMzQwMCAyNC45TVAgLSBCbGFjaycsXG4gICAgICAgICAgICAgICAgZGF0ZTogJzE1IE1hcmNoLDIwMTgnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnTjgsODUwLjAwJyxcbiAgICAgICAgICAgICAgICBvcmRlcklkOiAxMjM0NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb3ZlclVybDogJ2JhY2thcnJvdy5wbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdOaWtvbiBEMzQwMCAyNC45TVAgLSBCbGFjaycsXG4gICAgICAgICAgICAgICAgZGF0ZTogJzE1IE1hcmNoLDIwMTgnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnTjgsODUwLjAwJyxcbiAgICAgICAgICAgICAgICBvcmRlcklkOiAxMjM0NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm1haW5Db250ZW50VGV4dCA9IFwiU2lkZURyYXdlciBmb3IgTmF0aXZlU2NyaXB0IGNhbiBiZSBlYXNpbHkgc2V0dXAgaW4gdGhlIEhUTUwgZGVmaW5pdGlvbiBvZiB5b3VyIHBhZ2UgYnkgZGVmaW5pbmcgdGtEcmF3ZXJDb250ZW50IGFuZCB0a01haW5Db250ZW50LiBUaGUgY29tcG9uZW50IGhhcyBhIGRlZmF1bHQgdHJhbnNpdGlvbiBhbmQgcG9zaXRpb24gYW5kIGFsc28gZXhwb3NlcyBub3RpZmljYXRpb25zIHJlbGF0ZWQgdG8gY2hhbmdlcyBpbiBpdHMgc3RhdGUuIFN3aXBlIGZyb20gbGVmdCB0byBvcGVuIHNpZGUgZHJhd2VyLlwiO1xuICAgIH1cblxuICAgIGdldCBtYWluQ29udGVudFRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYWluQ29udGVudFRleHQ7XG4gICAgfVxuXG4gICAgc2V0IG1haW5Db250ZW50VGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX21haW5Db250ZW50VGV4dCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuRHJhd2VyKCkge1xuICAgICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxufSJdfQ==
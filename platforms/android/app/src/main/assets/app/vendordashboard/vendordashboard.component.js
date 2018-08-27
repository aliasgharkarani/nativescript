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
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var VendordashboardComponent = /** @class */ (function () {
    function VendordashboardComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
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
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], VendordashboardComponent);
    return VendordashboardComponent;
}());
exports.VendordashboardComponent = VendordashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvcmRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtHQUFrRztBQUNsRyxrQ0FBa0M7QUFDbEMsOENBQThDO0FBQzlDLGdEQUFnRDtBQUNoRCwrRkFBK0Y7QUFDL0YsaUVBQWlFO0FBQ2pFLGVBQWU7QUFDZix5QkFBeUI7QUFDekIscUNBQXFDO0FBQ3JDLHFEQUFxRDtBQUNyRCxvREFBb0Q7QUFDcEQsS0FBSztBQUNMLDREQUE0RDtBQUM1RCxzQ0FBc0M7QUFDdEMsK0JBQStCOztBQUUvQixZQUFZO0FBQ1osd0JBQXdCO0FBQ3hCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QixZQUFZO0FBQ1osVUFBVTtBQUNWLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFDOUMsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5Qix5QkFBeUI7QUFDekIsV0FBVztBQUNYLFVBQVU7QUFDVix3Q0FBd0M7QUFDeEMsOENBQThDO0FBQzlDLGlDQUFpQztBQUNqQyw4QkFBOEI7QUFDOUIseUJBQXlCO0FBQ3pCLFdBQVc7QUFDWCxVQUFVO0FBQ1YscUNBQXFDO0FBQ3JDLDhDQUE4QztBQUM5QyxpQ0FBaUM7QUFDakMsOEJBQThCO0FBQzlCLHlCQUF5QjtBQUN6QixXQUFXO0FBQ1gsVUFBVTtBQUNWLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFDOUMsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5Qix5QkFBeUI7QUFDekIsV0FBVztBQUNYLFVBQVU7QUFDVixxQ0FBcUM7QUFDckMsOENBQThDO0FBQzlDLGlDQUFpQztBQUNqQyw4QkFBOEI7QUFDOUIseUJBQXlCO0FBQ3pCLFdBQVc7QUFDWCxTQUFTO0FBRVQsb0VBQW9FO0FBQ3BFLHdCQUF3QjtBQUN4Qiw4Q0FBOEM7QUFDOUMseUVBQXlFO0FBQ3pFLHVDQUF1QztBQUN2QyxnQkFBZ0I7QUFDaEIsUUFBUTtBQUNSLGtDQUFrQztBQUNsQyxNQUFNO0FBQ04sdUZBQXVGO0FBQ3ZGLG9CQUFvQjtBQUVwQix3QkFBd0I7QUFDeEIscURBQXFEO0FBQ3JELGdDQUFnQztBQUNoQyxnREFBZ0Q7QUFDaEQsTUFBTTtBQUVOLGlCQUFpQjtBQUNqQiw0VEFBNFQ7QUFDNVQsTUFBTTtBQUVOLDRCQUE0QjtBQUM1QixvQ0FBb0M7QUFDcEMsTUFBTTtBQUVOLHlDQUF5QztBQUN6QyxxQ0FBcUM7QUFDckMsTUFBTTtBQUVOLDBCQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMsd0NBQXdDO0FBQ3hDLE1BQU07QUFFTixnQ0FBZ0M7QUFDaEMsb0NBQW9DO0FBQ3BDLE1BQU07QUFDTixJQUFJO0FBU0osc0NBQStGO0FBSS9GLDhEQUE0RjtBQVM1RjtJQUdJLGtDQUFvQixtQkFBc0M7UUFBdEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtJQUMxRCxDQUFDO0lBS0Qsa0RBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyw2UkFBNlIsQ0FBQztJQUN6VCxDQUFDO0lBRUQsc0JBQUkscURBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7YUFFRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BSkE7SUFNTSw2Q0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLG1EQUFnQixHQUF2QjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQTFCa0M7UUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FBeUIsZ0NBQXNCO3FFQUFDO0lBTnpFLHdCQUF3QjtRQU5wQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztTQUNoRCxDQUFDO3lDQUkyQyx3QkFBaUI7T0FIakQsd0JBQXdCLENBaUNwQztJQUFELCtCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuLy8gaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG4vLyBpbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcbi8vIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG4vLyBpbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG4vLyAvLyBpbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuLy8gQENvbXBvbmVudCh7XG4vLyAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4vLyAgIHNlbGVjdG9yOiAnYXBwLXZlbmRvcmRhc2hib2FyZCcsXG4vLyAgIHRlbXBsYXRlVXJsOiAnLi92ZW5kb3JkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuLy8gICBzdHlsZVVybHM6IFsnLi92ZW5kb3JkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MnXVxuLy8gfSlcbi8vIGV4cG9ydCBjbGFzcyBWZW5kb3JkYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuLy8gICBwcml2YXRlIF9tYWluQ29udGVudFRleHQ6IHN0cmluZztcbi8vICAgZXhwYW5kZWRJdGVtSW5kZXg6IG51bWJlcjtcblxuLy8gICBkYXRhOiB7XG4vLyAgICAgY292ZXJVcmw6IHN0cmluZztcbi8vICAgICBuYW1lOiBzdHJpbmc7XG4vLyAgICAgZGF0ZTogc3RyaW5nO1xuLy8gICAgIHByaWNlOiBzdHJpbmc7XG4vLyAgICAgb3JkZXJJZDogbnVtYmVyO1xuLy8gICB9W10gPSBbXG4vLyAgICAgICB7XG4vLyAgICAgICAgIGNvdmVyVXJsOiAnYmFja2Fycm93LnBuZycsXG4vLyAgICAgICAgIG5hbWU6ICdOaWtvbiBEMzQwMCAyNC45TVAgLSBCbGFjaycsXG4vLyAgICAgICAgIGRhdGU6ICcxNSBNYXJjaCwyMDE4Jyxcbi8vICAgICAgICAgcHJpY2U6ICdOOCw4NTAuMDAnLFxuLy8gICAgICAgICBvcmRlcklkOiAxMjM0NVxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgY292ZXJVcmw6ICdmb3J3YXJkYXJyb3cucG5nJyxcbi8vICAgICAgICAgbmFtZTogJ05pa29uIEQzNDAwIDI0LjlNUCAtIEJsYWNrJyxcbi8vICAgICAgICAgZGF0ZTogJzE1IE1hcmNoLDIwMTgnLFxuLy8gICAgICAgICBwcmljZTogJ044LDg1MC4wMCcsXG4vLyAgICAgICAgIG9yZGVySWQ6IDEyMzQ1XG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICBjb3ZlclVybDogJ2JhY2thcnJvdy5wbmcnLFxuLy8gICAgICAgICBuYW1lOiAnTmlrb24gRDM0MDAgMjQuOU1QIC0gQmxhY2snLFxuLy8gICAgICAgICBkYXRlOiAnMTUgTWFyY2gsMjAxOCcsXG4vLyAgICAgICAgIHByaWNlOiAnTjgsODUwLjAwJyxcbi8vICAgICAgICAgb3JkZXJJZDogMTIzNDVcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIGNvdmVyVXJsOiAnYmFja2Fycm93LnBuZycsXG4vLyAgICAgICAgIG5hbWU6ICdOaWtvbiBEMzQwMCAyNC45TVAgLSBCbGFjaycsXG4vLyAgICAgICAgIGRhdGU6ICcxNSBNYXJjaCwyMDE4Jyxcbi8vICAgICAgICAgcHJpY2U6ICdOOCw4NTAuMDAnLFxuLy8gICAgICAgICBvcmRlcklkOiAxMjM0NVxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgY292ZXJVcmw6ICdiYWNrYXJyb3cucG5nJyxcbi8vICAgICAgICAgbmFtZTogJ05pa29uIEQzNDAwIDI0LjlNUCAtIEJsYWNrJyxcbi8vICAgICAgICAgZGF0ZTogJzE1IE1hcmNoLDIwMTgnLFxuLy8gICAgICAgICBwcmljZTogJ044LDg1MC4wMCcsXG4vLyAgICAgICAgIG9yZGVySWQ6IDEyMzQ1XG4vLyAgICAgICB9LFxuLy8gICAgIF07XG5cbi8vICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG4vLyAgIGV4cGFuZChpOiBudW1iZXIpIHtcbi8vICAgICBjb25zb2xlLndhcm4oJ3RoaXMgaXMgYSBpbmRlID09PT4gJywgaSlcbi8vICAgICBpZiAodGhpcy5leHBhbmRlZEl0ZW1JbmRleCA+PSAwICYmIHRoaXMuZXhwYW5kZWRJdGVtSW5kZXggPT09IGkpIHtcbi8vICAgICAgIHRoaXMuZXhwYW5kZWRJdGVtSW5kZXggPSBudWxsO1xuLy8gICAgICAgcmV0dXJuO1xuLy8gICAgIH1cbi8vICAgICB0aGlzLmV4cGFuZGVkSXRlbUluZGV4ID0gaTtcbi8vICAgfVxuLy8gICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4vLyAgIHByaXZhdGUgZHJhd2VyO1xuXG4vLyAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbi8vICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4vLyAgICAgY29uc29sZS5sb2codGhpcy5kcmF3ZXIpO1xuLy8gICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4vLyAgIH1cblxuLy8gICBuZ09uSW5pdCgpIHtcbi8vICAgICB0aGlzLm1haW5Db250ZW50VGV4dCA9IFwiU2lkZURyYXdlciBmb3IgTmF0aXZlU2NyaXB0IGNhbiBiZSBlYXNpbHkgc2V0dXAgaW4gdGhlIEhUTUwgZGVmaW5pdGlvbiBvZiB5b3VyIHBhZ2UgYnkgZGVmaW5pbmcgdGtEcmF3ZXJDb250ZW50IGFuZCB0a01haW5Db250ZW50LiBUaGUgY29tcG9uZW50IGhhcyBhIGRlZmF1bHQgdHJhbnNpdGlvbiBhbmQgcG9zaXRpb24gYW5kIGFsc28gZXhwb3NlcyBub3RpZmljYXRpb25zIHJlbGF0ZWQgdG8gY2hhbmdlcyBpbiBpdHMgc3RhdGUuIFN3aXBlIGZyb20gbGVmdCB0byBvcGVuIHNpZGUgZHJhd2VyLlwiO1xuLy8gICB9XG5cbi8vICAgZ2V0IG1haW5Db250ZW50VGV4dCgpIHtcbi8vICAgICByZXR1cm4gdGhpcy5fbWFpbkNvbnRlbnRUZXh0O1xuLy8gICB9XG5cbi8vICAgc2V0IG1haW5Db250ZW50VGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4vLyAgICAgdGhpcy5fbWFpbkNvbnRlbnRUZXh0ID0gdmFsdWU7XG4vLyAgIH1cblxuLy8gICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbi8vICAgICAvLyB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4vLyAgICAgY29uc29sZS5sb2coXCJqaGpnaGpmaGZqdm54Y252alwiKTtcbi8vICAgfVxuXG4vLyAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuLy8gICAgIC8vIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4vLyAgIH1cbi8vIH1cblxuXG5cblxuXG5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC12ZW5kb3JkYXNoYm9hcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdmVuZG9yZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmVuZG9yZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVmVuZG9yZGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgICBwcml2YXRlIF9tYWluQ29udGVudFRleHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5tYWluQ29udGVudFRleHQgPSBcIlNpZGVEcmF3ZXIgZm9yIE5hdGl2ZVNjcmlwdCBjYW4gYmUgZWFzaWx5IHNldHVwIGluIHRoZSBIVE1MIGRlZmluaXRpb24gb2YgeW91ciBwYWdlIGJ5IGRlZmluaW5nIHRrRHJhd2VyQ29udGVudCBhbmQgdGtNYWluQ29udGVudC4gVGhlIGNvbXBvbmVudCBoYXMgYSBkZWZhdWx0IHRyYW5zaXRpb24gYW5kIHBvc2l0aW9uIGFuZCBhbHNvIGV4cG9zZXMgbm90aWZpY2F0aW9ucyByZWxhdGVkIHRvIGNoYW5nZXMgaW4gaXRzIHN0YXRlLiBTd2lwZSBmcm9tIGxlZnQgdG8gb3BlbiBzaWRlIGRyYXdlci5cIjtcbiAgICB9XG5cbiAgICBnZXQgbWFpbkNvbnRlbnRUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFpbkNvbnRlbnRUZXh0O1xuICAgIH1cblxuICAgIHNldCBtYWluQ29udGVudFRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9tYWluQ29udGVudFRleHQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIH1cbn0iXX0=
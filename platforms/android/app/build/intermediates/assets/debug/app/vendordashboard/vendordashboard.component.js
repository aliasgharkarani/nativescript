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
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var VendordashboardComponent = /** @class */ (function () {
    function VendordashboardComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    VendordashboardComponent.prototype.ngAfterViewInit = function () {
        //fairly certain this statement is never entered
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    VendordashboardComponent.prototype.ngOnInit = function () {
    };
    VendordashboardComponent.prototype.openDrawer = function () {
        console.log("Drawer method reached");
        console.log(this.drawer); //returns undefined
        this.drawer.showDrawer();
    };
    VendordashboardComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(nativescript_ui_sidedrawer_1.RadSideDrawer),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZlbmRvcmRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtHQUFrRztBQUNsRyxrQ0FBa0M7QUFDbEMsOENBQThDO0FBQzlDLGdEQUFnRDtBQUNoRCwrRkFBK0Y7QUFDL0YsaUVBQWlFO0FBQ2pFLGVBQWU7QUFDZix5QkFBeUI7QUFDekIscUNBQXFDO0FBQ3JDLHFEQUFxRDtBQUNyRCxvREFBb0Q7QUFDcEQsS0FBSztBQUNMLDREQUE0RDtBQUM1RCxzQ0FBc0M7QUFDdEMsK0JBQStCOztBQUUvQixZQUFZO0FBQ1osd0JBQXdCO0FBQ3hCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QixZQUFZO0FBQ1osVUFBVTtBQUNWLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFDOUMsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5Qix5QkFBeUI7QUFDekIsV0FBVztBQUNYLFVBQVU7QUFDVix3Q0FBd0M7QUFDeEMsOENBQThDO0FBQzlDLGlDQUFpQztBQUNqQyw4QkFBOEI7QUFDOUIseUJBQXlCO0FBQ3pCLFdBQVc7QUFDWCxVQUFVO0FBQ1YscUNBQXFDO0FBQ3JDLDhDQUE4QztBQUM5QyxpQ0FBaUM7QUFDakMsOEJBQThCO0FBQzlCLHlCQUF5QjtBQUN6QixXQUFXO0FBQ1gsVUFBVTtBQUNWLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFDOUMsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5Qix5QkFBeUI7QUFDekIsV0FBVztBQUNYLFVBQVU7QUFDVixxQ0FBcUM7QUFDckMsOENBQThDO0FBQzlDLGlDQUFpQztBQUNqQyw4QkFBOEI7QUFDOUIseUJBQXlCO0FBQ3pCLFdBQVc7QUFDWCxTQUFTO0FBRVQsb0VBQW9FO0FBQ3BFLHdCQUF3QjtBQUN4Qiw4Q0FBOEM7QUFDOUMseUVBQXlFO0FBQ3pFLHVDQUF1QztBQUN2QyxnQkFBZ0I7QUFDaEIsUUFBUTtBQUNSLGtDQUFrQztBQUNsQyxNQUFNO0FBQ04sdUZBQXVGO0FBQ3ZGLG9CQUFvQjtBQUVwQix3QkFBd0I7QUFDeEIscURBQXFEO0FBQ3JELGdDQUFnQztBQUNoQyxnREFBZ0Q7QUFDaEQsTUFBTTtBQUVOLGlCQUFpQjtBQUNqQiw0VEFBNFQ7QUFDNVQsTUFBTTtBQUVOLDRCQUE0QjtBQUM1QixvQ0FBb0M7QUFDcEMsTUFBTTtBQUVOLHlDQUF5QztBQUN6QyxxQ0FBcUM7QUFDckMsTUFBTTtBQUVOLDBCQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMsd0NBQXdDO0FBQ3hDLE1BQU07QUFFTixnQ0FBZ0M7QUFDaEMsb0NBQW9DO0FBQ3BDLE1BQU07QUFDTixJQUFJO0FBaUJKLHNDQUErRjtBQUsvRiw4REFBNEY7QUFDNUYseUVBQTJEO0FBUzNEO0lBR0ksa0NBQW9CLG1CQUFzQztRQUF0Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO0lBQUksQ0FBQztJQUsvRCxrREFBZSxHQUFmO1FBQ0ksZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQ0FBUSxHQUFSO0lBRUMsQ0FBQztJQUVNLDZDQUFVLEdBQWpCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsbUJBQW1CO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLG1EQUFnQixHQUF2QjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQXJCd0I7UUFBekIsZ0JBQVMsQ0FBQywwQ0FBYSxDQUFDO2tDQUF5QixnQ0FBc0I7cUVBQUM7SUFMaEUsd0JBQXdCO1FBUHBDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1NBQ2hELENBQUM7eUNBSzJDLHdCQUFpQjtPQUhqRCx3QkFBd0IsQ0EyQnBDO0lBQUQsK0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vLyBpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbi8vIGltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xuLy8gaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbi8vIGltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbi8vIC8vIGltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG4vLyBAQ29tcG9uZW50KHtcbi8vICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbi8vICAgc2VsZWN0b3I6ICdhcHAtdmVuZG9yZGFzaGJvYXJkJyxcbi8vICAgdGVtcGxhdGVVcmw6ICcuL3ZlbmRvcmRhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4vLyAgIHN0eWxlVXJsczogWycuL3ZlbmRvcmRhc2hib2FyZC5jb21wb25lbnQuc2NzcyddXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIFZlbmRvcmRhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4vLyAgIHByaXZhdGUgX21haW5Db250ZW50VGV4dDogc3RyaW5nO1xuLy8gICBleHBhbmRlZEl0ZW1JbmRleDogbnVtYmVyO1xuXG4vLyAgIGRhdGE6IHtcbi8vICAgICBjb3ZlclVybDogc3RyaW5nO1xuLy8gICAgIG5hbWU6IHN0cmluZztcbi8vICAgICBkYXRlOiBzdHJpbmc7XG4vLyAgICAgcHJpY2U6IHN0cmluZztcbi8vICAgICBvcmRlcklkOiBudW1iZXI7XG4vLyAgIH1bXSA9IFtcbi8vICAgICAgIHtcbi8vICAgICAgICAgY292ZXJVcmw6ICdiYWNrYXJyb3cucG5nJyxcbi8vICAgICAgICAgbmFtZTogJ05pa29uIEQzNDAwIDI0LjlNUCAtIEJsYWNrJyxcbi8vICAgICAgICAgZGF0ZTogJzE1IE1hcmNoLDIwMTgnLFxuLy8gICAgICAgICBwcmljZTogJ044LDg1MC4wMCcsXG4vLyAgICAgICAgIG9yZGVySWQ6IDEyMzQ1XG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICBjb3ZlclVybDogJ2ZvcndhcmRhcnJvdy5wbmcnLFxuLy8gICAgICAgICBuYW1lOiAnTmlrb24gRDM0MDAgMjQuOU1QIC0gQmxhY2snLFxuLy8gICAgICAgICBkYXRlOiAnMTUgTWFyY2gsMjAxOCcsXG4vLyAgICAgICAgIHByaWNlOiAnTjgsODUwLjAwJyxcbi8vICAgICAgICAgb3JkZXJJZDogMTIzNDVcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIGNvdmVyVXJsOiAnYmFja2Fycm93LnBuZycsXG4vLyAgICAgICAgIG5hbWU6ICdOaWtvbiBEMzQwMCAyNC45TVAgLSBCbGFjaycsXG4vLyAgICAgICAgIGRhdGU6ICcxNSBNYXJjaCwyMDE4Jyxcbi8vICAgICAgICAgcHJpY2U6ICdOOCw4NTAuMDAnLFxuLy8gICAgICAgICBvcmRlcklkOiAxMjM0NVxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgY292ZXJVcmw6ICdiYWNrYXJyb3cucG5nJyxcbi8vICAgICAgICAgbmFtZTogJ05pa29uIEQzNDAwIDI0LjlNUCAtIEJsYWNrJyxcbi8vICAgICAgICAgZGF0ZTogJzE1IE1hcmNoLDIwMTgnLFxuLy8gICAgICAgICBwcmljZTogJ044LDg1MC4wMCcsXG4vLyAgICAgICAgIG9yZGVySWQ6IDEyMzQ1XG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICBjb3ZlclVybDogJ2JhY2thcnJvdy5wbmcnLFxuLy8gICAgICAgICBuYW1lOiAnTmlrb24gRDM0MDAgMjQuOU1QIC0gQmxhY2snLFxuLy8gICAgICAgICBkYXRlOiAnMTUgTWFyY2gsMjAxOCcsXG4vLyAgICAgICAgIHByaWNlOiAnTjgsODUwLjAwJyxcbi8vICAgICAgICAgb3JkZXJJZDogMTIzNDVcbi8vICAgICAgIH0sXG4vLyAgICAgXTtcblxuLy8gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cbi8vICAgZXhwYW5kKGk6IG51bWJlcikge1xuLy8gICAgIGNvbnNvbGUud2FybigndGhpcyBpcyBhIGluZGUgPT09PiAnLCBpKVxuLy8gICAgIGlmICh0aGlzLmV4cGFuZGVkSXRlbUluZGV4ID49IDAgJiYgdGhpcy5leHBhbmRlZEl0ZW1JbmRleCA9PT0gaSkge1xuLy8gICAgICAgdGhpcy5leHBhbmRlZEl0ZW1JbmRleCA9IG51bGw7XG4vLyAgICAgICByZXR1cm47XG4vLyAgICAgfVxuLy8gICAgIHRoaXMuZXhwYW5kZWRJdGVtSW5kZXggPSBpO1xuLy8gICB9XG4vLyAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbi8vICAgcHJpdmF0ZSBkcmF3ZXI7XG5cbi8vICAgbmdBZnRlclZpZXdJbml0KCkge1xuLy8gICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmRyYXdlcik7XG4vLyAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbi8vICAgfVxuXG4vLyAgIG5nT25Jbml0KCkge1xuLy8gICAgIHRoaXMubWFpbkNvbnRlbnRUZXh0ID0gXCJTaWRlRHJhd2VyIGZvciBOYXRpdmVTY3JpcHQgY2FuIGJlIGVhc2lseSBzZXR1cCBpbiB0aGUgSFRNTCBkZWZpbml0aW9uIG9mIHlvdXIgcGFnZSBieSBkZWZpbmluZyB0a0RyYXdlckNvbnRlbnQgYW5kIHRrTWFpbkNvbnRlbnQuIFRoZSBjb21wb25lbnQgaGFzIGEgZGVmYXVsdCB0cmFuc2l0aW9uIGFuZCBwb3NpdGlvbiBhbmQgYWxzbyBleHBvc2VzIG5vdGlmaWNhdGlvbnMgcmVsYXRlZCB0byBjaGFuZ2VzIGluIGl0cyBzdGF0ZS4gU3dpcGUgZnJvbSBsZWZ0IHRvIG9wZW4gc2lkZSBkcmF3ZXIuXCI7XG4vLyAgIH1cblxuLy8gICBnZXQgbWFpbkNvbnRlbnRUZXh0KCkge1xuLy8gICAgIHJldHVybiB0aGlzLl9tYWluQ29udGVudFRleHQ7XG4vLyAgIH1cblxuLy8gICBzZXQgbWFpbkNvbnRlbnRUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbi8vICAgICB0aGlzLl9tYWluQ29udGVudFRleHQgPSB2YWx1ZTtcbi8vICAgfVxuXG4vLyAgIHB1YmxpYyBvcGVuRHJhd2VyKCkge1xuLy8gICAgIC8vIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbi8vICAgICBjb25zb2xlLmxvZyhcImpoamdoamZoZmp2bnhjbnZqXCIpO1xuLy8gICB9XG5cbi8vICAgcHVibGljIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XG4vLyAgICAgLy8gdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbi8vICAgfVxuLy8gfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gJy4uL3NlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXZlbmRvcmRhc2hib2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi92ZW5kb3JkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92ZW5kb3JkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFZlbmRvcmRhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfbWFpbkNvbnRlbnRUZXh0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlcikgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgLy9mYWlybHkgY2VydGFpbiB0aGlzIHN0YXRlbWVudCBpcyBuZXZlciBlbnRlcmVkXG4gICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICB9XG5cbiAgICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XG4gICAgICAgICBjb25zb2xlLmxvZyhcIkRyYXdlciBtZXRob2QgcmVhY2hlZFwiKTsgXG4gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRyYXdlcik7IC8vcmV0dXJucyB1bmRlZmluZWRcbiAgICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICAgfVxuXG4gICAgIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICAgfVxufSJdfQ==
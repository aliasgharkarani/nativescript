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
















import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
// import { SearchService } from '../search.service';
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  moduleId: module.id,
  selector: 'app-vendordashboard',
  templateUrl: './vendordashboard.component.html',
  styleUrls: ['./vendordashboard.component.scss']
})

export class VendordashboardComponent implements AfterViewInit, OnInit {
    private _mainContentText: string;

    constructor(private _changeDetectionRef: ChangeDetectorRef) { }

    @ViewChild(RadSideDrawer) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    ngAfterViewInit() {
        //fairly certain this statement is never entered
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {

     }

     public openDrawer() {
         console.log("Drawer method reached"); 
         console.log(this.drawer); //returns undefined
         this.drawer.showDrawer();
     }

     public onCloseDrawerTap() {
         this.drawer.closeDrawer();
     }
}
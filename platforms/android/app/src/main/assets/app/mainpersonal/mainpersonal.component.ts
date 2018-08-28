import { Component, OnInit } from '@angular/core';
import {Page} from "ui/page";

@Component({
  moduleId: module.id,
  selector: 'app-mainpersonal',
  templateUrl: './mainpersonal.component.html',
  styleUrls: ['./mainpersonal.component.scss']
})
export class MainpersonalComponent implements OnInit {

  images: Array<any> = [];
  constructor(page:Page) { 
  page.actionBarHidden = true;
  }
  ngOnInit() {
    this.images = [
      {  url: 'https://unsplash.it/400/300/?image=867' },
      { title: 'Image 2', url: 'https://unsplash.it/400/300/?image=870' },
      { title: 'Image 3', url: 'https://unsplash.it/400/300/?image=876' },
    ];
  }
  
  // myChangeEvent(args){
  //   var changeEventText = 'Page changed to index: ' + args.index;
  //   console.log(changeEventText);

  // }
      // exports.myChangeEvent = function(args) {
      //   var changeEventText = 'Page changed to index: ' + args.index;
      //   console.log(changeEventText);
      // };
      
      // exports.myScrollingEvent = function(args) {
      //   console.log('Scrolling: ' + args.state.offset);
      // };
     }

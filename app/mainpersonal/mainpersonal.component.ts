import { Component, OnInit } from '@angular/core';
import {Page} from "ui/page";

@Component({
  moduleId: module.id,
  selector: 'app-mainpersonal',
  templateUrl: './mainpersonal.component.html',
  styleUrls: ['./mainpersonal.component.scss']
})
export class MainpersonalComponent implements OnInit {

  constructor(page:Page) { 
  page.actionBarHidden = true;
  }
  ngOnInit() {
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

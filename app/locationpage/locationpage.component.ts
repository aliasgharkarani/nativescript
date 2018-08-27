import { Component, OnInit } from '@angular/core';
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import {Page} from "ui/page";

const imageSourceModule = require("tns-core-modules/image-source");
const fileSystemModule = require("tns-core-modules/file-system");
@Component({
  moduleId: module.id,
  selector: 'app-locationpage',
  templateUrl: './locationpage.component.html',
  styleUrls: ['./locationpage.component.scss']
})
export class LocationpageComponent implements OnInit {
  public tabSelectedIndex: number;
  public items: Array<string>;
  constructor(page:Page) { 
    page.actionBarHidden = true;
    this.tabSelectedIndex = 1;
    this.items = [];
    for (var i = 0; i < 5; i++) {
      this.items.push("data item " + i);
    }
  }
  public onchange(args: SelectedIndexChangedEventData) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
  }

  public onopen() {
    console.log("Drop Down opened.");
  }

  public onclose() {
    console.log("Drop Down closed.");
  }
  ngOnInit() { }

}

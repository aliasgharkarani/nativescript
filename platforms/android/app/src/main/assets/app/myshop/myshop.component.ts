import { Component, OnInit } from '@angular/core';
import {Page} from "ui/page";

@Component({
  moduleId: module.id,
  selector: 'app-myshop',
  templateUrl: './myshop.component.html',
  styleUrls: ['./myshop.component.scss']
})
export class MyshopComponent implements OnInit {

  constructor(page:Page) { 
    page.actionBarHidden = true;
  }
  ngOnInit() { }

}

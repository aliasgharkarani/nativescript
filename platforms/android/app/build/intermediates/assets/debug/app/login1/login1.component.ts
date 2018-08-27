import { Component, OnInit } from '@angular/core';
import {Page} from "ui/page";

@Component({
  moduleId: module.id,
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {

  constructor(page:Page) { 
    page.actionBarHidden = true;
    page.backgroundImage = "~/images/background2.png";
  }

  ngOnInit() { }

}

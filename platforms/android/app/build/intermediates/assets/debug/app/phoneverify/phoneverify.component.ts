import { Component, OnInit } from '@angular/core';
import {Page} from "ui/page";

@Component({
  moduleId: module.id,
  selector: 'app-phoneverify',
  templateUrl: './phoneverify.component.html',
  styleUrls: ['./phoneverify.component.scss']
})
export class PhoneverifyComponent implements OnInit {

  constructor(page:Page) { 
    // page.actionBarHidden = true;
    page.backgroundImage = "~/images/BG.png";
  }

  ngOnInit() { }

}

import { Component,ViewContainerRef, OnInit } from '@angular/core';
import { ModalParamsService } from '~/modal-params.service';
// import { RouterExtensions } from "nativescript-angular/router";
// import { ActivatedRoute } from "@angular/router";
// import { ModalDialogParams } from "nativescript-angular/modal-dialog";
// import { Page } from "ui/page";
@Component({
  moduleId: module.id,
  selector: 'app-modalpage',
  templateUrl: './modalpage.component.html',
  styleUrls: ['./modalpage.component.scss']
})
export class ModalpageComponent implements OnInit {

  // constructor(private _params: ModalDialogParams, private _page: Page, private router: RouterExtensions, private _activeRoute: ActivatedRoute) {}
  public frameworks: Array<string>;

  constructor(private params: ModalParamsService) {
    this.frameworks = [
      "NativeScript",
      "Xamarin",
      "Onsen UI",
      "Ionic Framework",
      "React Native"
  ];
  }
  public onClose(res: string) {
    // this.params.closeCallback(res);
}

  ngOnInit(): void {}
  onNavigate(): void {
      // this.router.navigate(["../second-modal"], { relativeTo: this._activeRoute });
  }
  // onClose(): void {
  //     // this._params.closeCallback("return value");
  // }

}

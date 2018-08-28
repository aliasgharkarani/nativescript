"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_params_service_1 = require("~/modal-params.service");
var page_1 = require("ui/page");
// import { RouterExtensions } from "nativescript-angular/router";
// import { ActivatedRoute } from "@angular/router";
// import { ModalDialogParams } from "nativescript-angular/modal-dialog";
// import { Page } from "ui/page";
var ModalpageComponent = /** @class */ (function () {
    function ModalpageComponent(params, page) {
        this.params = params;
        page.actionBarHidden = true;
        this.frameworks = [
            "NativeScript",
            "Xamarin",
            "Onsen UI",
            "Ionic Framework",
            "React Native"
        ];
    }
    ModalpageComponent.prototype.onClose = function (res) {
        // this.params.closeCallback(res);
        console.log("working");
    };
    ModalpageComponent.prototype.ngOnInit = function () {
    };
    ModalpageComponent.prototype.onNavigate = function () {
        // this.router.navigate(["../second-modal"], { relativeTo: this._activeRoute });
    };
    ModalpageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-modalpage',
            templateUrl: './modalpage.component.html',
            styleUrls: ['./modalpage.component.scss']
        }),
        __metadata("design:paramtypes", [modal_params_service_1.ModalParamsService, page_1.Page])
    ], ModalpageComponent);
    return ModalpageComponent;
}());
exports.ModalpageComponent = ModalpageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxwYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFscGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsK0RBQTREO0FBQzVELGdDQUE2QjtBQUM3QixrRUFBa0U7QUFDbEUsb0RBQW9EO0FBQ3BELHlFQUF5RTtBQUN6RSxrQ0FBa0M7QUFPbEM7SUFLQyw0QkFBb0IsTUFBMEIsRUFBRSxJQUFVO1FBQXRDLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDakIsY0FBYztZQUNkLFNBQVM7WUFDVCxVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCLGNBQWM7U0FDZCxDQUFDO0lBQ0gsQ0FBQztJQUNNLG9DQUFPLEdBQWQsVUFBZSxHQUFXO1FBQ3pCLGtDQUFrQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFHRCxxQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDQyxnRkFBZ0Y7SUFDakYsQ0FBQztJQTNCVyxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQ3pDLENBQUM7eUNBTTJCLHlDQUFrQixFQUFRLFdBQUk7T0FMOUMsa0JBQWtCLENBZ0M5QjtJQUFELHlCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsUGFyYW1zU2VydmljZSB9IGZyb20gJ34vbW9kYWwtcGFyYW1zLnNlcnZpY2UnO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuLy8gaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuLy8gaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG4vLyBpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2FwcC1tb2RhbHBhZ2UnLFxuXHR0ZW1wbGF0ZVVybDogJy4vbW9kYWxwYWdlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbW9kYWxwYWdlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxwYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHQvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIF9wYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBfYWN0aXZlUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxuXHRwdWJsaWMgZnJhbWV3b3JrczogQXJyYXk8c3RyaW5nPjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxQYXJhbXNTZXJ2aWNlLCBwYWdlOiBQYWdlKSB7XG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHRcdHRoaXMuZnJhbWV3b3JrcyA9IFtcblx0XHRcdFwiTmF0aXZlU2NyaXB0XCIsXG5cdFx0XHRcIlhhbWFyaW5cIixcblx0XHRcdFwiT25zZW4gVUlcIixcblx0XHRcdFwiSW9uaWMgRnJhbWV3b3JrXCIsXG5cdFx0XHRcIlJlYWN0IE5hdGl2ZVwiXG5cdFx0XTtcblx0fVxuXHRwdWJsaWMgb25DbG9zZShyZXM6IHN0cmluZykge1xuXHRcdC8vIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcblx0XHRjb25zb2xlLmxvZyhcIndvcmtpbmdcIilcblx0fVxuXG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cblx0fVxuXG5cdG9uTmF2aWdhdGUoKTogdm9pZCB7XG5cdFx0Ly8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiLi4vc2Vjb25kLW1vZGFsXCJdLCB7IHJlbGF0aXZlVG86IHRoaXMuX2FjdGl2ZVJvdXRlIH0pO1xuXHR9XG5cdC8vIG9uQ2xvc2UoKTogdm9pZCB7XG5cdC8vIHRoaXMuX3BhcmFtcy5jbG9zZUNhbGxiYWNrKFwicmV0dXJuIHZhbHVlXCIpO1xuXHQvLyB9XG5cbn0iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_params_service_1 = require("~/modal-params.service");
// import { RouterExtensions } from "nativescript-angular/router";
// import { ActivatedRoute } from "@angular/router";
// import { ModalDialogParams } from "nativescript-angular/modal-dialog";
// import { Page } from "ui/page";
var ModalpageComponent = /** @class */ (function () {
    function ModalpageComponent(params) {
        this.params = params;
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
    };
    ModalpageComponent.prototype.ngOnInit = function () { };
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
        __metadata("design:paramtypes", [modal_params_service_1.ModalParamsService])
    ], ModalpageComponent);
    return ModalpageComponent;
}());
exports.ModalpageComponent = ModalpageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxwYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vZGFscGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUU7QUFDbkUsK0RBQTREO0FBQzVELGtFQUFrRTtBQUNsRSxvREFBb0Q7QUFDcEQseUVBQXlFO0FBQ3pFLGtDQUFrQztBQU9sQztJQUtFLDRCQUFvQixNQUEwQjtRQUExQixXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLGNBQWM7WUFDZCxTQUFTO1lBQ1QsVUFBVTtZQUNWLGlCQUFpQjtZQUNqQixjQUFjO1NBQ2pCLENBQUM7SUFDRixDQUFDO0lBQ00sb0NBQU8sR0FBZCxVQUFlLEdBQVc7UUFDeEIsa0NBQWtDO0lBQ3RDLENBQUM7SUFFQyxxQ0FBUSxHQUFSLGNBQWtCLENBQUM7SUFDbkIsdUNBQVUsR0FBVjtRQUNJLGdGQUFnRjtJQUNwRixDQUFDO0lBckJVLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzt5Q0FNNEIseUNBQWtCO09BTG5DLGtCQUFrQixDQTBCOUI7SUFBRCx5QkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxWaWV3Q29udGFpbmVyUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsUGFyYW1zU2VydmljZSB9IGZyb20gJ34vbW9kYWwtcGFyYW1zLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuLy8gaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG4vLyBpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1tb2RhbHBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vbW9kYWxwYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWxwYWdlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxwYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zLCBwcml2YXRlIF9wYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBfYWN0aXZlUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxuICBwdWJsaWMgZnJhbWV3b3JrczogQXJyYXk8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxQYXJhbXNTZXJ2aWNlKSB7XG4gICAgdGhpcy5mcmFtZXdvcmtzID0gW1xuICAgICAgXCJOYXRpdmVTY3JpcHRcIixcbiAgICAgIFwiWGFtYXJpblwiLFxuICAgICAgXCJPbnNlbiBVSVwiLFxuICAgICAgXCJJb25pYyBGcmFtZXdvcmtcIixcbiAgICAgIFwiUmVhY3QgTmF0aXZlXCJcbiAgXTtcbiAgfVxuICBwdWJsaWMgb25DbG9zZShyZXM6IHN0cmluZykge1xuICAgIC8vIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2socmVzKTtcbn1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG4gIG9uTmF2aWdhdGUoKTogdm9pZCB7XG4gICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIuLi9zZWNvbmQtbW9kYWxcIl0sIHsgcmVsYXRpdmVUbzogdGhpcy5fYWN0aXZlUm91dGUgfSk7XG4gIH1cbiAgLy8gb25DbG9zZSgpOiB2b2lkIHtcbiAgLy8gICAgIC8vIHRoaXMuX3BhcmFtcy5jbG9zZUNhbGxiYWNrKFwicmV0dXJuIHZhbHVlXCIpO1xuICAvLyB9XG5cbn1cbiJdfQ==
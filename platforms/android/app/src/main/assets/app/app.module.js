"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
// import { ModalDialogService, ModalDialogParams, ModalDialogOptions } from "nativescript-angular/modal-dialog";
// import { registerElement } from "nativescript-angular/element-registry";
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var angular_1 = require("nativescript-drop-down/angular");
var modal_params_service_1 = require("~/modal-params.service");
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
var angular_2 = require("nativescript-ui-sidedrawer/angular");
var nativescript_ng2_carousel_1 = require("nativescript-ng2-carousel/nativescript-ng2-carousel");
var profile_component_1 = require("./profile/profile.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            schemas: [core_1.NO_ERRORS_SCHEMA],
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule,
                // NativeScriptFormsModule,
                // NativeScriptRouterModule,
                // NativeScriptModule,
                angular_2.NativeScriptUISideDrawerModule,
                app_routing_1.AppRoutingModule,
                angular_1.DropDownModule,
                nativescript_ng_shadow_1.NgShadowModule
                // ModalDialogParams
            ],
            declarations: [
                nativescript_ng2_carousel_1.CarouselDirective,
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                profile_component_1.ProfileComponent,
            ],
            providers: [
                item_service_1.ItemService,
                modal_dialog_1.ModalDialogService,
                modal_params_service_1.ModalParamsService
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQStFO0FBQy9FLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0MsaUhBQWlIO0FBQ2pILDJFQUEyRTtBQUUzRSxrRUFBdUU7QUFHdkUsc0RBQXdFO0FBQ3hFLG9EQUFzRTtBQUV0RSxvREFBa0Q7QUFDbEQsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUtuRSwwREFBZ0U7QUFNaEUsK0RBQTREO0FBSTVELGlFQUF3RDtBQUN4RCw4REFBb0Y7QUFFcEYsaUdBQXNGO0FBQ3RGLGlFQUE2RDtBQUk3RCwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLGtGQUFrRjtBQUNsRixtRkFBbUY7QUFxQ25GO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQW5DckIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7WUFDM0IsU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLGlDQUF3QjtnQkFDeEIsMkJBQTJCO2dCQUMzQiw0QkFBNEI7Z0JBQzVCLHNCQUFzQjtnQkFDdEIsd0NBQThCO2dCQUM5Qiw4QkFBZ0I7Z0JBQ2hCLHdCQUFjO2dCQUNkLHVDQUFjO2dCQUNkLG9CQUFvQjthQUV2QjtZQUNELFlBQVksRUFBRTtnQkFDViw2Q0FBaUI7Z0JBQ2pCLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsb0NBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2dCQUNYLGlDQUFrQjtnQkFDbEIseUNBQWtCO2FBQ3JCO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlLCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbi8vIGltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dQYXJhbXMsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbi8vIGltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJwbGF0Zm9ybVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbi8vIGltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIn4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQge0FkZHByb2R1Y3RDb21wb25lbnQgfSBmcm9tIFwiLi9hZGRwcm9kdWN0L2FkZHByb2R1Y3QuY29tcG9uZW50XCJcbmltcG9ydCB7UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tIFwiLi9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnRcIlxuaW1wb3J0IHsgTG9jYXRpb25wYWdlQ29tcG9uZW50IH0gZnJvbSBcIn4vbG9jYXRpb25wYWdlL2xvY2F0aW9ucGFnZS5jb21wb25lbnRcIlxuaW1wb3J0IHsgRHJvcERvd25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93bi9hbmd1bGFyXCI7XG5pbXBvcnQgeyBBZGRwcm9kdWN0MkNvbXBvbmVudCB9IGZyb20gXCJ+L2FkZHByb2R1Y3QyL2FkZHByb2R1Y3QyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwifi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luMUNvbXBvbmVudCB9IGZyb20gXCJ+L2xvZ2luMS9sb2dpbjEuY29tcG9uZW50XCJcbmltcG9ydCB7IFBob25ldmVyaWZ5Q29tcG9uZW50IH0gZnJvbSBcIn4vcGhvbmV2ZXJpZnkvcGhvbmV2ZXJpZnkuY29tcG9uZW50XCJcbmltcG9ydCB7IE1vZGFscGFnZUNvbXBvbmVudCB9IGZyb20gXCJ+L21vZGFscGFnZS9tb2RhbHBhZ2UuY29tcG9uZW50XCJcbmltcG9ydCB7IE1vZGFsUGFyYW1zU2VydmljZSB9IGZyb20gXCJ+L21vZGFsLXBhcmFtcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNYWlucGVyc29uYWxDb21wb25lbnQgfSBmcm9tIFwifi9tYWlucGVyc29uYWwvbWFpbnBlcnNvbmFsLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBNeXNob3BDb21wb25lbnQgfSBmcm9tIFwifi9teXNob3AvbXlzaG9wLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBWZW5kb3JkYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwifi92ZW5kb3JkYXNoYm9hcmQvdmVuZG9yZGFzaGJvYXJkLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBOZ1NoYWRvd01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZy1zaGFkb3cnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7V2Vidmlld2Zvcm1Db21wb25lbnQgfSBmcm9tIFwiLi93ZWJ2aWV3Zm9ybS93ZWJ2aWV3Zm9ybS5jb21wb25lbnRcIlxuaW1wb3J0IHtDYXJvdXNlbERpcmVjdGl2ZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1uZzItY2Fyb3VzZWwvbmF0aXZlc2NyaXB0LW5nMi1jYXJvdXNlbFwiO1xuaW1wb3J0IHtQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XG5cbmRlY2xhcmUgdmFyIEdNU1NlcnZpY2VzOiBhbnk7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEh0dHBDbGllbnQgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgLy8gTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIC8vIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgLy8gTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIERyb3BEb3duTW9kdWxlLFxuICAgICAgICBOZ1NoYWRvd01vZHVsZVxuICAgICAgICAvLyBNb2RhbERpYWxvZ1BhcmFtc1xuXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ2Fyb3VzZWxEaXJlY3RpdmUsXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgICAgIFByb2ZpbGVDb21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2UsXG4gICAgICAgIE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgTW9kYWxQYXJhbXNTZXJ2aWNlXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var nativescript_bottom_navigation_1 = require("nativescript-bottom-navigation");
// import { registerElement } from "nativescript-angular/element-registry";
// registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);
//import { registerElement } from "nativescript-angular/element-registry";
//import { CardView } from "nativescript-cardview";
//registerElement("CardView", () => CardView);
// import * as elementRegistryModule from "nativescript-angular/element-registry";
// import * as LabelModule from "tns-core-modules/ui/label";
// elementRegistryModule.registerElement(
//   "CardView",
//   () => require("nativescript-cardview").CardView
// );
var CartComponent = /** @class */ (function () {
    function CartComponent(page) {
        this.page = page;
        this.selectedTab = 0;
        this.tabs = [
            new nativescript_bottom_navigation_1.BottomNavigationTab('First', 'shop'),
            new nativescript_bottom_navigation_1.BottomNavigationTab('Second', 'box', false),
            new nativescript_bottom_navigation_1.BottomNavigationTab('Third', 'accept'),
            new nativescript_bottom_navigation_1.BottomNavigationTab('Fourth', 'user')
        ];
    }
    CartComponent.prototype.ngOnInit = function () {
        this._bottomNavigation = this.page.getViewById('bottomNavigation');
    };
    CartComponent.prototype.onBottomNavigationTabSelected = function (args) {
        this.selectedTab = args.newIndex;
        if (this.selectedTab === 1) {
            alert('This item has selectable: false, and should be used to perform actions');
        }
        console.log("old tab index:  " + args.oldIndex);
        console.log("selected tab index:  " + args.newIndex);
    };
    CartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-cart",
            templateUrl: "./cart.component.html",
            styleUrls: ["./cart-common.css", "./cart.component.css"],
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQVNqRSxnQ0FBK0I7QUFlL0IsaUZBSXdDO0FBUXhDLDJFQUEyRTtBQUMzRSxrRkFBa0Y7QUFDbEYsMEVBQTBFO0FBQzFFLG1EQUFtRDtBQUNuRCw4Q0FBOEM7QUFFOUMsa0ZBQWtGO0FBQ2xGLDREQUE0RDtBQUM1RCx5Q0FBeUM7QUFDekMsZ0JBQWdCO0FBQ2hCLG9EQUFvRDtBQUNwRCxLQUFLO0FBV0w7SUFhSSx1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFWdkIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsU0FBSSxHQUEwQjtZQUNqQyxJQUFJLG9EQUFtQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7WUFDeEMsSUFBSSxvREFBbUIsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUMvQyxJQUFJLG9EQUFtQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7WUFDMUMsSUFBSSxvREFBbUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO1NBQzVDLENBQUM7SUFJZ0MsQ0FBQztJQUVuQyxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELHFEQUE2QixHQUE3QixVQUE4QixJQUE0QjtRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLEtBQUssQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO1FBQ3BGLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixJQUFJLENBQUMsUUFBVSxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsSUFBSSxDQUFDLFFBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUExQlEsYUFBYTtRQVJ6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUM7U0FDM0QsQ0FBQzt5Q0FnQjRCLFdBQUk7T0FickIsYUFBYSxDQWtDekI7SUFBRCxvQkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XHJcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuXHJcbmltcG9ydCB7IFZhbHVlTGlzdCwgRHJvcERvd24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XHJcbmltcG9ydCB7IENvb3BlcmF0aXZlLCBVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9pbmRleFwiO1xyXG5pbXBvcnQgeyBDb29wZXJhdGl2ZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29vcGVyYXRpdmUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb29wZXJhdGl2ZVN0YWZmU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb29wZXJhdGl2ZVN0YWZmLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IE1lbWJlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbWVtYmVyLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IENvb3BlcmF0aXZlU3RhZmYsIFZlcmlmeUF1dGggfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgeyBUTlNGYW5jeUFsZXJ0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mYW5jeWFsZXJ0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEJvdHRvbU5hdmlnYXRpb24sXHJcbiAgQm90dG9tTmF2aWdhdGlvblRhYixcclxuICBPblRhYlNlbGVjdGVkRXZlbnREYXRhXHJcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1ib3R0b20tbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQge1xyXG4gIEFuZHJvaWREYXRhLFxyXG4gIEVsZXZhdGlvbixcclxuICBTaGFwZSxcclxuICBTaGFwZUVudW1cclxufSBmcm9tIFwibmF0aXZlc2NyaXB0LW5nLXNoYWRvd1wiO1xyXG5cclxuLy8gaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuLy8gcmVnaXN0ZXJFbGVtZW50KFwiRmFiXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b25cIikuRmFiKTtcclxuLy9pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG4vL2ltcG9ydCB7IENhcmRWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiO1xyXG4vL3JlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IENhcmRWaWV3KTtcclxuXHJcbi8vIGltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG4vLyBpbXBvcnQgKiBhcyBMYWJlbE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbFwiO1xyXG4vLyBlbGVtZW50UmVnaXN0cnlNb2R1bGUucmVnaXN0ZXJFbGVtZW50KFxyXG4vLyAgIFwiQ2FyZFZpZXdcIixcclxuLy8gICAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3XHJcbi8vICk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwibnMtY2FydFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYXJ0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vY2FydC1jb21tb24uY3NzXCIsIFwiLi9jYXJ0LmNvbXBvbmVudC5jc3NcIl0sXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENhcnRDb21wb25lbnQge1xyXG5cclxuICAgIFxyXG4gICAgcHVibGljIHNlbGVjdGVkVGFiOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHRhYnM6IEJvdHRvbU5hdmlnYXRpb25UYWJbXSA9IFtcclxuICAgICAgICBuZXcgQm90dG9tTmF2aWdhdGlvblRhYignRmlyc3QnLCAnc2hvcCcpLFxyXG4gICAgICAgIG5ldyBCb3R0b21OYXZpZ2F0aW9uVGFiKCdTZWNvbmQnLCAnYm94JywgZmFsc2UpLFxyXG4gICAgICAgIG5ldyBCb3R0b21OYXZpZ2F0aW9uVGFiKCdUaGlyZCcsICdhY2NlcHQnKSxcclxuICAgICAgICBuZXcgQm90dG9tTmF2aWdhdGlvblRhYignRm91cnRoJywgJ3VzZXInKVxyXG4gICAgXTtcclxuXHJcbiAgICBwcml2YXRlIF9ib3R0b21OYXZpZ2F0aW9uOiBCb3R0b21OYXZpZ2F0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYm90dG9tTmF2aWdhdGlvbiA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZCgnYm90dG9tTmF2aWdhdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQm90dG9tTmF2aWdhdGlvblRhYlNlbGVjdGVkKGFyZ3M6IE9uVGFiU2VsZWN0ZWRFdmVudERhdGEpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gYXJncy5uZXdJbmRleDtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PT0gMSkge1xyXG4gICAgICAgICAgICBhbGVydCgnVGhpcyBpdGVtIGhhcyBzZWxlY3RhYmxlOiBmYWxzZSwgYW5kIHNob3VsZCBiZSB1c2VkIHRvIHBlcmZvcm0gYWN0aW9ucycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhgb2xkIHRhYiBpbmRleDogICR7YXJncy5vbGRJbmRleH1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgdGFiIGluZGV4OiAgJHthcmdzLm5ld0luZGV4fWApO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSJdfQ==
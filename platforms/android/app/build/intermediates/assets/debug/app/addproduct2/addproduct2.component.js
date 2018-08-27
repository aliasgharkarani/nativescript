"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var imageSourceModule = require("tns-core-modules/image-source");
var fileSystemModule = require("tns-core-modules/file-system");
var Addproduct2Component = /** @class */ (function () {
    function Addproduct2Component(page) {
        page.actionBarHidden = true;
        this.tabSelectedIndex = 1;
        this.items = [];
        for (var i = 0; i < 5; i++) {
            this.items.push("data item " + i);
        }
    }
    Addproduct2Component.prototype.onchange = function (args) {
        console.log("Drop Down selected index changed from " + args.oldIndex + " to " + args.newIndex);
    };
    Addproduct2Component.prototype.onopen = function () {
        console.log("Drop Down opened.");
    };
    Addproduct2Component.prototype.onclose = function () {
        console.log("Drop Down closed.");
    };
    Addproduct2Component.prototype.ngOnInit = function () { };
    Addproduct2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-addproduct2',
            templateUrl: './addproduct2.component.html',
            styleUrls: ['./addproduct2.component.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], Addproduct2Component);
    return Addproduct2Component;
}());
exports.Addproduct2Component = Addproduct2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcHJvZHVjdDIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkcHJvZHVjdDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGdDQUE2QjtBQUU3QixJQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQ25FLElBQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFPakU7SUFHRSw4QkFBWSxJQUFTO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7SUFDTSx1Q0FBUSxHQUFmLFVBQWdCLElBQW1DO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQXlDLElBQUksQ0FBQyxRQUFRLFlBQU8sSUFBSSxDQUFDLFFBQVUsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFTSxxQ0FBTSxHQUFiO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxzQ0FBTyxHQUFkO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCx1Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQXRCSCxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDNUMsQ0FBQzt5Q0FJaUIsV0FBSTtPQUhWLG9CQUFvQixDQXdCaEM7SUFBRCwyQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbmNvbnN0IGltYWdlU291cmNlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2Utc291cmNlXCIpO1xuY29uc3QgZmlsZVN5c3RlbU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpO1xuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWFkZHByb2R1Y3QyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZHByb2R1Y3QyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkcHJvZHVjdDIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRwcm9kdWN0MkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4OiBudW1iZXI7XG4gIHB1YmxpYyBpdGVtczogQXJyYXk8c3RyaW5nPjtcbiAgY29uc3RydWN0b3IocGFnZTpQYWdlKSB7IFxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLnRhYlNlbGVjdGVkSW5kZXggPSAxO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKFwiZGF0YSBpdGVtIFwiICsgaSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBvbmNoYW5nZShhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKGBEcm9wIERvd24gc2VsZWN0ZWQgaW5kZXggY2hhbmdlZCBmcm9tICR7YXJncy5vbGRJbmRleH0gdG8gJHthcmdzLm5ld0luZGV4fWApO1xuICB9XG5cbiAgcHVibGljIG9ub3BlbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBvcGVuZWQuXCIpO1xuICB9XG5cbiAgcHVibGljIG9uY2xvc2UoKSB7XG4gICAgY29uc29sZS5sb2coXCJEcm9wIERvd24gY2xvc2VkLlwiKTtcbiAgfVxuICBuZ09uSW5pdCgpIHsgfVxuXG59XG4iXX0=
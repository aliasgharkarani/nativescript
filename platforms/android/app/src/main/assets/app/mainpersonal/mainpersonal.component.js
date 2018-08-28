"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var MainpersonalComponent = /** @class */ (function () {
    function MainpersonalComponent(page) {
        this.images = [];
        page.actionBarHidden = true;
    }
    MainpersonalComponent.prototype.ngOnInit = function () {
        this.images = [
            { url: 'https://unsplash.it/400/300/?image=867' },
            { title: 'Image 2', url: 'https://unsplash.it/400/300/?image=870' },
            { title: 'Image 3', url: 'https://unsplash.it/400/300/?image=876' },
        ];
    };
    MainpersonalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-mainpersonal',
            templateUrl: './mainpersonal.component.html',
            styleUrls: ['./mainpersonal.component.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], MainpersonalComponent);
    return MainpersonalComponent;
}());
exports.MainpersonalComponent = MainpersonalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnBlcnNvbmFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW5wZXJzb25hbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0NBQTZCO0FBUTdCO0lBR0UsK0JBQVksSUFBUztRQURyQixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFDRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEVBQUcsR0FBRyxFQUFFLHdDQUF3QyxFQUFFO1lBQ2xELEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsd0NBQXdDLEVBQUU7WUFDbkUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSx3Q0FBd0MsRUFBRTtTQUNwRSxDQUFDO0lBQ0osQ0FBQztJQVpVLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUM3QyxDQUFDO3lDQUlpQixXQUFJO09BSFYscUJBQXFCLENBMkI1QjtJQUFELDRCQUFDO0NBQUEsQUEzQk4sSUEyQk07QUEzQk8sc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLW1haW5wZXJzb25hbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYWlucGVyc29uYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYWlucGVyc29uYWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYWlucGVyc29uYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGltYWdlczogQXJyYXk8YW55PiA9IFtdO1xuICBjb25zdHJ1Y3RvcihwYWdlOlBhZ2UpIHsgXG4gIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmltYWdlcyA9IFtcbiAgICAgIHsgIHVybDogJ2h0dHBzOi8vdW5zcGxhc2guaXQvNDAwLzMwMC8/aW1hZ2U9ODY3JyB9LFxuICAgICAgeyB0aXRsZTogJ0ltYWdlIDInLCB1cmw6ICdodHRwczovL3Vuc3BsYXNoLml0LzQwMC8zMDAvP2ltYWdlPTg3MCcgfSxcbiAgICAgIHsgdGl0bGU6ICdJbWFnZSAzJywgdXJsOiAnaHR0cHM6Ly91bnNwbGFzaC5pdC80MDAvMzAwLz9pbWFnZT04NzYnIH0sXG4gICAgXTtcbiAgfVxuICBcbiAgLy8gbXlDaGFuZ2VFdmVudChhcmdzKXtcbiAgLy8gICB2YXIgY2hhbmdlRXZlbnRUZXh0ID0gJ1BhZ2UgY2hhbmdlZCB0byBpbmRleDogJyArIGFyZ3MuaW5kZXg7XG4gIC8vICAgY29uc29sZS5sb2coY2hhbmdlRXZlbnRUZXh0KTtcblxuICAvLyB9XG4gICAgICAvLyBleHBvcnRzLm15Q2hhbmdlRXZlbnQgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAvLyAgIHZhciBjaGFuZ2VFdmVudFRleHQgPSAnUGFnZSBjaGFuZ2VkIHRvIGluZGV4OiAnICsgYXJncy5pbmRleDtcbiAgICAgIC8vICAgY29uc29sZS5sb2coY2hhbmdlRXZlbnRUZXh0KTtcbiAgICAgIC8vIH07XG4gICAgICBcbiAgICAgIC8vIGV4cG9ydHMubXlTY3JvbGxpbmdFdmVudCA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ1Njcm9sbGluZzogJyArIGFyZ3Muc3RhdGUub2Zmc2V0KTtcbiAgICAgIC8vIH07XG4gICAgIH1cbiJdfQ==
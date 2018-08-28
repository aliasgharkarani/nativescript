"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var enums_1 = require("ui/enums");
var image_1 = require("ui/image");
var stack_layout_1 = require("ui/layouts/stack-layout");
var grid_layout_1 = require("ui/layouts/grid-layout");
var label_1 = require("ui/label");
var gestures_1 = require("ui/gestures");
var image_source_1 = require("image-source");
var image_source_2 = require("image-source");
var CarouselDirective = /** @class */ (function () {
    function CarouselDirective(elem) {
        this.elem = elem;
        this.totalItems = 0;
        this.arrowType = CarouselArrowTypes.NORMAL;
        // Private control attributes
        this.direction = null;
        this.currentImage = 0;
        this.movingImages = false;
        this.indexMoveLeft = null;
        this.indexMoveRight = null;
        this.indexMoveCenter = null;
        this.container = elem.nativeElement;
    }
    CarouselDirective_1 = CarouselDirective;
    CarouselDirective.prototype.ngAfterViewInit = function () {
        this.initOptions();
        this.initContainer();
        this.initImagesLayout();
        this.initSlides();
        this.initControls();
        this.initAutoPlay();
    };
    /**
     * Get and set options from directive
     */
    CarouselDirective.prototype.initOptions = function () {
        // Animation duration (in ms)
        if (this.carouselAnimationSpeed && CarouselDirective_1.isNumeric(this.carouselAnimationSpeed)) {
            this.carouselAnimationSpeed = +this.carouselAnimationSpeed;
        }
        else {
            this.carouselAnimationSpeed = CarouselDirective_1.animationSpeedDefault;
        }
        // Autoplay (in ms) + animation duration
        if (this.carouselSpeed && CarouselDirective_1.isNumeric(this.carouselSpeed)) {
            this.carouselSpeed = +(this.carouselSpeed);
        }
        else {
            this.carouselSpeed = CarouselDirective_1.autoPlaySpeedDefault;
        }
        // Set arrow type
        if (this.carouselArrows) {
            switch (this.carouselArrows) {
                case 'none':
                    this.arrowType = CarouselArrowTypes.NONE;
                    break;
                case 'small':
                    this.arrowType = CarouselArrowTypes.SMALL;
                    break;
                case 'normal':
                    this.arrowType = CarouselArrowTypes.NORMAL;
                    break;
                case 'bold':
                    this.arrowType = CarouselArrowTypes.BOLD;
                    break;
                case 'narrow':
                    this.arrowType = CarouselArrowTypes.NARROW;
                    break;
            }
        }
    };
    /**
     * Init carousel layout
     */
    CarouselDirective.prototype.initContainer = function () {
        this.container.horizontalAlignment = "center";
        this.container.addRow(new grid_layout_1.ItemSpec(1, "auto"));
        this.container.addColumn(new grid_layout_1.ItemSpec(1, "star"));
        this.container.addColumn(new grid_layout_1.ItemSpec(1, "star"));
    };
    /**
     * Init sliders layout
     */
    CarouselDirective.prototype.initImagesLayout = function () {
        this.totalItems = this.carousel.length;
        this.carouselSlides = new grid_layout_1.GridLayout();
        grid_layout_1.GridLayout.setColumnSpan(this.carouselSlides, 2);
        this.container.addChild(this.carouselSlides);
    };
    /**
     * Init carousel sliders provided in "carousel" directive attribute
     */
    CarouselDirective.prototype.initSlides = function () {
        var _this = this;
        this.carousel.forEach(function (slide, i) {
            var gridLayout = new grid_layout_1.GridLayout();
            gridLayout.addRow(new grid_layout_1.ItemSpec(1, "auto"));
            gridLayout.visibility = i == 0 ? "visible" : "collapse";
            if (slide.url) {
                var image = CarouselDirective_1.generateImageSliderFromUrl(slide.url);
                gridLayout.addChild(image);
            }
            if (slide.file && slide.file.indexOf('res://') !== 0) {
                var image = CarouselDirective_1.generateImageSliderFromFile(slide.file);
                gridLayout.addChild(image);
            }
            if (slide.file && slide.file.indexOf('res://') === 0) {
                var image = CarouselDirective_1.generateImageSliderFromResource(slide.file);
                gridLayout.addChild(image);
            }
            if (slide.title) {
                var title = CarouselDirective_1.generateTitleSlider(slide.title);
                if (_this.carouselLabelOverlay) {
                    gridLayout.addRow(new grid_layout_1.ItemSpec(1, "auto"));
                    grid_layout_1.GridLayout.setRow(title, 1);
                }
                gridLayout.addChild(title);
            }
            _this.carouselSlides.addChild(gridLayout);
        });
    };
    /**
     * Load images from URL
     * @param src
     * @returns {Image}
     */
    CarouselDirective.generateImageSliderFromUrl = function (src) {
        var image = new image_1.Image();
        image.src = src;
        image.className = "slider-image";
        return image;
    };
    /**
     * Load images from file
     * @param path
     * @returns {Image}
     */
    CarouselDirective.generateImageSliderFromFile = function (path) {
        var image = new image_1.Image();
        image.imageSource = image_source_1.fromFile(path);
        image.className = "slider-image";
        return image;
    };
    /**
     * Load images from file
     * @param path
     * @returns {Image}
     */
    CarouselDirective.generateImageSliderFromResource = function (path) {
        var image = new image_1.Image();
        var pathRaw = path.replace('res://', '');
        image.imageSource = image_source_2.fromResource(pathRaw);
        image.className = "slider-image";
        return image;
    };
    /**
     * Generate title slider element
     * @param title
     * @returns {Label}
     */
    CarouselDirective.generateTitleSlider = function (title) {
        var label = new label_1.Label();
        label.text = title;
        label.textWrap = true;
        label.className = 'slider-title';
        return label;
    };
    /**
     * Init carousel controls
     */
    CarouselDirective.prototype.initControls = function () {
        var _this = this;
        if (this.totalItems > 1) {
            // Get Arrow type
            var arrowType = this.getArrowType();
            // Left arrow label
            var lLabel = new label_1.Label();
            lLabel.text = String.fromCharCode(parseInt(arrowType.l, 16));
            // Left arrow layout
            var lStackLayout = new stack_layout_1.StackLayout();
            lStackLayout.addChild(lLabel);
            lStackLayout.horizontalAlignment = "left";
            lStackLayout.on(gestures_1.GestureTypes.tap, function () {
                _this.stopStartAutoplay();
                _this.swipe(CarouselDirections.DIRECTION_LEFT);
            });
            lStackLayout.className = 'arrow arrow-left';
            grid_layout_1.GridLayout.setColumn(lStackLayout, 0);
            this.container.addChild(lStackLayout);
            // Right arrow label
            var rLabel = new label_1.Label();
            rLabel.text = String.fromCharCode(parseInt(arrowType.r, 16));
            // Left arrow layout
            var rStackLayout = new stack_layout_1.StackLayout();
            rStackLayout.addChild(rLabel);
            rStackLayout.horizontalAlignment = "right";
            rStackLayout.on(gestures_1.GestureTypes.tap, function () {
                _this.stopStartAutoplay();
                _this.swipe(CarouselDirections.DIRECTION_RIGHT);
            });
            rStackLayout.className = 'arrow arrow-right';
            grid_layout_1.GridLayout.setColumn(rStackLayout, 1);
            this.container.addChild(rStackLayout);
        }
    };
    /**
     * Init caroussel autoplay
     */
    CarouselDirective.prototype.initAutoPlay = function () {
        var _this = this;
        if (this.carouselSpeed && CarouselDirective_1.isNumeric(this.carouselSpeed)) {
            clearInterval(this.autoPlayIntervalId);
            this.autoPlayIntervalId = setInterval(function () {
                _this.swipe(CarouselDirections.DIRECTION_RIGHT);
            }, this.carouselSpeed + this.carouselAnimationSpeed);
        }
    };
    /**
     * Stop on gesture detected, resume after 4 seconds
     */
    CarouselDirective.prototype.stopStartAutoplay = function () {
        var _this = this;
        if (this.autoPlayIntervalId) {
            clearTimeout(this.autoPlayTimeoutId);
            clearInterval(this.autoPlayIntervalId);
            this.autoPlayTimeoutId = setTimeout(function () {
                _this.swipe(CarouselDirections.DIRECTION_RIGHT);
                _this.initAutoPlay();
            }, 4000);
        }
    };
    /**
     * Animate right to left or left to right
     * @param direction
     * @returns {boolean}
     */
    CarouselDirective.prototype.swipe = function (direction) {
        var _this = this;
        // Do nothing, hay solo una imagen...
        if (this.totalItems < 2 || this.movingImages) {
            return false;
        }
        // Animate slides
        this.direction = direction;
        this.movingImages = true;
        this.setDirectionValues();
        this.animateSlides();
        // Reset all after animation
        setTimeout(function () { return _this.resetAnimationValues(); }, this.carouselAnimationSpeed);
    };
    /**
     * Animate slides
     */
    CarouselDirective.prototype.animateSlides = function () {
        for (var i = 0; i < this.carouselSlides.getChildrenCount(); i++) {
            // Get view
            var view = this.carouselSlides.getChildAt(i);
            // Get element width + image visibility
            var elementWidth = this.elem.nativeElement.getActualSize().width;
            view.visibility = [this.indexMoveCenter, this.indexMoveLeft, this.indexMoveRight].indexOf(i) > -1 ? "visible" : "collapse";
            // Perfrom animation
            this.checkCL(view, i, elementWidth);
            this.checkCR(view, i, elementWidth);
            this.checkRC(view, i, elementWidth);
            this.checkLC(view, i, elementWidth);
        }
    };
    /**
     * Move image center -> left
     * @param view
     * @param index
     * @param elementWidth
     */
    CarouselDirective.prototype.checkCL = function (view, index, elementWidth) {
        if (this.indexMoveLeft == index) {
            view.translateX = 0;
            view.animate({
                translate: { x: elementWidth, y: 0 },
                duration: this.carouselAnimationSpeed,
                curve: enums_1.AnimationCurve.easeIn
            });
        }
    };
    /**
     * Move image right -> center
     * @param view
     * @param index
     * @param elementWidth
     */
    CarouselDirective.prototype.checkRC = function (view, index, elementWidth) {
        if (this.indexMoveCenter == index && this.direction == CarouselDirections.DIRECTION_LEFT) {
            view.translateX = -elementWidth;
            view.animate({
                translate: { x: 0, y: 0 },
                duration: this.carouselAnimationSpeed,
                curve: enums_1.AnimationCurve.easeOut
            });
        }
    };
    /**
     * Move image center -> right
     * @param view
     * @param index
     * @param elementWidth
     */
    CarouselDirective.prototype.checkCR = function (view, index, elementWidth) {
        if (this.indexMoveRight == index) {
            view.translateX = 0;
            view.animate({
                translate: { x: -elementWidth, y: 0 },
                duration: this.carouselAnimationSpeed,
                curve: enums_1.AnimationCurve.easeIn
            });
        }
    };
    /**
     * Move image left -> center
     * @param view
     * @param index
     * @param elementWidth
     */
    CarouselDirective.prototype.checkLC = function (view, index, elementWidth) {
        if (this.indexMoveCenter == index && this.direction == CarouselDirections.DIRECTION_RIGHT) {
            view.translateX = elementWidth;
            view.animate({
                translate: { x: 0, y: 0 },
                duration: this.carouselAnimationSpeed,
                curve: enums_1.AnimationCurve.easeOut
            });
        }
    };
    /**
     * Set values to perform the animation
     */
    CarouselDirective.prototype.setDirectionValues = function () {
        switch (this.direction) {
            // right to left
            case CarouselDirections.DIRECTION_LEFT:
                this.indexMoveLeft = this.currentImage;
                this.currentImage = ((this.currentImage == 0 ? this.totalItems : this.currentImage) - 1) % this.totalItems;
                this.indexMoveCenter = this.currentImage;
                break;
            // left to right
            case CarouselDirections.DIRECTION_RIGHT:
                this.indexMoveRight = this.currentImage;
                this.currentImage = (this.currentImage + 1) % this.totalItems;
                this.indexMoveCenter = this.currentImage;
                break;
        }
    };
    /**
     * Reset values after animation
     */
    CarouselDirective.prototype.resetAnimationValues = function () {
        this.indexMoveLeft = null;
        this.indexMoveRight = null;
        this.indexMoveCenter = null;
        this.movingImages = false;
    };
    /**
     * Get arrow type to be displayed in frontend
     * @returns {{l: string, r: string}}
     */
    CarouselDirective.prototype.getArrowType = function () {
        var ret = { l: '', r: '' };
        switch (this.arrowType) {
            case CarouselArrowTypes.NONE:
                ret.l = '';
                ret.r = '';
                break;
            case CarouselArrowTypes.SMALL:
                ret.l = '2039';
                ret.r = '203A';
                break;
            default:
            case CarouselArrowTypes.NORMAL:
                ret.l = '276E';
                ret.r = '276F';
                break;
            case CarouselArrowTypes.BOLD:
                ret.l = '2770';
                ret.r = '2771';
                break;
            case CarouselArrowTypes.NARROW:
                ret.l = '2329';
                ret.r = '232A';
                break;
        }
        return ret;
    };
    /**
     * Check if numeric value
     * @param value
     * @returns {boolean}
     */
    CarouselDirective.isNumeric = function (value) {
        return !isNaN(value - parseFloat(value));
    };
    CarouselDirective.animationSpeedDefault = 400; // in ms
    CarouselDirective.autoPlaySpeedDefault = 0; // in ms
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CarouselDirective.prototype, "carousel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CarouselDirective.prototype, "carouselSpeed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CarouselDirective.prototype, "carouselArrows", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CarouselDirective.prototype, "carouselLabelOverlay", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], CarouselDirective.prototype, "carouselAnimationSpeed", void 0);
    CarouselDirective = CarouselDirective_1 = __decorate([
        core_1.Directive({ selector: '[carousel]' }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], CarouselDirective);
    return CarouselDirective;
    var CarouselDirective_1;
}());
exports.CarouselDirective = CarouselDirective;
var CarouselArrowTypes;
(function (CarouselArrowTypes) {
    CarouselArrowTypes[CarouselArrowTypes["NONE"] = 0] = "NONE";
    CarouselArrowTypes[CarouselArrowTypes["SMALL"] = 1] = "SMALL";
    CarouselArrowTypes[CarouselArrowTypes["NARROW"] = 2] = "NARROW";
    CarouselArrowTypes[CarouselArrowTypes["NORMAL"] = 3] = "NORMAL";
    CarouselArrowTypes[CarouselArrowTypes["BOLD"] = 4] = "BOLD";
})(CarouselArrowTypes || (CarouselArrowTypes = {}));
var CarouselDirections;
(function (CarouselDirections) {
    CarouselDirections[CarouselDirections["DIRECTION_LEFT"] = 0] = "DIRECTION_LEFT";
    CarouselDirections[CarouselDirections["DIRECTION_RIGHT"] = 1] = "DIRECTION_RIGHT";
})(CarouselDirections || (CarouselDirections = {}));
var CarouselSlide = /** @class */ (function () {
    function CarouselSlide() {
    }
    return CarouselSlide;
}());
exports.CarouselSlide = CarouselSlide;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlc2NyaXB0LW5nMi1jYXJvdXNlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdGl2ZXNjcmlwdC1uZzItY2Fyb3VzZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEU7QUFDMUUsa0NBQXdDO0FBQ3hDLGtDQUErQjtBQUMvQix3REFBb0Q7QUFDcEQsc0RBQTREO0FBRzVELGtDQUErQjtBQUMvQix3Q0FBeUM7QUFHekMsNkNBQXNDO0FBQ3RDLDZDQUEwQztBQUcxQztJQTJCSSwyQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQXBCNUIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUd2QixjQUFTLEdBQVcsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1FBRXRELDZCQUE2QjtRQUNyQixjQUFTLEdBQXVCLElBQUksQ0FBQztRQUNyQyxpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixrQkFBYSxHQUFXLElBQUksQ0FBQztRQUM3QixtQkFBYyxHQUFXLElBQUksQ0FBQztRQUM5QixvQkFBZSxHQUFXLElBQUksQ0FBQztRQVVuQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDeEMsQ0FBQzswQkE3QlEsaUJBQWlCO0lBK0IxQiwyQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSyx1Q0FBVyxHQUFuQjtRQUVJLDZCQUE2QjtRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMs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Q0FBQTtJQUNKLDZEQUFLLENBQUE7SUFDTCwrREFBTSxDQUFBO0lBQ04sK0RBQU0sQ0FBQTtJQUNOLDJEQUFJLENBQUE7QUFDUixDQUFDLEVBTkksa0JBQWtCLEtBQWxCLGtCQUFrQixRQU10QjtBQUVELElBQUssa0JBR0o7QUFIRCxXQUFLLGtCQUFrQjtJQUNuQiwrRUFBYyxDQUFBO0lBQ2QsaUZBQWUsQ0FBQTtBQUNuQixDQUFDLEVBSEksa0JBQWtCLEtBQWxCLGtCQUFrQixRQUd0QjtBQUVEO0lBQUE7SUFJQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0IHtJbWFnZX0gZnJvbSBcInVpL2ltYWdlXCI7XG5pbXBvcnQge1N0YWNrTGF5b3V0fSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7R3JpZExheW91dCwgSXRlbVNwZWN9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQge0dyaWRVbml0VHlwZX0gZnJvbSBcInVpL2xheW91dHMvZ3JpZC1sYXlvdXRcIjtcbmltcG9ydCB7SG9yaXpvbnRhbEFsaWdubWVudH0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQge0xhYmVsfSBmcm9tIFwidWkvbGFiZWxcIjtcbmltcG9ydCB7R2VzdHVyZVR5cGVzfSBmcm9tIFwidWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7Vmlld30gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHtWaXNpYmlsaXR5fSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7ZnJvbUZpbGV9IGZyb20gXCJpbWFnZS1zb3VyY2VcIjtcbmltcG9ydCB7ZnJvbVJlc291cmNlfSBmcm9tIFwiaW1hZ2Utc291cmNlXCI7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2Nhcm91c2VsXSd9KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhbmltYXRpb25TcGVlZERlZmF1bHQ6IG51bWJlciA9IDQwMDsgLy8gaW4gbXNcbiAgICBwcml2YXRlIHN0YXRpYyBhdXRvUGxheVNwZWVkRGVmYXVsdDogbnVtYmVyID0gMDsgLy8gaW4gbXNcblxuICAgIHByaXZhdGUgY29udGFpbmVyOiBHcmlkTGF5b3V0O1xuICAgIHByaXZhdGUgY2Fyb3VzZWxTbGlkZXM6IEdyaWRMYXlvdXQ7XG4gICAgcHJpdmF0ZSB0b3RhbEl0ZW1zOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgYXV0b1BsYXlJbnRlcnZhbElkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBhdXRvUGxheVRpbWVvdXRJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgYXJyb3dUeXBlOiBudW1iZXIgPSBDYXJvdXNlbEFycm93VHlwZXMuTk9STUFMO1xuXG4gICAgLy8gUHJpdmF0ZSBjb250cm9sIGF0dHJpYnV0ZXNcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogQ2Fyb3VzZWxEaXJlY3Rpb25zID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnRJbWFnZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIG1vdmluZ0ltYWdlczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaW5kZXhNb3ZlTGVmdDogbnVtYmVyID0gbnVsbDtcbiAgICBwcml2YXRlIGluZGV4TW92ZVJpZ2h0OiBudW1iZXIgPSBudWxsO1xuICAgIHByaXZhdGUgaW5kZXhNb3ZlQ2VudGVyOiBudW1iZXIgPSBudWxsO1xuXG4gICAgLy8gT3B0aW9uc1xuICAgIEBJbnB1dCgpIGNhcm91c2VsOiBhbnk7XG4gICAgQElucHV0KCkgY2Fyb3VzZWxTcGVlZDogbnVtYmVyOyAvLyBhdXRvcGxheSBzcGVlZCAobXMpXG4gICAgQElucHV0KCkgY2Fyb3VzZWxBcnJvd3M6IHN0cmluZzsgLy8gYXJyb3dzIHR5cGVcbiAgICBASW5wdXQoKSBjYXJvdXNlbExhYmVsT3ZlcmxheTogYm9vbGVhbjsgLy8gdGl0bGUgb3ZlciBpbWFnZSAoYm9vbClcbiAgICBASW5wdXQoKSBjYXJvdXNlbEFuaW1hdGlvblNwZWVkOiBudW1iZXI7IC8vIGFuaW1hdGlvbiBzcGVlZFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZWxlbS5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0T3B0aW9ucygpO1xuICAgICAgICB0aGlzLmluaXRDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5pbml0SW1hZ2VzTGF5b3V0KCk7XG4gICAgICAgIHRoaXMuaW5pdFNsaWRlcygpO1xuICAgICAgICB0aGlzLmluaXRDb250cm9scygpO1xuICAgICAgICB0aGlzLmluaXRBdXRvUGxheSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbmQgc2V0IG9wdGlvbnMgZnJvbSBkaXJlY3RpdmVcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRPcHRpb25zKCkge1xuXG4gICAgICAgIC8vIEFuaW1hdGlvbiBkdXJhdGlvbiAoaW4gbXMpXG4gICAgICAgIGlmICh0aGlzLmNhcm91c2VsQW5pbWF0aW9uU3BlZWQgJiYgQ2Fyb3VzZWxEaXJlY3RpdmUuaXNOdW1lcmljKHRoaXMuY2Fyb3VzZWxBbmltYXRpb25TcGVlZCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxBbmltYXRpb25TcGVlZCA9ICt0aGlzLmNhcm91c2VsQW5pbWF0aW9uU3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhcm91c2VsQW5pbWF0aW9uU3BlZWQgPSBDYXJvdXNlbERpcmVjdGl2ZS5hbmltYXRpb25TcGVlZERlZmF1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdXRvcGxheSAoaW4gbXMpICsgYW5pbWF0aW9uIGR1cmF0aW9uXG4gICAgICAgIGlmICh0aGlzLmNhcm91c2VsU3BlZWQgJiYgQ2Fyb3VzZWxEaXJlY3RpdmUuaXNOdW1lcmljKHRoaXMuY2Fyb3VzZWxTcGVlZCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxTcGVlZCA9ICsodGhpcy5jYXJvdXNlbFNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxTcGVlZCA9IENhcm91c2VsRGlyZWN0aXZlLmF1dG9QbGF5U3BlZWREZWZhdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGFycm93IHR5cGVcbiAgICAgICAgaWYgKHRoaXMuY2Fyb3VzZWxBcnJvd3MpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jYXJvdXNlbEFycm93cykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycm93VHlwZSA9IENhcm91c2VsQXJyb3dUeXBlcy5OT05FO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzbWFsbCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyb3dUeXBlID0gQ2Fyb3VzZWxBcnJvd1R5cGVzLlNNQUxMO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdub3JtYWwnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycm93VHlwZSA9IENhcm91c2VsQXJyb3dUeXBlcy5OT1JNQUw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2JvbGQnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycm93VHlwZSA9IENhcm91c2VsQXJyb3dUeXBlcy5CT0xEO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICduYXJyb3cnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycm93VHlwZSA9IENhcm91c2VsQXJyb3dUeXBlcy5OQVJST1c7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjYXJvdXNlbCBsYXlvdXRcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmhvcml6b250YWxBbGlnbm1lbnQgPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRSb3cobmV3IEl0ZW1TcGVjKDEsIFwiYXV0b1wiKSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENvbHVtbihuZXcgSXRlbVNwZWMoMSwgXCJzdGFyXCIpKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ29sdW1uKG5ldyBJdGVtU3BlYygxLCBcInN0YXJcIikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgc2xpZGVycyBsYXlvdXRcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRJbWFnZXNMYXlvdXQoKSB7XG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IHRoaXMuY2Fyb3VzZWwubGVuZ3RoO1xuICAgICAgICB0aGlzLmNhcm91c2VsU2xpZGVzID0gbmV3IEdyaWRMYXlvdXQoKTtcbiAgICAgICAgR3JpZExheW91dC5zZXRDb2x1bW5TcGFuKHRoaXMuY2Fyb3VzZWxTbGlkZXMsIDIpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmNhcm91c2VsU2xpZGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhcm91c2VsIHNsaWRlcnMgcHJvdmlkZWQgaW4gXCJjYXJvdXNlbFwiIGRpcmVjdGl2ZSBhdHRyaWJ1dGVcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRTbGlkZXMoKSB7XG4gICAgICAgIHRoaXMuY2Fyb3VzZWwuZm9yRWFjaCgoc2xpZGU6IENhcm91c2VsU2xpZGUsIGk6IG51bWJlcikgPT4ge1xuXG4gICAgICAgICAgICBsZXQgZ3JpZExheW91dCA9IG5ldyBHcmlkTGF5b3V0KCk7XG4gICAgICAgICAgICBncmlkTGF5b3V0LmFkZFJvdyhuZXcgSXRlbVNwZWMoMSwgXCJhdXRvXCIpKTtcbiAgICAgICAgICAgIGdyaWRMYXlvdXQudmlzaWJpbGl0eSA9IGkgPT0gMCA/IFwidmlzaWJsZVwiIDogXCJjb2xsYXBzZVwiO1xuXG4gICAgICAgICAgICBpZiAoc2xpZGUudXJsKSB7XG4gICAgICAgICAgICAgICAgbGV0IGltYWdlOiBJbWFnZSA9IENhcm91c2VsRGlyZWN0aXZlLmdlbmVyYXRlSW1hZ2VTbGlkZXJGcm9tVXJsKHNsaWRlLnVybCk7XG4gICAgICAgICAgICAgICAgZ3JpZExheW91dC5hZGRDaGlsZChpbWFnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzbGlkZS5maWxlICYmIHNsaWRlLmZpbGUuaW5kZXhPZigncmVzOi8vJykgIT09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2U6IEltYWdlID0gQ2Fyb3VzZWxEaXJlY3RpdmUuZ2VuZXJhdGVJbWFnZVNsaWRlckZyb21GaWxlKHNsaWRlLmZpbGUpO1xuICAgICAgICAgICAgICAgIGdyaWRMYXlvdXQuYWRkQ2hpbGQoaW1hZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2xpZGUuZmlsZSAmJiBzbGlkZS5maWxlLmluZGV4T2YoJ3JlczovLycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGltYWdlOiBJbWFnZSA9IENhcm91c2VsRGlyZWN0aXZlLmdlbmVyYXRlSW1hZ2VTbGlkZXJGcm9tUmVzb3VyY2Uoc2xpZGUuZmlsZSk7XG4gICAgICAgICAgICAgICAgZ3JpZExheW91dC5hZGRDaGlsZChpbWFnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzbGlkZS50aXRsZSkge1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZTogTGFiZWwgPSBDYXJvdXNlbERpcmVjdGl2ZS5nZW5lcmF0ZVRpdGxlU2xpZGVyKHNsaWRlLnRpdGxlKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJvdXNlbExhYmVsT3ZlcmxheSkge1xuICAgICAgICAgICAgICAgICAgICBncmlkTGF5b3V0LmFkZFJvdyhuZXcgSXRlbVNwZWMoMSwgXCJhdXRvXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgR3JpZExheW91dC5zZXRSb3codGl0bGUsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBncmlkTGF5b3V0LmFkZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxTbGlkZXMuYWRkQ2hpbGQoZ3JpZExheW91dCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgaW1hZ2VzIGZyb20gVVJMXG4gICAgICogQHBhcmFtIHNyY1xuICAgICAqIEByZXR1cm5zIHtJbWFnZX1cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZUltYWdlU2xpZGVyRnJvbVVybChzcmM6IHN0cmluZyk6IEltYWdlIHtcbiAgICAgICAgbGV0IGltYWdlOiBJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIGltYWdlLmNsYXNzTmFtZSA9IFwic2xpZGVyLWltYWdlXCI7XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGltYWdlcyBmcm9tIGZpbGVcbiAgICAgKiBAcGFyYW0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtJbWFnZX1cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZUltYWdlU2xpZGVyRnJvbUZpbGUocGF0aDogc3RyaW5nKTogSW1hZ2Uge1xuICAgICAgICBsZXQgaW1hZ2U6IEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLmltYWdlU291cmNlID0gZnJvbUZpbGUocGF0aCk7XG4gICAgICAgIGltYWdlLmNsYXNzTmFtZSA9IFwic2xpZGVyLWltYWdlXCI7XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGltYWdlcyBmcm9tIGZpbGVcbiAgICAgKiBAcGFyYW0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtJbWFnZX1cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZUltYWdlU2xpZGVyRnJvbVJlc291cmNlKHBhdGg6IHN0cmluZyk6IEltYWdlIHtcbiAgICAgICAgbGV0IGltYWdlOiBJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsZXQgcGF0aFJhdzogc3RyaW5nID0gcGF0aC5yZXBsYWNlKCdyZXM6Ly8nLCAnJyk7XG4gICAgICAgIGltYWdlLmltYWdlU291cmNlID0gZnJvbVJlc291cmNlKHBhdGhSYXcpO1xuICAgICAgICBpbWFnZS5jbGFzc05hbWUgPSBcInNsaWRlci1pbWFnZVwiO1xuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgdGl0bGUgc2xpZGVyIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gdGl0bGVcbiAgICAgKiBAcmV0dXJucyB7TGFiZWx9XG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2VuZXJhdGVUaXRsZVNsaWRlcih0aXRsZTogc3RyaW5nKTogTGFiZWwge1xuICAgICAgICBsZXQgbGFiZWwgPSBuZXcgTGFiZWwoKTtcbiAgICAgICAgbGFiZWwudGV4dCA9IHRpdGxlO1xuICAgICAgICBsYWJlbC50ZXh0V3JhcCA9IHRydWU7XG4gICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9ICdzbGlkZXItdGl0bGUnO1xuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBjYXJvdXNlbCBjb250cm9sc1xuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdENvbnRyb2xzKCkge1xuICAgICAgICBpZiAodGhpcy50b3RhbEl0ZW1zID4gMSkge1xuXG4gICAgICAgICAgICAvLyBHZXQgQXJyb3cgdHlwZVxuICAgICAgICAgICAgbGV0IGFycm93VHlwZSA9IHRoaXMuZ2V0QXJyb3dUeXBlKCk7XG5cbiAgICAgICAgICAgIC8vIExlZnQgYXJyb3cgbGFiZWxcbiAgICAgICAgICAgIGxldCBsTGFiZWwgPSBuZXcgTGFiZWwoKTtcbiAgICAgICAgICAgIGxMYWJlbC50ZXh0ID0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChhcnJvd1R5cGUubCwgMTYpKTtcblxuICAgICAgICAgICAgLy8gTGVmdCBhcnJvdyBsYXlvdXRcbiAgICAgICAgICAgIGxldCBsU3RhY2tMYXlvdXQgPSBuZXcgU3RhY2tMYXlvdXQoKTtcbiAgICAgICAgICAgIGxTdGFja0xheW91dC5hZGRDaGlsZChsTGFiZWwpO1xuICAgICAgICAgICAgbFN0YWNrTGF5b3V0Lmhvcml6b250YWxBbGlnbm1lbnQgPSBcImxlZnRcIjtcbiAgICAgICAgICAgIGxTdGFja0xheW91dC5vbihHZXN0dXJlVHlwZXMudGFwLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wU3RhcnRBdXRvcGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpcGUoQ2Fyb3VzZWxEaXJlY3Rpb25zLkRJUkVDVElPTl9MRUZUKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbFN0YWNrTGF5b3V0LmNsYXNzTmFtZSA9ICdhcnJvdyBhcnJvdy1sZWZ0JztcbiAgICAgICAgICAgIEdyaWRMYXlvdXQuc2V0Q29sdW1uKGxTdGFja0xheW91dCwgMCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDaGlsZChsU3RhY2tMYXlvdXQpO1xuXG4gICAgICAgICAgICAvLyBSaWdodCBhcnJvdyBsYWJlbFxuICAgICAgICAgICAgbGV0IHJMYWJlbCA9IG5ldyBMYWJlbCgpO1xuICAgICAgICAgICAgckxhYmVsLnRleHQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGFycm93VHlwZS5yLCAxNikpO1xuXG4gICAgICAgICAgICAvLyBMZWZ0IGFycm93IGxheW91dFxuICAgICAgICAgICAgbGV0IHJTdGFja0xheW91dCA9IG5ldyBTdGFja0xheW91dCgpO1xuICAgICAgICAgICAgclN0YWNrTGF5b3V0LmFkZENoaWxkKHJMYWJlbCk7XG4gICAgICAgICAgICByU3RhY2tMYXlvdXQuaG9yaXpvbnRhbEFsaWdubWVudCA9IFwicmlnaHRcIjtcbiAgICAgICAgICAgIHJTdGFja0xheW91dC5vbihHZXN0dXJlVHlwZXMudGFwLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wU3RhcnRBdXRvcGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpcGUoQ2Fyb3VzZWxEaXJlY3Rpb25zLkRJUkVDVElPTl9SSUdIVCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJTdGFja0xheW91dC5jbGFzc05hbWUgPSAnYXJyb3cgYXJyb3ctcmlnaHQnO1xuICAgICAgICAgICAgR3JpZExheW91dC5zZXRDb2x1bW4oclN0YWNrTGF5b3V0LCAxKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENoaWxkKHJTdGFja0xheW91dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNhcm91c3NlbCBhdXRvcGxheVxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdEF1dG9QbGF5KCkge1xuICAgICAgICBpZiAodGhpcy5jYXJvdXNlbFNwZWVkICYmIENhcm91c2VsRGlyZWN0aXZlLmlzTnVtZXJpYyh0aGlzLmNhcm91c2VsU3BlZWQpKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1BsYXlJbnRlcnZhbElkKTtcbiAgICAgICAgICAgIHRoaXMuYXV0b1BsYXlJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpcGUoQ2Fyb3VzZWxEaXJlY3Rpb25zLkRJUkVDVElPTl9SSUdIVCk7XG4gICAgICAgICAgICB9LCB0aGlzLmNhcm91c2VsU3BlZWQgKyB0aGlzLmNhcm91c2VsQW5pbWF0aW9uU3BlZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcCBvbiBnZXN0dXJlIGRldGVjdGVkLCByZXN1bWUgYWZ0ZXIgNCBzZWNvbmRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdG9wU3RhcnRBdXRvcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1BsYXlJbnRlcnZhbElkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hdXRvUGxheVRpbWVvdXRJZCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1BsYXlJbnRlcnZhbElkKTtcbiAgICAgICAgICAgIHRoaXMuYXV0b1BsYXlUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXBlKENhcm91c2VsRGlyZWN0aW9ucy5ESVJFQ1RJT05fUklHSFQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEF1dG9QbGF5KCk7XG4gICAgICAgICAgICB9LCA0MDAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW5pbWF0ZSByaWdodCB0byBsZWZ0IG9yIGxlZnQgdG8gcmlnaHRcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHJpdmF0ZSBzd2lwZShkaXJlY3Rpb246IENhcm91c2VsRGlyZWN0aW9ucykge1xuXG4gICAgICAgIC8vIERvIG5vdGhpbmcsIGhheSBzb2xvIHVuYSBpbWFnZW4uLi5cbiAgICAgICAgaWYgKHRoaXMudG90YWxJdGVtcyA8IDIgfHwgdGhpcy5tb3ZpbmdJbWFnZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuaW1hdGUgc2xpZGVzXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLm1vdmluZ0ltYWdlcyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uVmFsdWVzKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVNsaWRlcygpO1xuXG4gICAgICAgIC8vIFJlc2V0IGFsbCBhZnRlciBhbmltYXRpb25cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlc2V0QW5pbWF0aW9uVmFsdWVzKCksIHRoaXMuY2Fyb3VzZWxBbmltYXRpb25TcGVlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW5pbWF0ZSBzbGlkZXNcbiAgICAgKi9cbiAgICBwcml2YXRlIGFuaW1hdGVTbGlkZXMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYXJvdXNlbFNsaWRlcy5nZXRDaGlsZHJlbkNvdW50KCk7IGkrKykge1xuXG4gICAgICAgICAgICAvLyBHZXQgdmlld1xuICAgICAgICAgICAgbGV0IHZpZXc6IFZpZXcgPSB0aGlzLmNhcm91c2VsU2xpZGVzLmdldENoaWxkQXQoaSk7XG5cbiAgICAgICAgICAgIC8vIEdldCBlbGVtZW50IHdpZHRoICsgaW1hZ2UgdmlzaWJpbGl0eVxuICAgICAgICAgICAgbGV0IGVsZW1lbnRXaWR0aCA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmdldEFjdHVhbFNpemUoKS53aWR0aDtcbiAgICAgICAgICAgIHZpZXcudmlzaWJpbGl0eSA9IFt0aGlzLmluZGV4TW92ZUNlbnRlciwgdGhpcy5pbmRleE1vdmVMZWZ0LCB0aGlzLmluZGV4TW92ZVJpZ2h0XS5pbmRleE9mKGkpID4gLTEgPyBcInZpc2libGVcIiA6IFwiY29sbGFwc2VcIjtcblxuICAgICAgICAgICAgLy8gUGVyZnJvbSBhbmltYXRpb25cbiAgICAgICAgICAgIHRoaXMuY2hlY2tDTCh2aWV3LCBpLCBlbGVtZW50V2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0NSKHZpZXcsIGksIGVsZW1lbnRXaWR0aCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrUkModmlldywgaSwgZWxlbWVudFdpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tMQyh2aWV3LCBpLCBlbGVtZW50V2lkdGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSBpbWFnZSBjZW50ZXIgLT4gbGVmdFxuICAgICAqIEBwYXJhbSB2aWV3XG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICogQHBhcmFtIGVsZW1lbnRXaWR0aFxuICAgICAqL1xuICAgIHByaXZhdGUgY2hlY2tDTCh2aWV3OiBWaWV3LCBpbmRleDogbnVtYmVyLCBlbGVtZW50V2lkdGg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5pbmRleE1vdmVMZWZ0ID09IGluZGV4KSB7XG4gICAgICAgICAgICB2aWV3LnRyYW5zbGF0ZVggPSAwO1xuICAgICAgICAgICAgdmlldy5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHt4OiBlbGVtZW50V2lkdGgsIHk6IDB9LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmNhcm91c2VsQW5pbWF0aW9uU3BlZWQsXG4gICAgICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGltYWdlIHJpZ2h0IC0+IGNlbnRlclxuICAgICAqIEBwYXJhbSB2aWV3XG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICogQHBhcmFtIGVsZW1lbnRXaWR0aFxuICAgICAqL1xuICAgIHByaXZhdGUgY2hlY2tSQyh2aWV3OiBWaWV3LCBpbmRleDogbnVtYmVyLCBlbGVtZW50V2lkdGg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5pbmRleE1vdmVDZW50ZXIgPT0gaW5kZXggJiYgdGhpcy5kaXJlY3Rpb24gPT0gQ2Fyb3VzZWxEaXJlY3Rpb25zLkRJUkVDVElPTl9MRUZUKSB7XG4gICAgICAgICAgICB2aWV3LnRyYW5zbGF0ZVggPSAtZWxlbWVudFdpZHRoO1xuICAgICAgICAgICAgdmlldy5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5jYXJvdXNlbEFuaW1hdGlvblNwZWVkLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgaW1hZ2UgY2VudGVyIC0+IHJpZ2h0XG4gICAgICogQHBhcmFtIHZpZXdcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKiBAcGFyYW0gZWxlbWVudFdpZHRoXG4gICAgICovXG4gICAgcHJpdmF0ZSBjaGVja0NSKHZpZXc6IFZpZXcsIGluZGV4OiBudW1iZXIsIGVsZW1lbnRXaWR0aDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmluZGV4TW92ZVJpZ2h0ID09IGluZGV4KSB7XG4gICAgICAgICAgICB2aWV3LnRyYW5zbGF0ZVggPSAwO1xuICAgICAgICAgICAgdmlldy5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHt4OiAtZWxlbWVudFdpZHRoLCB5OiAwfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5jYXJvdXNlbEFuaW1hdGlvblNwZWVkLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZSBpbWFnZSBsZWZ0IC0+IGNlbnRlclxuICAgICAqIEBwYXJhbSB2aWV3XG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICogQHBhcmFtIGVsZW1lbnRXaWR0aFxuICAgICAqL1xuICAgIHByaXZhdGUgY2hlY2tMQyh2aWV3OiBWaWV3LCBpbmRleDogbnVtYmVyLCBlbGVtZW50V2lkdGg6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5pbmRleE1vdmVDZW50ZXIgPT0gaW5kZXggJiYgdGhpcy5kaXJlY3Rpb24gPT0gQ2Fyb3VzZWxEaXJlY3Rpb25zLkRJUkVDVElPTl9SSUdIVCkge1xuICAgICAgICAgICAgdmlldy50cmFuc2xhdGVYID0gZWxlbWVudFdpZHRoO1xuICAgICAgICAgICAgdmlldy5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5jYXJvdXNlbEFuaW1hdGlvblNwZWVkLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB2YWx1ZXMgdG8gcGVyZm9ybSB0aGUgYW5pbWF0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXREaXJlY3Rpb25WYWx1ZXMoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcblxuICAgICAgICAgICAgLy8gcmlnaHQgdG8gbGVmdFxuICAgICAgICAgICAgY2FzZSBDYXJvdXNlbERpcmVjdGlvbnMuRElSRUNUSU9OX0xFRlQ6XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleE1vdmVMZWZ0ID0gdGhpcy5jdXJyZW50SW1hZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSAoKHRoaXMuY3VycmVudEltYWdlID09IDAgPyB0aGlzLnRvdGFsSXRlbXMgOiB0aGlzLmN1cnJlbnRJbWFnZSkgLSAxKSAlIHRoaXMudG90YWxJdGVtcztcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4TW92ZUNlbnRlciA9IHRoaXMuY3VycmVudEltYWdlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBsZWZ0IHRvIHJpZ2h0XG4gICAgICAgICAgICBjYXNlIENhcm91c2VsRGlyZWN0aW9ucy5ESVJFQ1RJT05fUklHSFQ6XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleE1vdmVSaWdodCA9IHRoaXMuY3VycmVudEltYWdlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlID0gKHRoaXMuY3VycmVudEltYWdlICsgMSkgJSB0aGlzLnRvdGFsSXRlbXM7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleE1vdmVDZW50ZXIgPSB0aGlzLmN1cnJlbnRJbWFnZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHZhbHVlcyBhZnRlciBhbmltYXRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIHJlc2V0QW5pbWF0aW9uVmFsdWVzKCkge1xuICAgICAgICB0aGlzLmluZGV4TW92ZUxlZnQgPSBudWxsO1xuICAgICAgICB0aGlzLmluZGV4TW92ZVJpZ2h0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbmRleE1vdmVDZW50ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm1vdmluZ0ltYWdlcyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhcnJvdyB0eXBlIHRvIGJlIGRpc3BsYXllZCBpbiBmcm9udGVuZFxuICAgICAqIEByZXR1cm5zIHt7bDogc3RyaW5nLCByOiBzdHJpbmd9fVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0QXJyb3dUeXBlKCkge1xuICAgICAgICBsZXQgcmV0ID0ge2w6ICcnLCByOiAnJ307XG4gICAgICAgIHN3aXRjaCAodGhpcy5hcnJvd1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ2Fyb3VzZWxBcnJvd1R5cGVzLk5PTkU6XG4gICAgICAgICAgICAgICAgcmV0LmwgPSAnJztcbiAgICAgICAgICAgICAgICByZXQuciA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDYXJvdXNlbEFycm93VHlwZXMuU01BTEw6XG4gICAgICAgICAgICAgICAgcmV0LmwgPSAnMjAzOSc7XG4gICAgICAgICAgICAgICAgcmV0LnIgPSAnMjAzQSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FzZSBDYXJvdXNlbEFycm93VHlwZXMuTk9STUFMOlxuICAgICAgICAgICAgICAgIHJldC5sID0gJzI3NkUnO1xuICAgICAgICAgICAgICAgIHJldC5yID0gJzI3NkYnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDYXJvdXNlbEFycm93VHlwZXMuQk9MRDpcbiAgICAgICAgICAgICAgICByZXQubCA9ICcyNzcwJztcbiAgICAgICAgICAgICAgICByZXQuciA9ICcyNzcxJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ2Fyb3VzZWxBcnJvd1R5cGVzLk5BUlJPVzpcbiAgICAgICAgICAgICAgICByZXQubCA9ICcyMzI5JztcbiAgICAgICAgICAgICAgICByZXQuciA9ICcyMzJBJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIG51bWVyaWMgdmFsdWVcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBpc051bWVyaWModmFsdWU6IGFueSkge1xuICAgICAgICByZXR1cm4gIWlzTmFOKHZhbHVlIC0gcGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgIH1cbn1cblxuZW51bSBDYXJvdXNlbEFycm93VHlwZXMge1xuICAgIE5PTkUsXG4gICAgU01BTEwsXG4gICAgTkFSUk9XLFxuICAgIE5PUk1BTCxcbiAgICBCT0xEXG59XG5cbmVudW0gQ2Fyb3VzZWxEaXJlY3Rpb25zIHtcbiAgICBESVJFQ1RJT05fTEVGVCxcbiAgICBESVJFQ1RJT05fUklHSFRcbn1cblxuZXhwb3J0IGNsYXNzIENhcm91c2VsU2xpZGUge1xuICAgIHVybD86IHN0cmluZztcbiAgICBmaWxlPzogc3RyaW5nO1xuICAgIHRpdGxlPzogc3RyaW5nO1xufSJdfQ==
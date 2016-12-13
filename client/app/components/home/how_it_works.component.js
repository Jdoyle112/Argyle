"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var HowItWorksComponent = (function () {
    function HowItWorksComponent() {
        this.blurbs = [
            { title: "Install the App", description: "Install the app on your IOS device from the App Store, or use our web app.", icon: "fa-arrow-circle-o-down" },
            { title: "Create Chats", description: "Create as many separate chats as you'd like, and invite your friends! Each chat can be customized to your ideal preferences.", icon: "fa-comments" },
            { title: "Use our Features", description: "Argyle comes loaded with tons of group focused features. Scroll down to learn more!", icon: "fa-bolt" }
        ];
    }
    return HowItWorksComponent;
}());
HowItWorksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'how_it_works',
        templateUrl: 'how_it_works.component.html'
    }),
    __metadata("design:paramtypes", [])
], HowItWorksComponent);
exports.HowItWorksComponent = HowItWorksComponent;
//# sourceMappingURL=how_it_works.component.js.map
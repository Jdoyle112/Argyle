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
var core_1 = require('@angular/core');
var WhyUsComponent = (function () {
    function WhyUsComponent() {
        this.blurbs = [
            { head: "Seamless Integrations", content: "Argyle integrates with many of your favorite social media apps.", icon: "fa-plug" },
            { head: "Fully Featured", content: "Argyle comes with dozens of features built-in to support group interactions", icon: "fa-tachometer" },
            { head: "Fully Customizable", content: "Hundreds of customizable options for users and group admins alike to make your Argyle experience perfect for your group", icon: "fa-sliders" },
            { head: "Multiple Devices", content: "You can use Argyle across almost any device. We support both mobile, and web app functionality", icon: "fa-laptop" },
            { head: "Groups Focused", content: "Groups are our focus. It doesn't matter the size, if you desire better group communication, we have the answer", icon: "fa-users" },
            { head: "Secure Conversations", content: "Chat with the peace of mind that your messages are private and secure", icon: "fa-shield" }
        ];
    }
    WhyUsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'why_us-section',
            templateUrl: 'why_us.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WhyUsComponent);
    return WhyUsComponent;
}());
exports.WhyUsComponent = WhyUsComponent;
//# sourceMappingURL=why_us.component.js.map
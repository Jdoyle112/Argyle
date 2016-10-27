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
var FeaturesComponent = (function () {
    function FeaturesComponent() {
        this.blurbs = [
            { title: "Unlimited Groups", body: "Create as many groups as you want. Go nuts!", icon: "fa-list" },
            { title: "Multiple Chats within Groups", body: "Create multiple chats for different purposes within the same group.", icon: "fa-sitemap" },
            { title: "Create Polls", body: "Easily customize and create polls for your chats within the app.", icon: "fa-bar-chart" },
            { title: "Dynamic Calendars", body: "Create and display calendars within your groups which can be edited by members.", icon: "fa-calendar" },
            { title: "Notification Settings", body: "Plenty of options to customize when and where you receive notifications.", icon: "fa-bell-o" },
            { title: "Pin Items", body: "Within your chats, pin important information so it's always displayed for group members.", icon: "fa-thumb-tack" },
            { title: "Customizable Chat Options", body: "Chat creators and members alike have plenty of options to customize their chatting experience.", icon: "fa-toggle-off" },
            { title: "Leave Groups Quietly", body: "We all know how annoying it us to be thrown in an unwanted chat, and afraid to leave because everyone is alerted. With Argyle, you can leave chats at will without making a peep!", icon: "fa-user-secret" },
            { title: "Trip Tracking", body: "With trip tracking, you can see where group members are in real time. Now, that late friend who always says he's on his way will be out of excuses!", icon: "fa-map-marker" },
            { title: "Create Events", body: "Easily create events which members can RSVP to within Argyle. It will also sync with Argyle Calendars!", icon: "fa-plus-circle" },
            { title: "Create Tasks", body: "Working on a group project? Easily create tasks within the app and assign them to group members.", icon: "fa-check-square-o" },
            { title: "Integrations", body: "Argyle integrates with many of your favorite apps already such as Giphy, Twitter, Instagram, Facebook, and many more.", icon: "fa-exchange" }
        ];
    }
    FeaturesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'features',
            templateUrl: 'features.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());
exports.FeaturesComponent = FeaturesComponent;
//# sourceMappingURL=features.component.js.map
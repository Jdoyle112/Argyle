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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
/* components */

var nav_component_1 = require('./components/home/nav.component');
var header_component_1 = require('./components/home/header.component');
var why_us_component_1 = require('./components/home/why_us.component');
var how_it_works_component_1 = require('./components/home/how_it_works.component');
var features_component_1 = require('./components/home/features.component');
var testemonials_component_1 = require('./components/home/testemonials.component');
var home_component_1 = require('./components/home/home.component');
var newgroup_component_1 = require('./components/app/newgroup.component');
var group_component_1 = require('./components/app/group.component');
var dialogues_component_1 = require('./components/app/dashboard/dialogues.component');
var dialogue_component_1 = require('./components/app/dashboard/dialogue.component');
var user_component_1 = require('./components/user/user.component');

/* auth0 */
var angular2_jwt_1 = require("angular2-jwt");
var auth_guard_1 = require("./auth.guard");
/* services */
var auth_service_1 = require("./services/auth.service");
var groups_service_1 = require("./services/groups.service");
var dialogues_service_1 = require("./services/dialogues.service");
var members_service_1 = require("./services/members.service");
/* Models */
var group_1 = require("./models/group");
var AppModule = (function () {
    function AppModule() {
    }

AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule, forms_1.FormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
        declarations: [app_component_1.AppComponent, nav_component_1.NavComponent, header_component_1.HeaderComponent, why_us_component_1.WhyUsComponent, how_it_works_component_1.HowItWorksComponent, features_component_1.FeaturesComponent, testemonials_component_1.TestemonialsComponent, home_component_1.HomeComponent, user_component_1.UserComponent, newgroup_component_1.NewGroupComponent, group_component_1.GroupComponent],
        providers: [app_routing_1.appRoutingProviders, angular2_jwt_1.AUTH_PROVIDERS, auth_service_1.Auth, groups_service_1.GroupsService, auth_guard_1.AuthGuard, dialogues_service_1.DialoguesService, members_service_1.MembersService, group_1.Group],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
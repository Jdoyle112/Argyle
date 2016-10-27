"use strict";
var router_1 = require('@angular/router');
var user_component_1 = require('./components/user/user.component');
var home_component_1 = require('./components/home/home.component');
var newgroup_component_1 = require('./components/app/newgroup.component');
var auth_guard_1 = require('./auth.guard');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'profile',
        component: user_component_1.UserComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'new_group',
        component: newgroup_component_1.NewGroupComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
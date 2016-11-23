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
var auth_service_1 = require('../../services/auth.service');
var groups_service_1 = require('../../services/groups.service');
var members_service_1 = require('../../services/members.service');
var group_1 = require('../../models/group');
var NewGroupComponent = (function () {
    function NewGroupComponent(auth, groupsService, group, membersService) {
        var _this = this;
        this.auth = auth;
        this.groupsService = groupsService;
        this.group = group;
        this.membersService = membersService;
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.userId = this.profile.user_id;
        this.groupsService.getGroups(this.userId).subscribe(function (groups) {
            _this.groups = groups;
        });
    }
    NewGroupComponent.prototype.addGroup = function (event) {
        var _this = this;
        event.preventDefault();
        var group = new group_1.Group();
        group.name = this.name;
        group.admin = this.userId;
        group.users = [this.userId];
        group.date_created = new Date();
        this.groupsService.addGroup(group)
            .subscribe(function (group) {
            _this.groups.push(group);
            _this.name = '';
        });
    };
    NewGroupComponent.prototype.deleteGroup = function (id) {
        /*var groups = this.groups;

        this.groupsService.deleteGroup(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0; i < groups.length; i++){
                    if(groups[i]._id == id){
                        groups.splice(i, 1);
                    }
                }
            }
        });*/
    };
    NewGroupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-group',
            templateUrl: 'newgroup.component.html',
            providers: [group_1.Group]
        }), 
        __metadata('design:paramtypes', [auth_service_1.Auth, groups_service_1.GroupsService, group_1.Group, members_service_1.MembersService])
    ], NewGroupComponent);
    return NewGroupComponent;
}());
exports.NewGroupComponent = NewGroupComponent;
//# sourceMappingURL=newgroup.component.js.map
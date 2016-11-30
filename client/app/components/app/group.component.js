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
var dialogues_service_1 = require('../../services/dialogues.service');
var group_1 = require('../../models/group');
var router_1 = require('@angular/router');
var member_1 = require('../../models/member');
var members_service_1 = require('../../services/members.service');
var GroupComponent = (function () {
    function GroupComponent(auth, groupsService, route, dialoguesService, membersService) {
        this.auth = auth;
        this.groupsService = groupsService;
        this.route = route;
        this.dialoguesService = dialoguesService;
        this.membersService = membersService;
        this.group = new group_1.Group();
        this.inputs = [1];
        this.members = []; // 2 things named member, could be issue
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.userEmail = this.profile.email;
        this.username = this.profile.nickname;
        this.userId = this.profile.user_id;
    }
    GroupComponent.prototype.addInput = function (event) {
        event.preventDefault();
        this.inputs.push(2);
    };
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.urlPath = _this.route.snapshot.url[0].path;
            // set online status
            /*var updGroup = this.group;
            updGroup.onlineUsers.push(this.userId);
            this.groupsService.setStatus(this.id, updGroup).subscribe(group => {
                // set status to true
                console.log('group: '+group.users);
                
            });	  */
        });
        this.groupsService.getGroup(this.id).subscribe(function (data) {
            _this.group._id = data._id;
            _this.group.name = data.name;
            _this.group.admin = data.admin;
            _this.group.date_created = data.date_created;
            _this.group.users = data.users;
            _this.groupMembers = data.users;
            // get members
            for (var _i = 0, _a = _this.groupMembers; _i < _a.length; _i++) {
                var id = _a[_i];
                _this.membersService.getMembers(id).subscribe(function (member) {
                    _this.groupMembers.push(member);
                });
            }
        });
    };
    GroupComponent.prototype.addMembers = function (event) {
        var _this = this;
        event.preventDefault();
        var newMember = {
            email: this.memberEmail,
            groupId: this.groupId
        };
        this.membersService.addMember(newMember).
            subscribe(function (member) {
            _this.members.push(member);
            _this.memberEmail = '';
        });
    };
    GroupComponent.prototype.ngOnDestroy = function () {
        // set status to false
        this.sub.unsubscribe();
    };
    GroupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'group',
            templateUrl: 'group.component.html',
            providers: [group_1.Group, member_1.Member]
        }), 
        __metadata('design:paramtypes', [auth_service_1.Auth, groups_service_1.GroupsService, router_1.ActivatedRoute, dialogues_service_1.DialoguesService, members_service_1.MembersService])
    ], GroupComponent);
    return GroupComponent;
}());
exports.GroupComponent = GroupComponent;
//# sourceMappingURL=group.component.js.map
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
var auth_service_1 = require('../../../services/auth.service');
var dialogues_service_1 = require('../../../services/dialogues.service');
var dialogue_1 = require('../../../models/dialogue');
var group_1 = require('../../../models/group');
var DialogueComponent = (function () {
    function DialogueComponent(auth, dialoguesService) {
        this.auth = auth;
        this.dialoguesService = dialoguesService;
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.userEmail = this.profile.email;
        this.username = this.profile.nickname;
        this.userId = this.profile.user_id;
    }
    DialogueComponent.prototype.ngOnInit = function () {
        console.log(this.dialogueId);
    };
    DialogueComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.dialogueId) {
            this.dialoguesService.getDialogue(this.dialogueId).subscribe(function (dialogue) {
                _this.dialogue = dialogue;
                console.log('dialouge: ' + _this.dialogue);
                _this.dialogueName = dialogue.name;
                for (var _i = 0, _a = dialogue.members; _i < _a.length; _i++) {
                    var member = _a[_i];
                    if (member == _this.userId) {
                        // hide join btn
                        _this.isJoined = true;
                    }
                    else {
                        // display join button
                        _this.isJoined = false;
                    }
                }
            });
        }
    };
    DialogueComponent.prototype.joinDialogue = function (event, id) {
        event.preventDefault();
        var updDialogue = {
            _id: this.dialogue._id,
            admin: this.dialogue.admin,
            name: this.dialogue.name,
            members: this.dialogue.members
        };
        updDialogue.members.push(this.userId);
        this.dialoguesService.joinDialogue(id, updDialogue).subscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DialogueComponent.prototype, "groupId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DialogueComponent.prototype, "dialogueId", void 0);
    DialogueComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialogue',
            templateUrl: 'dialogue.component.html',
            providers: [dialogue_1.Dialogue, group_1.Group]
        }), 
        __metadata('design:paramtypes', [auth_service_1.Auth, dialogues_service_1.DialoguesService])
    ], DialogueComponent);
    return DialogueComponent;
}());
exports.DialogueComponent = DialogueComponent;
//# sourceMappingURL=dialogue.component.js.map
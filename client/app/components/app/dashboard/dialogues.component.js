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
var auth_service_1 = require("../../../services/auth.service");
var dialogues_service_1 = require("../../../services/dialogues.service");
var dialogue_1 = require("../../../models/dialogue");
var group_1 = require("../../../models/group");
var DialoguesComponent = (function () {
    function DialoguesComponent(auth, dialoguesService) {
        this.auth = auth;
        this.dialoguesService = dialoguesService;
        this.sendDialogue = new core_1.EventEmitter();
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.userEmail = this.profile.email;
        this.username = this.profile.nickname;
        this.userId = this.profile.user_id;
    }
    DialoguesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all dialogues for sidebar using group id
        this.dialoguesService.getDialogues(this.groupId).subscribe(function (dialogues) {
            _this.dialogues = dialogues;
        });
    };
    DialoguesComponent.prototype.getDialogue = function (event, dialogueId) {
        event.preventDefault();
        this.sendDialogue.emit(dialogueId);
    };
    DialoguesComponent.prototype.addDialogue = function (event) {
        var _this = this;
        event.preventDefault();
        var dialogue = new dialogue_1.Dialogue();
        dialogue.name = this.dialogueName;
        dialogue.admin = this.userId;
        dialogue.members = [this.userId];
        dialogue.public = true;
        dialogue.groupId = this.groupId;
        this.dialoguesService.addDialogue(dialogue)
            .subscribe(function (dialogue) {
            _this.dialogues.push(dialogue);
            _this.dialogueName = '';
        });
    };
    return DialoguesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DialoguesComponent.prototype, "groupId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DialoguesComponent.prototype, "sendDialogue", void 0);
DialoguesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dialogues',
        templateUrl: 'dialogues.component.html',
        providers: [dialogue_1.Dialogue, group_1.Group]
    }),
    __metadata("design:paramtypes", [auth_service_1.Auth, dialogues_service_1.DialoguesService])
], DialoguesComponent);
exports.DialoguesComponent = DialoguesComponent;
//# sourceMappingURL=dialogues.component.js.map
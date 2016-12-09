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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DialoguesService = (function () {
    function DialoguesService(http) {
        this.http = http;
        console.log('task service init..');
    }
    DialoguesService.prototype.getDialogues = function (id) {
        return this.http.get('/api/dialogues/' + id)
            .map(function (res) { return res.json(); });
    };
    DialoguesService.prototype.getDialogue = function (id) {
        return this.http.get('/api/dialogues/dialogue/' + id)
            .map(function (res) { return res.json(); });
    };
    DialoguesService.prototype.addDialogue = function (newDialogue) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/dialogues/newdialogue', JSON.stringify(newDialogue), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DialoguesService.prototype.joinDialogue = function (dialogueId, updDialogue) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/dialogues/join/' + dialogueId, JSON.stringify(updDialogue), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return DialoguesService;
}());
DialoguesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DialoguesService);
exports.DialoguesService = DialoguesService;
//# sourceMappingURL=dialogues.service.js.map
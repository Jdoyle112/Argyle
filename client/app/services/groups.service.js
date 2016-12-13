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
var GroupsService = (function () {
    function GroupsService(http) {
        this.http = http;
        console.log('task service init..');
    }
    GroupsService.prototype.getGroups = function (id) {
        return this.http.get('/api/groups/' + id)
            .map(function (res) { return res.json(); });
    };
    GroupsService.prototype.getGroup = function (id) {
        return this.http.get('/api/groups/group/' + id)
            .map(function (res) { return res.json(); });
    };
    GroupsService.prototype.addGroup = function (newGroup) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/groups/newgroup', JSON.stringify(newGroup), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GroupsService.prototype.deleteGroup = function (id) {
        return this.http.delete('/api/groups/deletegroup/' + id)
            .map(function (res) { return res.json(); });
    };
    GroupsService.prototype.setStatus = function (id, updGroup) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/groups/status/' + id, JSON.stringify(updGroup), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return GroupsService;
}());
GroupsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GroupsService);
exports.GroupsService = GroupsService;
//# sourceMappingURL=groups.service.js.map
"use strict";
var Group = (function () {
    //onlineUsers: Array<string>;
    function Group(name, userId) {
        this.name = name;
        this.admin = userId;
        this.date_created = "";
        this.users = [userId];
    }
    return Group;
}());
exports.Group = Group;
//# sourceMappingURL=group.js.map
"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFFFFF";
    DesignColors["black"] = "000000";
})(DesignColors || (DesignColors = {}));
console.log(DesignColors.white);
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["admin"] = 0] = "admin";
    StatusPermission[StatusPermission["user"] = 1] = "user";
    StatusPermission[StatusPermission["support"] = 2] = "support";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.admin);
console.log(StatusPermission.user);
console.log(StatusPermission.support);

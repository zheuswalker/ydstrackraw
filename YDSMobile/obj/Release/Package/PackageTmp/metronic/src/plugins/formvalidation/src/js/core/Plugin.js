"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Plugin = /** @class */ (function () {
    function Plugin(opts) {
        this.opts = opts;
    }
    Plugin.prototype.setCore = function (core) {
        this.core = core;
        return this;
    };
    Plugin.prototype.install = function () { }; // tslint:disable-line:no-empty
    Plugin.prototype.uninstall = function () { }; // tslint:disable-line:no-empty
    return Plugin;
}());
exports.default = Plugin;
//# sourceMappingURL=Plugin.js.map
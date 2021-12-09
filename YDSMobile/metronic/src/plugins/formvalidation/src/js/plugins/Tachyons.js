"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classSet_1 = require("../utils/classSet");
var Framework_1 = require("./Framework");
var Tachyons = /** @class */ (function (_super) {
    __extends(Tachyons, _super);
    function Tachyons(opts) {
        return _super.call(this, Object.assign({}, {
            formClass: 'fv-plugins-tachyons',
            messageClass: 'small',
            rowInvalidClass: 'red',
            rowPattern: /^(.*)fl(.*)$/,
            rowSelector: '.fl',
            rowValidClass: 'green',
        }, opts)) || this;
    }
    Tachyons.prototype.onIconPlaced = function (e) {
        var type = e.element.getAttribute('type');
        var parent = e.element.parentElement;
        if ('checkbox' === type || 'radio' === type) {
            // Place it after the container of checkbox/radio
            parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
            (0, classSet_1.default)(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
        }
    };
    return Tachyons;
}(Framework_1.default));
exports.default = Tachyons;
//# sourceMappingURL=Tachyons.js.map
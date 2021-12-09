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
var hasClass_1 = require("../utils/hasClass");
var Framework_1 = require("./Framework");
var Spectre = /** @class */ (function (_super) {
    __extends(Spectre, _super);
    function Spectre(opts) {
        // See https://picturepan2.github.io/spectre/elements.html#forms
        return _super.call(this, Object.assign({}, {
            formClass: 'fv-plugins-spectre',
            messageClass: 'form-input-hint',
            rowInvalidClass: 'has-error',
            rowPattern: /^(.*)(col)(-(xs|sm|md|lg))*-[0-9]+(.*)$/,
            rowSelector: '.form-group',
            rowValidClass: 'has-success',
        }, opts)) || this;
    }
    Spectre.prototype.onIconPlaced = function (e) {
        var type = e.element.getAttribute('type');
        var parent = e.element.parentElement;
        if ('checkbox' === type || 'radio' === type) {
            (0, classSet_1.default)(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
            // Place it after the container of checkbox/radio
            if ((0, hasClass_1.default)(parent, "form-".concat(type))) {
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
            }
        }
    };
    return Spectre;
}(Framework_1.default));
exports.default = Spectre;
//# sourceMappingURL=Spectre.js.map
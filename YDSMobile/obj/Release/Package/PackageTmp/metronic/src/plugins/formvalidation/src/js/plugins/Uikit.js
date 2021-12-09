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
var Uikit = /** @class */ (function (_super) {
    __extends(Uikit, _super);
    function Uikit(opts) {
        return _super.call(this, Object.assign({}, {
            formClass: 'fv-plugins-uikit',
            // See https://getuikit.com/docs/text#text-color
            messageClass: 'uk-text-danger',
            rowInvalidClass: 'uk-form-danger',
            rowPattern: /^.*(uk-form-controls|uk-width-[\d+]-[\d+]).*$/,
            rowSelector: '.uk-margin',
            // See https://getuikit.com/docs/form
            rowValidClass: 'uk-form-success',
        }, opts)) || this;
    }
    Uikit.prototype.onIconPlaced = function (e) {
        var type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            var parent_1 = e.element.parentElement;
            (0, classSet_1.default)(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
            parent_1.parentElement.insertBefore(e.iconElement, parent_1.nextSibling);
        }
    };
    return Uikit;
}(Framework_1.default));
exports.default = Uikit;
//# sourceMappingURL=Uikit.js.map
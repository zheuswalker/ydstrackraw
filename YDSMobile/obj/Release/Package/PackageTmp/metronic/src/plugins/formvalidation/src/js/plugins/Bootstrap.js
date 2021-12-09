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
var Bootstrap = /** @class */ (function (_super) {
    __extends(Bootstrap, _super);
    // See https://getbootstrap.com/docs/4.1/components/forms/#custom-styles
    function Bootstrap(opts) {
        return _super.call(this, Object.assign({}, {
            eleInvalidClass: 'is-invalid',
            eleValidClass: 'is-valid',
            formClass: 'fv-plugins-bootstrap',
            messageClass: 'fv-help-block',
            rowInvalidClass: 'has-danger',
            rowPattern: /^(.*)(col|offset)(-(sm|md|lg|xl))*-[0-9]+(.*)$/,
            rowSelector: '.form-group',
            rowValidClass: 'has-success',
        }, opts)) || this;
    }
    Bootstrap.prototype.onIconPlaced = function (e) {
        // Adjust icon place if the field belongs to a `input-group`
        var parent = e.element.parentElement;
        if ((0, hasClass_1.default)(parent, 'input-group')) {
            parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
        }
        var type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            var grandParent = parent.parentElement;
            // Place it after the container of checkbox/radio
            if ((0, hasClass_1.default)(parent, 'form-check')) {
                (0, classSet_1.default)(e.iconElement, {
                    'fv-plugins-icon-check': true,
                });
                parent.parentElement.insertBefore(e.iconElement, parent.nextSibling);
            }
            else if ((0, hasClass_1.default)(parent.parentElement, 'form-check')) {
                (0, classSet_1.default)(e.iconElement, {
                    'fv-plugins-icon-check': true,
                });
                grandParent.parentElement.insertBefore(e.iconElement, grandParent.nextSibling);
            }
        }
    };
    return Bootstrap;
}(Framework_1.default));
exports.default = Bootstrap;
//# sourceMappingURL=Bootstrap.js.map
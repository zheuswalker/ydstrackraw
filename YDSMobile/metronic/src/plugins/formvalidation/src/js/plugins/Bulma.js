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
var Bulma = /** @class */ (function (_super) {
    __extends(Bulma, _super);
    function Bulma(opts) {
        // See http://bulma.io/documentation/elements/form/
        return _super.call(this, Object.assign({}, {
            formClass: 'fv-plugins-bulma',
            messageClass: 'help is-danger',
            rowInvalidClass: 'fv-has-error',
            rowPattern: /^.*field.*$/,
            rowSelector: '.field',
            rowValidClass: 'fv-has-success',
        }, opts)) || this;
    }
    Bulma.prototype.onIconPlaced = function (e) {
        (0, classSet_1.default)(e.iconElement, {
            'fv-plugins-icon': false,
        });
        // Wrap the icon inside a <span class="icon is-small is-right">
        var span = document.createElement('span');
        span.setAttribute('class', 'icon is-small is-right');
        e.iconElement.parentNode.insertBefore(span, e.iconElement);
        span.appendChild(e.iconElement);
        var type = e.element.getAttribute('type');
        var parent = e.element.parentElement;
        if ('checkbox' === type || 'radio' === type) {
            (0, classSet_1.default)(parent.parentElement, {
                'has-icons-right': true,
            });
            (0, classSet_1.default)(span, {
                'fv-plugins-icon-check': true,
            });
            parent.parentElement.insertBefore(span, parent.nextSibling);
        }
        else {
            (0, classSet_1.default)(parent, {
                'has-icons-right': true,
            });
        }
    };
    return Bulma;
}(Framework_1.default));
exports.default = Bulma;
//# sourceMappingURL=Bulma.js.map
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
var Semantic = /** @class */ (function (_super) {
    __extends(Semantic, _super);
    function Semantic(opts) {
        var _this = _super.call(this, Object.assign({}, {
            formClass: 'fv-plugins-semantic',
            // See https://semantic-ui.com/elements/label.html#pointing
            messageClass: 'ui pointing red label',
            rowInvalidClass: 'error',
            rowPattern: /^.*(field|column).*$/,
            rowSelector: '.fields',
            rowValidClass: 'fv-has-success',
        }, opts)) || this;
        _this.messagePlacedHandler = _this.onMessagePlaced.bind(_this);
        return _this;
    }
    Semantic.prototype.install = function () {
        _super.prototype.install.call(this);
        this.core.on('plugins.message.placed', this.messagePlacedHandler);
    };
    Semantic.prototype.uninstall = function () {
        _super.prototype.uninstall.call(this);
        this.core.off('plugins.message.placed', this.messagePlacedHandler);
    };
    Semantic.prototype.onIconPlaced = function (e) {
        var type = e.element.getAttribute('type');
        if ('checkbox' === type || 'radio' === type) {
            var parent_1 = e.element.parentElement;
            (0, classSet_1.default)(e.iconElement, {
                'fv-plugins-icon-check': true,
            });
            parent_1.parentElement.insertBefore(e.iconElement, parent_1.nextSibling);
        }
    };
    Semantic.prototype.onMessagePlaced = function (e) {
        var type = e.element.getAttribute('type');
        var numElements = e.elements.length;
        if (('checkbox' === type || 'radio' === type) && numElements > 1) {
            // Put the message at the end when there are multiple checkboxes/radios
            //  <div class="field">
            //      <div class="ui checkbox">
            //          <input type="checkbox" /><label>...</label>
            //      </div>
            //  </div>
            //  ...
            //  <div class="field">
            //      <div class="ui checkbox">
            //          <input type="checkbox" /><label>...</label>
            //      </div>
            //      <-- The error message will be placed here -->
            //  </div>
            // Get the last checkbox
            var last = e.elements[numElements - 1];
            var parent_2 = last.parentElement;
            if ((0, hasClass_1.default)(parent_2, type) && (0, hasClass_1.default)(parent_2, 'ui')) {
                parent_2.parentElement.insertBefore(e.messageElement, parent_2.nextSibling);
            }
        }
    };
    return Semantic;
}(Framework_1.default));
exports.default = Semantic;
//# sourceMappingURL=Semantic.js.map
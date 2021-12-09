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
var Plugin_1 = require("../core/Plugin");
var Alias_1 = require("./Alias");
/**
 * This plugin is used to validate an email address by using Mailgun API
 */
var Mailgun = /** @class */ (function (_super) {
    __extends(Mailgun, _super);
    function Mailgun(opts) {
        var _this = _super.call(this, opts) || this;
        _this.opts = Object.assign({}, { suggestion: false }, opts);
        _this.messageDisplayedHandler = _this.onMessageDisplayed.bind(_this);
        return _this;
    }
    Mailgun.prototype.install = function () {
        if (this.opts.suggestion) {
            this.core.on('plugins.message.displayed', this.messageDisplayedHandler);
        }
        var aliasOpts = {
            mailgun: 'remote',
        };
        this.core
            .registerPlugin('___mailgunAlias', new Alias_1.default(aliasOpts))
            .addField(this.opts.field, {
            validators: {
                mailgun: {
                    crossDomain: true,
                    data: {
                        api_key: this.opts.apiKey,
                    },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    message: this.opts.message,
                    name: 'address',
                    url: 'https://api.mailgun.net/v3/address/validate',
                    validKey: 'is_valid',
                },
            },
        });
    };
    Mailgun.prototype.uninstall = function () {
        if (this.opts.suggestion) {
            this.core.off('plugins.message.displayed', this.messageDisplayedHandler);
        }
        this.core.removeField(this.opts.field);
    };
    Mailgun.prototype.onMessageDisplayed = function (e) {
        if (e.field === this.opts.field && 'mailgun' === e.validator && e.meta && e.meta.did_you_mean) {
            e.messageElement.innerHTML = "Did you mean ".concat(e.meta.did_you_mean, "?");
        }
    };
    return Mailgun;
}(Plugin_1.default));
exports.default = Mailgun;
//# sourceMappingURL=Mailgun.js.map
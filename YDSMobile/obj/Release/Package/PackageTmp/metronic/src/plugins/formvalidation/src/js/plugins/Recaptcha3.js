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
var fetch_1 = require("../utils/fetch");
var Recaptcha3 = /** @class */ (function (_super) {
    __extends(Recaptcha3, _super);
    function Recaptcha3(opts) {
        var _this = _super.call(this, opts) || this;
        _this.opts = Object.assign({}, { minimumScore: 0 }, opts);
        _this.iconPlacedHandler = _this.onIconPlaced.bind(_this);
        return _this;
    }
    Recaptcha3.prototype.install = function () {
        var _this = this;
        this.core.on('plugins.icon.placed', this.iconPlacedHandler);
        var loadPrevCaptcha = (typeof window[Recaptcha3.LOADED_CALLBACK] === 'undefined')
            ? function () { } // tslint:disable-line:no-empty
            : window[Recaptcha3.LOADED_CALLBACK];
        window[Recaptcha3.LOADED_CALLBACK] = function () {
            // Call the previous loaded function
            // to support multiple recaptchas on the same page
            loadPrevCaptcha();
            // Add a hidden field to the form
            var tokenField = document.createElement('input');
            tokenField.setAttribute('type', 'hidden');
            tokenField.setAttribute('name', Recaptcha3.CAPTCHA_FIELD);
            document.getElementById(_this.opts.element).appendChild(tokenField);
            _this.core.addField(Recaptcha3.CAPTCHA_FIELD, {
                validators: {
                    promise: {
                        message: _this.opts.message,
                        promise: function (input) {
                            return new Promise(function (resolve, reject) {
                                // tslint:disable-next-line:no-string-literal
                                window['grecaptcha']
                                    .execute(_this.opts.siteKey, { action: _this.opts.action })
                                    .then(function (token) {
                                    var _a;
                                    // Verify it
                                    (0, fetch_1.default)(_this.opts.backendVerificationUrl, {
                                        method: 'POST',
                                        params: (_a = {},
                                            _a[Recaptcha3.CAPTCHA_FIELD] = token,
                                            _a),
                                    }).then(function (response) {
                                        var isValid = "".concat(response.success) === 'true' &&
                                            response.score >= _this.opts.minimumScore;
                                        resolve({
                                            message: response.message || _this.opts.message,
                                            meta: response,
                                            valid: isValid,
                                        });
                                    }).catch(function (_) {
                                        reject({
                                            valid: false,
                                        });
                                    });
                                });
                            });
                        },
                    },
                },
            });
        };
        var src = this.getScript();
        if (!document.body.querySelector("script[src=\"".concat(src, "\"]"))) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = src;
            document.body.appendChild(script);
        }
    };
    Recaptcha3.prototype.uninstall = function () {
        this.core.off('plugins.icon.placed', this.iconPlacedHandler);
        // Remove script
        var src = this.getScript();
        var scripts = [].slice.call(document.body.querySelectorAll("script[src=\"".concat(src, "\"]")));
        scripts.forEach(function (s) { return s.parentNode.removeChild(s); });
        this.core.removeField(Recaptcha3.CAPTCHA_FIELD);
    };
    Recaptcha3.prototype.getScript = function () {
        var lang = this.opts.language ? "&hl=".concat(this.opts.language) : '';
        return 'https://www.google.com/recaptcha/api.js?' +
            "onload=".concat(Recaptcha3.LOADED_CALLBACK, "&render=").concat(this.opts.siteKey).concat(lang);
    };
    Recaptcha3.prototype.onIconPlaced = function (e) {
        if (e.field === Recaptcha3.CAPTCHA_FIELD) {
            // Hide the icon for captcha element, since it will look weird when the captcha is valid
            e.iconElement.style.display = 'none';
        }
    };
    // The captcha field name
    Recaptcha3.CAPTCHA_FIELD = '___g-recaptcha-token___';
    // The name of callback that will be executed after reCaptcha script is loaded
    Recaptcha3.LOADED_CALLBACK = '___reCaptcha3Loaded___';
    return Recaptcha3;
}(Plugin_1.default));
exports.default = Recaptcha3;
//# sourceMappingURL=Recaptcha3.js.map
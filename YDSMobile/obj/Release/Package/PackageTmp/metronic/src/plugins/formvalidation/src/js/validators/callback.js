"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var call_1 = require("../utils/call");
function callback() {
    return {
        validate: function (input) {
            var response = (0, call_1.default)(input.options.callback, [input]);
            return ('boolean' === typeof response)
                ? { valid: response } // Deprecated
                : response;
        },
    };
}
exports.default = callback;
//# sourceMappingURL=callback.js.map
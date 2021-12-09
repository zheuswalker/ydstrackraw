"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var luhn_1 = require("../algorithms/luhn");
function siren() {
    return {
        /**
         * Check if a string is a siren number
         */
        validate: function (input) {
            return {
                valid: (input.value === '') || (/^\d{9}$/.test(input.value) && (0, luhn_1.default)(input.value)),
            };
        },
    };
}
exports.default = siren;
//# sourceMappingURL=siren.js.map
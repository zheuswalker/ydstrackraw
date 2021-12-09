"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var luhn_1 = require("../../algorithms/luhn");
/**
 * Validate Italian VAT number, which consists of 11 digits.
 * - First 7 digits are a company identifier
 * - Next 3 are the province of residence
 * - The last one is a check digit
 *
 * @returns {ValidateResult}
 */
function itVat(value) {
    var v = value;
    if (/^IT[0-9]{11}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{11}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (parseInt(v.substr(0, 7), 10) === 0) {
        return {
            meta: {},
            valid: false,
        };
    }
    var lastThree = parseInt(v.substr(7, 3), 10);
    if ((lastThree < 1) || (lastThree > 201) && lastThree !== 999 && lastThree !== 888) {
        return {
            meta: {},
            valid: false,
        };
    }
    return {
        meta: {},
        valid: (0, luhn_1.default)(v),
    };
}
exports.default = itVat;
//# sourceMappingURL=itVat.js.map
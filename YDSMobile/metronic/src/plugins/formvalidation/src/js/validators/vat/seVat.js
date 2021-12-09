"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var luhn_1 = require("../../algorithms/luhn");
/**
 * Validate Swiss VAT number
 *
 * @returns {ValidateResult}
 */
function seVat(value) {
    var v = value;
    if (/^SE[0-9]{10}01$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{10}01$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    v = v.substr(0, 10);
    return {
        meta: {},
        valid: (0, luhn_1.default)(v),
    };
}
exports.default = seVat;
//# sourceMappingURL=seVat.js.map
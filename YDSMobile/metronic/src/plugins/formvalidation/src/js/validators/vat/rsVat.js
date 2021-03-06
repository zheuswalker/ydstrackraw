"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Serbian VAT number
 *
 * @returns {ValidateResult}
 */
function rsVat(value) {
    var v = value;
    if (/^RS[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 10;
    var temp = 0;
    for (var i = 0; i < 8; i++) {
        temp = (parseInt(v.charAt(i), 10) + sum) % 10;
        if (temp === 0) {
            temp = 10;
        }
        sum = (2 * temp) % 11;
    }
    return {
        meta: {},
        valid: (sum + parseInt(v.substr(8, 1), 10)) % 10 === 1,
    };
}
exports.default = rsVat;
//# sourceMappingURL=rsVat.js.map
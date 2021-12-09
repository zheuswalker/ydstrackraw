"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Slovak VAT number
 *
 * @returns {ValidateResult}
 */
function skVat(value) {
    var v = value;
    if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    return {
        meta: {},
        valid: parseInt(v, 10) % 11 === 0,
    };
}
exports.default = skVat;
//# sourceMappingURL=skVat.js.map
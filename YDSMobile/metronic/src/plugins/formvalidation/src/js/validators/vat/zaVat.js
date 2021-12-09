"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate South African VAT number
 *
 * @returns {ValidateResult}
 */
function zaVat(value) {
    var v = value;
    if (/^ZA4[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    return {
        meta: {},
        valid: /^4[0-9]{9}$/.test(v),
    };
}
exports.default = zaVat;
//# sourceMappingURL=zaVat.js.map
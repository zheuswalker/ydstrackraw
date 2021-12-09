"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Luxembourg VAT number
 *
 * @returns {ValidateResult}
 */
function luVat(value) {
    var v = value;
    if (/^LU[0-9]{8}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    return {
        meta: {},
        valid: "".concat(parseInt(v.substr(0, 6), 10) % 89) === v.substr(6, 2),
    };
}
exports.default = luVat;
//# sourceMappingURL=luVat.js.map
"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Finnish VAT number
 *
 * @returns {ValidateResult}
 */
function fiVat(value) {
    var v = value;
    if (/^FI[0-9]{8}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var weight = [7, 9, 10, 5, 8, 4, 2, 1];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    return {
        meta: {},
        valid: sum % 11 === 0,
    };
}
exports.default = fiVat;
//# sourceMappingURL=fiVat.js.map
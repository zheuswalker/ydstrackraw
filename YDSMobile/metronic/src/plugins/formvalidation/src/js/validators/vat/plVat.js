"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Polish VAT number
 *
 * @returns {ValidateResult}
 */
function plVat(value) {
    var v = value;
    if (/^PL[0-9]{10}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{10}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var weight = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1];
    var sum = 0;
    for (var i = 0; i < 10; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    return {
        meta: {},
        valid: sum % 11 === 0,
    };
}
exports.default = plVat;
//# sourceMappingURL=plVat.js.map
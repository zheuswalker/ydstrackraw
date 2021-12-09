"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Estonian VAT number
 *
 * @returns {ValidateResult}
 */
function eeVat(value) {
    var v = value;
    if (/^EE[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 0;
    var weight = [3, 7, 1, 3, 7, 1, 3, 7, 1];
    for (var i = 0; i < 9; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    return {
        meta: {},
        valid: sum % 10 === 0,
    };
}
exports.default = eeVat;
//# sourceMappingURL=eeVat.js.map
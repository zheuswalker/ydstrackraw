"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Lithuanian VAT number
 * It can be:
 * - 9 digits, for legal entities
 * - 12 digits, for temporarily registered taxpayers
 *
 * @returns {ValidateResult}
 */
function ltVat(value) {
    var v = value;
    if (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var length = v.length;
    var sum = 0;
    var i;
    for (i = 0; i < length - 1; i++) {
        sum += parseInt(v.charAt(i), 10) * (1 + i % 9);
    }
    var check = sum % 11;
    if (check === 10) {
        // FIXME: Why we need calculation because `sum` isn't used anymore
        sum = 0;
        for (i = 0; i < length - 1; i++) {
            sum += parseInt(v.charAt(i), 10) * (1 + (i + 2) % 9);
        }
    }
    check = check % 11 % 10;
    return {
        meta: {},
        valid: "".concat(check) === v.charAt(length - 1),
    };
}
exports.default = ltVat;
//# sourceMappingURL=ltVat.js.map
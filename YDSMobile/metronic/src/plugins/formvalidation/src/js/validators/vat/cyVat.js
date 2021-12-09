"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Cypriot VAT number
 *
 * @returns {ValidateResult}
 */
function cyVat(value) {
    var v = value;
    if (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Do not allow to start with "12"
    if (v.substr(0, 2) === '12') {
        return {
            meta: {},
            valid: false,
        };
    }
    // Extract the next digit and multiply by the counter.
    var sum = 0;
    var translation = {
        0: 1, 1: 0, 2: 5, 3: 7, 4: 9,
        5: 13, 6: 15, 7: 17, 8: 19, 9: 21,
    };
    for (var i = 0; i < 8; i++) {
        var temp = parseInt(v.charAt(i), 10);
        if (i % 2 === 0) {
            temp = translation["".concat(temp)];
        }
        sum += temp;
    }
    return {
        meta: {},
        valid: "".concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'[sum % 26]) === v.substr(8, 1),
    };
}
exports.default = cyVat;
//# sourceMappingURL=cyVat.js.map
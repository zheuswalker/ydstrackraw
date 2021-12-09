"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Taiwan identity card number
 *
 * @see https://en.wikipedia.org/wiki/National_identification_number#Taiwan
 * @returns {ValidateResult}
 */
function twId(value) {
    var v = value.toUpperCase();
    if (!/^[A-Z][12][0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var length = v.length;
    var alphabet = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    var letterIndex = alphabet.indexOf(v.charAt(0)) + 10;
    var letterValue = Math.floor(letterIndex / 10) + (letterIndex % 10) * (length - 1);
    var sum = 0;
    for (var i = 1; i < length - 1; i++) {
        sum += parseInt(v.charAt(i), 10) * (length - 1 - i);
    }
    return {
        meta: {},
        valid: (letterValue + sum + parseInt(v.charAt(length - 1), 10)) % 10 === 0,
    };
}
exports.default = twId;
//# sourceMappingURL=twId.js.map
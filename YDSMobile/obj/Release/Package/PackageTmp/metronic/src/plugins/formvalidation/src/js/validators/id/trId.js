"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Turkish Identification Number
 *
 * @see https://en.wikipedia.org/wiki/Turkish_Identification_Number
 * @returns {ValidateResult}
 */
function trId(value) {
    if (value.length !== 11) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 0;
    for (var i = 0; i < 10; i++) {
        sum += parseInt(value.charAt(i), 10);
    }
    return {
        meta: {},
        valid: (sum % 10) === parseInt(value.charAt(10), 10),
    };
}
exports.default = trId;
//# sourceMappingURL=trId.js.map
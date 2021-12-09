"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Thailand citizen number
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#Thailand
 * @returns {ValidateResult}
 */
function thId(value) {
    if (value.length !== 13) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 0;
    for (var i = 0; i < 12; i++) {
        sum += parseInt(value.charAt(i), 10) * (13 - i);
    }
    return {
        meta: {},
        valid: (11 - sum % 11) % 10 === parseInt(value.charAt(12), 10),
    };
}
exports.default = thId;
//# sourceMappingURL=thId.js.map
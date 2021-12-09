"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate San Marino citizen number
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#San_Marino
 * @returns {ValidateResult}
 */
function smId(value) {
    return {
        meta: {},
        valid: /^\d{5}$/.test(value),
    };
}
exports.default = smId;
//# sourceMappingURL=smId.js.map
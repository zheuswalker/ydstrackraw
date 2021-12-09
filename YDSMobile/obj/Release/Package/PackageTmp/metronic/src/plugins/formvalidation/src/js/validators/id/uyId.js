"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Uruguayan identity document
 *
 * @see https://en.wikipedia.org/wiki/Identity_document#Uruguay
 * @returns {ValidateResult}
 */
function uyId(value) {
    if (!/^\d{8}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var weight = [2, 9, 8, 7, 6, 3, 4];
    var sum = 0;
    for (var i = 0; i < 7; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
    }
    sum = sum % 10;
    if (sum > 0) {
        sum = 10 - sum;
    }
    return {
        meta: {},
        valid: "".concat(sum) === value.charAt(7),
    };
}
exports.default = uyId;
//# sourceMappingURL=uyId.js.map
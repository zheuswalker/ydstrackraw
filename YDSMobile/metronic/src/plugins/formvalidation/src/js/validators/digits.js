"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
function digits() {
    return {
        /**
         * Return true if the input value contains digits only
         */
        validate: function (input) {
            return { valid: (input.value === '') || /^\d+$/.test(input.value) };
        },
    };
}
exports.default = digits;
//# sourceMappingURL=digits.js.map
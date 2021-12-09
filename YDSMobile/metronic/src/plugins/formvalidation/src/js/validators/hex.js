"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
function hex() {
    return {
        /**
         * Return true if and only if the input value is a valid hexadecimal number
         */
        validate: function (input) {
            return { valid: (input.value === '') || /^[0-9a-fA-F]+$/.test(input.value) };
        },
    };
}
exports.default = hex;
//# sourceMappingURL=hex.js.map
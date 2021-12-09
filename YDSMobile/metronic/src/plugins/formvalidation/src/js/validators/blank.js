"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This validator always returns valid.
 * It can be used when we want to show the custom message returned from server
 */
function blank() {
    return {
        validate: function (input) {
            return { valid: true };
        },
    };
}
exports.default = blank;
//# sourceMappingURL=blank.js.map
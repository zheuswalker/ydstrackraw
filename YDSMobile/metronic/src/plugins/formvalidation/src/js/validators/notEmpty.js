"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
function notEmpty() {
    return {
        validate: function (input) {
            var trim = !!input.options && !!input.options.trim;
            var value = input.value;
            return {
                valid: (!trim && value !== '') || (trim && value !== '' && value.trim() !== ''),
            };
        },
    };
}
exports.default = notEmpty;
//# sourceMappingURL=notEmpty.js.map
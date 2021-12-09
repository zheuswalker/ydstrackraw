"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
function identical() {
    return {
        validate: function (input) {
            var compareWith = ('function' === typeof input.options.compare)
                ? input.options.compare.call(this)
                : input.options.compare;
            return {
                valid: (compareWith === '' || input.value === compareWith),
            };
        },
    };
}
exports.default = identical;
//# sourceMappingURL=identical.js.map
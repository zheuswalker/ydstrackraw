"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
function different() {
    return {
        validate: function (input) {
            var compareWith = ('function' === typeof input.options.compare)
                ? input.options.compare.call(this)
                : input.options.compare;
            return {
                valid: (compareWith === '' || input.value !== compareWith),
            };
        },
    };
}
exports.default = different;
//# sourceMappingURL=different.js.map
"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = require("../utils/format");
function lessThan() {
    return {
        validate: function (input) {
            if (input.value === '') {
                return { valid: true };
            }
            var opts = Object.assign({}, { inclusive: true, message: '' }, input.options);
            var maxValue = parseFloat("".concat(opts.max).replace(',', '.'));
            return opts.inclusive
                ? {
                    message: (0, format_1.default)(input.l10n ? opts.message || input.l10n.lessThan.default : opts.message, "".concat(maxValue)),
                    valid: parseFloat(input.value) <= maxValue,
                }
                : {
                    message: (0, format_1.default)(input.l10n ? opts.message || input.l10n.lessThan.notInclusive : opts.message, "".concat(maxValue)),
                    valid: parseFloat(input.value) < maxValue,
                };
        },
    };
}
exports.default = lessThan;
//# sourceMappingURL=lessThan.js.map
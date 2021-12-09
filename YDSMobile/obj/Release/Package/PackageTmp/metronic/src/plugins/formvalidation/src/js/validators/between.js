"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = require("../utils/format");
function between() {
    var formatValue = function (value) {
        return parseFloat("".concat(value).replace(',', '.'));
    };
    return {
        validate: function (input) {
            var value = input.value;
            if (value === '') {
                return { valid: true };
            }
            var opts = Object.assign({}, { inclusive: true, message: '' }, input.options);
            var minValue = formatValue(opts.min);
            var maxValue = formatValue(opts.max);
            return opts.inclusive
                ? {
                    message: (0, format_1.default)(input.l10n ? opts.message || input.l10n.between.default : opts.message, ["".concat(minValue), "".concat(maxValue)]),
                    valid: parseFloat(value) >= minValue && parseFloat(value) <= maxValue,
                }
                : {
                    message: (0, format_1.default)(input.l10n ? opts.message || input.l10n.between.notInclusive : opts.message, ["".concat(minValue), "".concat(maxValue)]),
                    valid: parseFloat(value) > minValue && parseFloat(value) < maxValue,
                };
        },
    };
}
exports.default = between;
//# sourceMappingURL=between.js.map
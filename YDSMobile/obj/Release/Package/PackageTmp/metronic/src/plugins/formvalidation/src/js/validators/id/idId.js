"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var verhoeff_1 = require("../../algorithms/verhoeff");
/**
 * Validate Indian Aadhaar numbers
 * @see https://en.wikipedia.org/wiki/Aadhaar
 * @returns {ValidateResult}
 */
function idId(value) {
    if (!/^[2-9]\d{11}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var converted = value.split("").map(function (item) { return parseInt(item, 10); });
    return {
        meta: {},
        valid: (0, verhoeff_1.default)(converted),
    };
}
exports.default = idId;
//# sourceMappingURL=idId.js.map
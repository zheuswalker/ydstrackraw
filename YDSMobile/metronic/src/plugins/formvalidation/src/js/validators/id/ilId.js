"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var luhn_1 = require("../../algorithms/luhn");
/**
 * Validate Israeli identity number (Mispar Zehut)
 *
 * @see https://gist.github.com/freak4pc/6802be89d019bca57756a675d761c5a8
 * @see http://halemo.net/info/idcard/
 * @returns {ValidateResult}
 */
function ilId(value) {
    if (!/^\d{1,9}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    return {
        meta: {},
        valid: (0, luhn_1.default)(value),
    };
}
exports.default = ilId;
//# sourceMappingURL=ilId.js.map
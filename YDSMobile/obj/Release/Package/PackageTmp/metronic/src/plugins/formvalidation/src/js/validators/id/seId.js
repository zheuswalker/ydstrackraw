"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var luhn_1 = require("../../algorithms/luhn");
var isValidDate_1 = require("../../utils/isValidDate");
/**
 * Validate Swedish personal identity number (personnummer)
 *
 * @see http://en.wikipedia.org/wiki/Personal_identity_number_(Sweden)
 * @returns {ValidateResult}
 */
function seId(value) {
    if (!/^[0-9]{10}$/.test(value) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = value.replace(/[^0-9]/g, '');
    var year = parseInt(v.substr(0, 2), 10) + 1900;
    var month = parseInt(v.substr(2, 2), 10);
    var day = parseInt(v.substr(4, 2), 10);
    if (!(0, isValidDate_1.default)(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate the last check digit
    return {
        meta: {},
        valid: (0, luhn_1.default)(v),
    };
}
exports.default = seId;
//# sourceMappingURL=seId.js.map
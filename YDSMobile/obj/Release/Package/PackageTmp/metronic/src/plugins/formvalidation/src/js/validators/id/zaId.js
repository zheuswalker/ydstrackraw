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
 * Validate South African ID
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#South_Africa
 * @returns {ValidateResult}
 */
function zaId(value) {
    if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var year = parseInt(value.substr(0, 2), 10);
    var currentYear = new Date().getFullYear() % 100;
    var month = parseInt(value.substr(2, 2), 10);
    var day = parseInt(value.substr(4, 2), 10);
    year = (year >= currentYear) ? (year + 1900) : (year + 2000);
    if (!(0, isValidDate_1.default)(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate the last check digit
    return {
        meta: {},
        valid: (0, luhn_1.default)(value),
    };
}
exports.default = zaId;
//# sourceMappingURL=zaId.js.map
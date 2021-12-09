"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var isValidDate_1 = require("../../utils/isValidDate");
/**
 * Validate Iceland national identification number (Kennitala)
 *
 * @see http://en.wikipedia.org/wiki/Kennitala
 * @returns {ValidateResult}
 */
function isId(value) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = value.replace(/-/g, '');
    var day = parseInt(v.substr(0, 2), 10);
    var month = parseInt(v.substr(2, 2), 10);
    var year = parseInt(v.substr(4, 2), 10);
    var century = parseInt(v.charAt(9), 10);
    year = (century === 9) ? (1900 + year) : ((20 + century) * 100 + year);
    if (!(0, isValidDate_1.default)(year, month, day, true)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate the check digit
    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = 11 - sum % 11;
    return {
        meta: {},
        valid: "".concat(sum) === v.charAt(8),
    };
}
exports.default = isId;
//# sourceMappingURL=isId.js.map
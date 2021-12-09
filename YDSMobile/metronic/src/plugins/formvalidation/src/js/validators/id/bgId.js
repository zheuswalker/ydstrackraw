"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var isValidDate_1 = require("../../utils/isValidDate");
/**
 * Validate Bulgarian national identification number (EGN)
 *
 * @see http://en.wikipedia.org/wiki/Uniform_civil_number
 * @returns {ValidateResult}
 */
function bgId(value) {
    if (!/^\d{10}$/.test(value) && !/^\d{6}\s\d{3}\s\d{1}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = value.replace(/\s/g, '');
    // Check the birth date
    var year = parseInt(v.substr(0, 2), 10) + 1900;
    var month = parseInt(v.substr(2, 2), 10);
    var day = parseInt(v.substr(4, 2), 10);
    if (month > 40) {
        year += 100;
        month -= 40;
    }
    else if (month > 20) {
        year -= 100;
        month -= 20;
    }
    if (!(0, isValidDate_1.default)(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 0;
    var weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    for (var i = 0; i < 9; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = (sum % 11) % 10;
    return {
        meta: {},
        valid: "".concat(sum) === v.substr(9, 1),
    };
}
exports.default = bgId;
//# sourceMappingURL=bgId.js.map
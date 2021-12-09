"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var isValidDate_1 = require("../../utils/isValidDate");
/**
 * Validate Latvian Personal Code (Personas kods)
 *
 * @see http://laacz.lv/2006/11/25/pk-parbaudes-algoritms/
 * @returns {ValidateResult}
 */
function lvId(value) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = value.replace(/\D/g, '');
    // Check birth date
    var day = parseInt(v.substr(0, 2), 10);
    var month = parseInt(v.substr(2, 2), 10);
    var year = parseInt(v.substr(4, 2), 10);
    year = year + 1800 + parseInt(v.charAt(6), 10) * 100;
    if (!(0, isValidDate_1.default)(year, month, day, true)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Check personal code
    var sum = 0;
    var weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
    for (var i = 0; i < 10; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = (sum + 1) % 11 % 10;
    return {
        meta: {},
        valid: "".concat(sum) === v.charAt(10),
    };
}
exports.default = lvId;
//# sourceMappingURL=lvId.js.map
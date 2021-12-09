"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var isValidDate_1 = require("../../utils/isValidDate");
/**
 * Validate Malaysian identity card number
 *
 * @see https://en.wikipedia.org/wiki/Malaysian_identity_card
 * @returns {ValidateResult}
 */
function myId(value) {
    if (!/^\d{12}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate date of birth
    var year = parseInt(value.substr(0, 2), 10);
    var month = parseInt(value.substr(2, 2), 10);
    var day = parseInt(value.substr(4, 2), 10);
    if (!(0, isValidDate_1.default)(year + 1900, month, day) && !(0, isValidDate_1.default)(year + 2000, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate place of birth
    var placeOfBirth = value.substr(6, 2);
    var notAvailablePlaces = ["17", "18", "19", "20", "69", "70", "73", "80", "81", "94", "95", "96", "97"];
    return {
        meta: {},
        valid: notAvailablePlaces.indexOf(placeOfBirth) === -1,
    };
}
exports.default = myId;
//# sourceMappingURL=myId.js.map
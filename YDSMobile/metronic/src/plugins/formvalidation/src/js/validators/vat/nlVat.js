"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var mod97And10_1 = require("../../algorithms/mod97And10");
var nlId_1 = require("../id/nlId");
/**
 * Validate Dutch VAT number
 *
 * @returns {ValidateResult}
 */
function nlVat(value) {
    var v = value;
    if (/^NL[0-9]{9}B[0-9]{2}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}B[0-9]{2}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var id = v.substr(0, 9);
    return {
        meta: {},
        valid: (0, nlId_1.default)(id).valid || (0, mod97And10_1.default)("NL".concat(v)),
    };
}
exports.default = nlVat;
//# sourceMappingURL=nlVat.js.map
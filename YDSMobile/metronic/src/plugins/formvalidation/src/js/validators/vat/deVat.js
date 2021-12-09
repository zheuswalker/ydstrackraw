"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var mod11And10_1 = require("../../algorithms/mod11And10");
/**
 * Validate German VAT number
 *
 * @returns {ValidateResult}
 */
function deVat(value) {
    var v = value;
    if (/^DE[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    return {
        meta: {},
        valid: (0, mod11And10_1.default)(v),
    };
}
exports.default = deVat;
//# sourceMappingURL=deVat.js.map
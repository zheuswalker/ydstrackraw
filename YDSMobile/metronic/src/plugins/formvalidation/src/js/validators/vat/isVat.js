"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Icelandic VAT (VSK) number
 *
 * @returns {ValidateResult}
 */
function isVat(value) {
    var v = value;
    if (/^IS[0-9]{5,6}$/.test(v)) {
        v = v.substr(2);
    }
    return {
        meta: {},
        valid: /^[0-9]{5,6}$/.test(v),
    };
}
exports.default = isVat;
//# sourceMappingURL=isVat.js.map
"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Argentinian national identifiers
 *
 * @see https://en.wikipedia.org/wiki/Documento_Nacional_de_Identidad_(Argentina)
 * @returns {ValidateResult}
 */
function arId(value) {
    // Replace dot with empty space
    var v = value.replace(/\./g, '');
    return {
        meta: {},
        valid: /^\d{7,8}$/.test(v),
    };
}
exports.default = arId;
//# sourceMappingURL=arId.js.map
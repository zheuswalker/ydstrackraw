"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate Peruvian identity number (CUI)
 *
 * @see https://es.wikipedia.org/wiki/Documento_Nacional_de_Identidad_(Per%C3%BA)
 * @returns {ValidateResult}
 */
function peId(value) {
    if (!/^\d{8}[0-9A-Z]*$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (value.length === 8) {
        return {
            meta: {},
            valid: true,
        };
    }
    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += weight[i] * parseInt(value.charAt(i), 10);
    }
    var cd = sum % 11;
    var checkDigit = [6, 5, 4, 3, 2, 1, 1, 0, 9, 8, 7][cd];
    var checkChar = "KJIHGFEDCBA".charAt(cd);
    return {
        meta: {},
        valid: value.charAt(8) === "".concat(checkDigit) || value.charAt(8) === checkChar,
    };
}
exports.default = peId;
//# sourceMappingURL=peId.js.map
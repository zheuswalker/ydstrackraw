"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var jmbg_1 = require("./jmbg");
/**
 * @returns {ValidateResult}
 */
function siId(value) {
    return {
        meta: {},
        valid: (0, jmbg_1.default)(value, 'SI'),
    };
}
exports.default = siId;
//# sourceMappingURL=siId.js.map
"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var mod11And10_1 = require("../../algorithms/mod11And10");
/**
 * Validate Croatian personal identification number (OIB)
 *
 * @returns {ValidateResult}
 */
function hrId(value) {
    return {
        meta: {},
        valid: (/^[0-9]{11}$/.test(value) && (0, mod11And10_1.default)(value)),
    };
}
exports.default = hrId;
//# sourceMappingURL=hrId.js.map
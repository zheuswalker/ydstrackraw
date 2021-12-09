"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var mod37And36_1 = require("../algorithms/mod37And36");
function grid() {
    return {
        /**
         * Validate GRId (Global Release Identifier)
         * @see http://en.wikipedia.org/wiki/Global_Release_Identifier
         */
        validate: function (input) {
            if (input.value === '') {
                return { valid: true };
            }
            var v = input.value.toUpperCase();
            if (!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(v)) {
                return { valid: false };
            }
            v = v.replace(/\s/g, '').replace(/-/g, '');
            if ('GRID:' === v.substr(0, 5)) {
                v = v.substr(5);
            }
            return { valid: (0, mod37And36_1.default)(v) };
        },
    };
}
exports.default = grid;
//# sourceMappingURL=grid.js.map
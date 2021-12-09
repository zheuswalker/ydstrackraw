"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
function filter() {
    return {
        filters: {},
        add: function (name, func) {
            (this.filters[name] = this.filters[name] || []).push(func);
        },
        clear: function () {
            this.filters = {};
        },
        execute: function (name, defaultValue, args) {
            if (!this.filters[name] || !this.filters[name].length) {
                return defaultValue;
            }
            var result = defaultValue;
            var filters = this.filters[name];
            var count = filters.length;
            for (var i = 0; i < count; i++) {
                result = filters[i].apply(result, args);
            }
            return result;
        },
        remove: function (name, func) {
            if (this.filters[name]) {
                this.filters[name] = this.filters[name].filter(function (f) { return f !== func; });
            }
        },
    };
}
exports.default = filter;
//# sourceMappingURL=filter.js.map
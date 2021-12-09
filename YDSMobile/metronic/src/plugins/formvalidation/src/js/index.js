"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugin = exports.validators = exports.utils = exports.plugins = exports.locales = exports.filters = exports.formValidation = exports.algorithms = void 0;
var index_1 = require("./algorithms/index");
exports.algorithms = index_1.default;
var index_2 = require("./core/index");
exports.formValidation = index_2.default;
Object.defineProperty(exports, "Plugin", { enumerable: true, get: function () { return index_2.Plugin; } });
var index_3 = require("./filters/index");
exports.filters = index_3.default;
var index_4 = require("./plugins/index");
exports.plugins = index_4.default;
var index_5 = require("./utils/index");
exports.utils = index_5.default;
var index_6 = require("./validators/index");
exports.validators = index_6.default;
var locales = {};
exports.locales = locales;
//# sourceMappingURL=index.js.map
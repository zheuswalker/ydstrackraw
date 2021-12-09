"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Must set `allowSyntheticDefaultImports` in `tsconfig.json` to `true`
var $ = require("jquery");
var Core_1 = require("../core/Core");
/**
 * Allows to use `FormValidation.formValidation` as a jQuery plugin
 *  ```
 *  $(document).ready(function() {
 *      $('#yourFormId')
 *          .formValidation({
 *              ... options ...
 *          })
 *          // Returns the `FormValidation.Core` instance
 *          .data('formValidation')
 *          // so you can call any APIs provided by `FormValidation.Core`
 *          .validateField(...);
 *  });
 *  ```
 */
var version = $.fn.jquery.split(' ')[0].split('.');
if ((+version[0] < 2 && +version[1] < 9) || (+version[0] === 1 && +version[1] === 9 && +version[2] < 1)) {
    throw new Error('The J plugin requires jQuery version 1.9.1 or higher');
}
// tslint:disable-next-line:no-string-literal
$.fn['formValidation'] = function (options) {
    var params = arguments;
    return this.each(function () {
        var $this = $(this);
        var data = $this.data('formValidation');
        var opts = 'object' === typeof options && options;
        if (!data) {
            data = (0, Core_1.default)(this, opts);
            $this.data('formValidation', data)
                .data('FormValidation', data);
        }
        // Allow to call plugin method
        if ('string' === typeof options) {
            data[options].apply(data, Array.prototype.slice.call(params, 1));
        }
    });
};
//# sourceMappingURL=J.js.map
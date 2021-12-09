"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
var emitter_1 = require("./emitter");
var filter_1 = require("./filter");
var getFieldValue_1 = require("../filters/getFieldValue");
var index_1 = require("../validators/index");
var Core = /** @class */ (function () {
    function Core(form, fields) {
        this.elements = {};
        this.ee = (0, emitter_1.default)();
        this.filter = (0, filter_1.default)();
        this.plugins = {};
        // Store the result of validation for each field
        this.results = new Map();
        this.validators = {};
        this.form = form;
        this.fields = fields;
    }
    Core.prototype.on = function (event, func) {
        this.ee.on(event, func);
        return this;
    };
    Core.prototype.off = function (event, func) {
        this.ee.off(event, func);
        return this;
    };
    Core.prototype.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.ee).emit.apply(_a, __spreadArray([event], args, false));
        return this;
    };
    Core.prototype.registerPlugin = function (name, plugin) {
        // Check if whether the plugin is registered
        if (this.plugins[name]) {
            throw new Error("The plguin ".concat(name, " is registered"));
        }
        // Install the plugin
        plugin.setCore(this);
        plugin.install();
        this.plugins[name] = plugin;
        return this;
    };
    Core.prototype.deregisterPlugin = function (name) {
        var plugin = this.plugins[name];
        if (plugin) {
            plugin.uninstall();
        }
        delete this.plugins[name];
        return this;
    };
    Core.prototype.registerValidator = function (name, func) {
        if (this.validators[name]) {
            throw new Error("The validator ".concat(name, " is registered"));
        }
        this.validators[name] = func;
        return this;
    };
    /**
     * Add a filter
     *
     * @param {string} name The name of filter
     * @param {Function} func The filter function
     * @return {Core}
     */
    Core.prototype.registerFilter = function (name, func) {
        this.filter.add(name, func);
        return this;
    };
    /**
     * Remove a filter
     *
     * @param {string} name The name of filter
     * @param {Function} func The filter function
     * @return {Core}
     */
    Core.prototype.deregisterFilter = function (name, func) {
        this.filter.remove(name, func);
        return this;
    };
    /**
     * Execute a filter
     *
     * @param {string} name The name of filter
     * @param {T} defaultValue The default value returns by the filter
     * @param {array} args The filter arguments
     * @returns {T}
     */
    Core.prototype.executeFilter = function (name, defaultValue, args) {
        return this.filter.execute(name, defaultValue, args);
    };
    /**
     * Add a field
     *
     * @param {string} field The field name
     * @param {FieldOptions} options The field options. The options will be merged with the original validator rules
     * if the field is already defined
     * @return {Core}
     */
    Core.prototype.addField = function (field, options) {
        var opts = Object.assign({}, {
            selector: '',
            validators: {},
        }, options);
        // Merge the options
        this.fields[field] = this.fields[field]
            ? {
                selector: opts.selector || this.fields[field].selector,
                validators: Object.assign({}, this.fields[field].validators, opts.validators),
            }
            : opts;
        this.elements[field] = this.queryElements(field);
        this.emit('core.field.added', {
            elements: this.elements[field],
            field: field,
            options: this.fields[field],
        });
        return this;
    };
    /**
     * Remove given field by name
     *
     * @param {string} field The field name
     * @return {Core}
     */
    Core.prototype.removeField = function (field) {
        if (!this.fields[field]) {
            throw new Error("The field ".concat(field, " validators are not defined. Please ensure the field is added first"));
        }
        var elements = this.elements[field];
        var options = this.fields[field];
        delete this.elements[field];
        delete this.fields[field];
        this.emit('core.field.removed', {
            elements: elements,
            field: field,
            options: options,
        });
        return this;
    };
    /**
     * Validate all fields
     *
     * @return {Promise<string>}
     */
    Core.prototype.validate = function () {
        var _this = this;
        this.emit('core.form.validating');
        return this.filter
            .execute('validate-pre', Promise.resolve(), [])
            .then(function () {
            return Promise
                .all(Object.keys(_this.fields).map(function (field) { return _this.validateField(field); }))
                .then(function (results) {
                // `results` is an array of `Valid`, `Invalid` and `NotValidated`
                switch (true) {
                    case (results.indexOf('Invalid') !== -1):
                        _this.emit('core.form.invalid');
                        return Promise.resolve('Invalid');
                    case (results.indexOf('NotValidated') !== -1):
                        _this.emit('core.form.notvalidated');
                        return Promise.resolve('NotValidated');
                    default:
                        _this.emit('core.form.valid');
                        return Promise.resolve('Valid');
                }
            });
        });
    };
    /**
     * Validate a particular field
     *
     * @param {string} field The field name
     * @return {Promise<string>}
     */
    Core.prototype.validateField = function (field) {
        var _this = this;
        // Stop validation process if the field is already validated
        var result = this.results.get(field);
        if (result === 'Valid' || result === 'Invalid') {
            return Promise.resolve(result);
        }
        this.emit('core.field.validating', field);
        var elements = this.elements[field];
        if (elements.length === 0) {
            this.emit('core.field.valid', field);
            return Promise.resolve('Valid');
        }
        var type = elements[0].getAttribute('type');
        if ('radio' === type || 'checkbox' === type || elements.length === 1) {
            return this.validateElement(field, elements[0]);
        }
        else {
            return Promise.all(elements.map(function (ele) { return _this.validateElement(field, ele); })).then(function (results) {
                // `results` is an array of `Valid`, `Invalid` and `NotValidated`
                switch (true) {
                    case (results.indexOf('Invalid') !== -1):
                        _this.emit('core.field.invalid', field);
                        _this.results.set(field, 'Invalid');
                        return Promise.resolve('Invalid');
                    case (results.indexOf('NotValidated') !== -1):
                        _this.emit('core.field.notvalidated', field);
                        _this.results.delete(field);
                        return Promise.resolve('NotValidated');
                    default:
                        _this.emit('core.field.valid', field);
                        _this.results.set(field, 'Valid');
                        return Promise.resolve('Valid');
                }
            });
        }
    };
    /**
     * Validate particular element
     *
     * @param {string} field The field name
     * @param {HTMLElement} ele The field element
     * @return {Promise<string>}
     */
    Core.prototype.validateElement = function (field, ele) {
        var _this = this;
        // Reset validation result
        this.results.delete(field);
        var elements = this.elements[field];
        var ignored = this.filter.execute('element-ignored', false, [field, ele, elements]);
        if (ignored) {
            this.emit('core.element.ignored', {
                element: ele,
                elements: elements,
                field: field,
            });
            return Promise.resolve('Ignored');
        }
        var validatorList = this.fields[field].validators;
        this.emit('core.element.validating', {
            element: ele,
            elements: elements,
            field: field,
        });
        var promises = Object.keys(validatorList).map(function (v) {
            return function () { return _this.executeValidator(field, ele, v, validatorList[v]); };
        });
        return this.waterfall(promises).then(function (results) {
            // `results` is an array of `Valid` or `Invalid`
            var isValid = results.indexOf('Invalid') === -1;
            _this.emit('core.element.validated', {
                element: ele,
                elements: elements,
                field: field,
                valid: isValid,
            });
            var type = ele.getAttribute('type');
            if ('radio' === type || 'checkbox' === type || elements.length === 1) {
                _this.emit(isValid ? 'core.field.valid' : 'core.field.invalid', field);
            }
            return Promise.resolve(isValid ? 'Valid' : 'Invalid');
        }).catch(function (reason) {
            // reason is `NotValidated`
            _this.emit('core.element.notvalidated', {
                element: ele,
                elements: elements,
                field: field,
            });
            return Promise.resolve(reason);
        });
    };
    /**
     * Perform given validator on field
     *
     * @param {string} field The field name
     * @param {HTMLElement} ele The field element
     * @param {string} v The validator name
     * @param {ValidatorOptions} opts The validator options
     * @return {Promise<string>}
     */
    Core.prototype.executeValidator = function (field, ele, v, opts) {
        var _this = this;
        var elements = this.elements[field];
        var name = this.filter.execute('validator-name', v, [v, field]);
        opts.message = this.filter.execute('validator-message', opts.message, [this.locale, field, name]);
        // Simply pass the validator if
        // - it isn't defined yet
        // - or the associated validator isn't enabled
        if (!this.validators[name] || opts.enabled === false) {
            this.emit('core.validator.validated', {
                element: ele,
                elements: elements,
                field: field,
                result: this.normalizeResult(field, name, { valid: true }),
                validator: name,
            });
            return Promise.resolve('Valid');
        }
        var validator = this.validators[name];
        // Get the field value
        var value = this.getElementValue(field, ele, name);
        var willValidate = this.filter.execute('field-should-validate', true, [field, ele, value, v]);
        if (!willValidate) {
            this.emit('core.validator.notvalidated', {
                element: ele,
                elements: elements,
                field: field,
                validator: v,
            });
            return Promise.resolve('NotValidated');
        }
        this.emit('core.validator.validating', {
            element: ele,
            elements: elements,
            field: field,
            validator: v,
        });
        // Perform validation
        var result = validator().validate({
            element: ele,
            elements: elements,
            field: field,
            l10n: this.localization,
            options: opts,
            value: value,
        });
        // Check whether the result is a `Promise`
        // tslint:disable-next-line:no-string-literal
        var isPromise = ('function' === typeof result['then']);
        if (isPromise) {
            return result.then(function (r) {
                var data = _this.normalizeResult(field, v, r);
                _this.emit('core.validator.validated', {
                    element: ele,
                    elements: elements,
                    field: field,
                    result: data,
                    validator: v,
                });
                return data.valid ? 'Valid' : 'Invalid';
            });
        }
        else {
            var data = this.normalizeResult(field, v, result);
            this.emit('core.validator.validated', {
                element: ele,
                elements: elements,
                field: field,
                result: data,
                validator: v,
            });
            return Promise.resolve(data.valid ? 'Valid' : 'Invalid');
        }
    };
    Core.prototype.getElementValue = function (field, ele, validator) {
        var defaultValue = (0, getFieldValue_1.default)(this.form, field, ele, this.elements[field]);
        return this.filter.execute('field-value', defaultValue, [defaultValue, field, ele, validator]);
    };
    // Some getter methods
    Core.prototype.getElements = function (field) { return this.elements[field]; };
    Core.prototype.getFields = function () { return this.fields; };
    Core.prototype.getFormElement = function () { return this.form; };
    Core.prototype.getLocale = function () { return this.locale; };
    Core.prototype.getPlugin = function (name) {
        return this.plugins[name];
    };
    /**
     * Update the field status
     *
     * @param {string} field The field name
     * @param {string} status The new status
     * @param {string} [validator] The validator name. If it isn't specified, all validators will be updated
     * @return {Core}
     */
    Core.prototype.updateFieldStatus = function (field, status, validator) {
        var _this = this;
        var elements = this.elements[field];
        var type = elements[0].getAttribute('type');
        var list = ('radio' === type || 'checkbox' === type) ? [elements[0]] : elements;
        list.forEach(function (ele) { return _this.updateElementStatus(field, ele, status, validator); });
        if (!validator) {
            switch (status) {
                case 'NotValidated':
                    this.emit('core.field.notvalidated', field);
                    this.results.delete(field);
                    break;
                case 'Validating':
                    this.emit('core.field.validating', field);
                    this.results.delete(field);
                    break;
                case 'Valid':
                    this.emit('core.field.valid', field);
                    this.results.set(field, 'Valid');
                    break;
                case 'Invalid':
                    this.emit('core.field.invalid', field);
                    this.results.set(field, 'Invalid');
                    break;
            }
        }
        return this;
    };
    /**
     * Update the element status
     *
     * @param {string} field The field name
     * @param {HTMLElement} ele The field element
     * @param {string} status The new status
     * @param {string} [validator] The validator name. If it isn't specified, all validators will be updated
     * @return {Core}
     */
    Core.prototype.updateElementStatus = function (field, ele, status, validator) {
        var _this = this;
        var elements = this.elements[field];
        var fieldValidators = this.fields[field].validators;
        var validatorArr = validator ? [validator] : Object.keys(fieldValidators);
        switch (status) {
            case 'NotValidated':
                validatorArr.forEach(function (v) { return _this.emit('core.validator.notvalidated', {
                    element: ele,
                    elements: elements,
                    field: field,
                    validator: v,
                }); });
                this.emit('core.element.notvalidated', {
                    element: ele,
                    elements: elements,
                    field: field,
                });
                break;
            case 'Validating':
                validatorArr.forEach(function (v) { return _this.emit('core.validator.validating', {
                    element: ele,
                    elements: elements,
                    field: field,
                    validator: v,
                }); });
                this.emit('core.element.validating', {
                    element: ele,
                    elements: elements,
                    field: field,
                });
                break;
            case 'Valid':
                validatorArr.forEach(function (v) { return _this.emit('core.validator.validated', {
                    element: ele,
                    field: field,
                    result: {
                        message: fieldValidators[v].message,
                        valid: true,
                    },
                    validator: v,
                }); });
                this.emit('core.element.validated', {
                    element: ele,
                    elements: elements,
                    field: field,
                    valid: true,
                });
                break;
            case 'Invalid':
                validatorArr.forEach(function (v) { return _this.emit('core.validator.validated', {
                    element: ele,
                    field: field,
                    result: {
                        message: fieldValidators[v].message,
                        valid: false,
                    },
                    validator: v,
                }); });
                this.emit('core.element.validated', {
                    element: ele,
                    elements: elements,
                    field: field,
                    valid: false,
                });
                break;
        }
        return this;
    };
    /**
     * Reset the form. It also clears all the messages, hide the feedback icons, etc.
     *
     * @param {boolean} reset If true, the method resets field value to empty
     * or remove `checked`, `selected` attributes
     * @return {Core}
     */
    Core.prototype.resetForm = function (reset) {
        var _this = this;
        Object.keys(this.fields).forEach(function (field) { return _this.resetField(field, reset); });
        this.emit('core.form.reset', {
            reset: reset,
        });
        return this;
    };
    /**
     * Reset the field. It also clears all the messages, hide the feedback icons, etc.
     *
     * @param {string} field The field name
     * @param {boolean} reset If true, the method resets field value to empty
     * or remove `checked`, `selected` attributes
     * @return {Core}
     */
    Core.prototype.resetField = function (field, reset) {
        // Reset the field element value if needed
        if (reset) {
            var elements = this.elements[field];
            var type_1 = elements[0].getAttribute('type');
            elements.forEach(function (ele) {
                if ('radio' === type_1 || 'checkbox' === type_1) {
                    ele.removeAttribute('selected');
                    ele.removeAttribute('checked');
                    ele.checked = false;
                }
                else {
                    ele.setAttribute('value', '');
                    if (ele instanceof HTMLInputElement || ele instanceof HTMLTextAreaElement) {
                        ele.value = '';
                    }
                }
            });
        }
        // Mark the field as not validated yet
        this.updateFieldStatus(field, 'NotValidated');
        this.emit('core.field.reset', {
            field: field,
            reset: reset,
        });
        return this;
    };
    /**
     * Revalidate a particular field. It's useful when the field value is effected by third parties
     * (for example, attach another UI library to the field).
     * Since there isn't an automatic way for FormValidation to know when the field value is modified in those cases,
     * we need to revalidate the field manually.
     *
     * @param {string} field The field name
     * @return {Promise<string>}
     */
    Core.prototype.revalidateField = function (field) {
        this.updateFieldStatus(field, 'NotValidated');
        return this.validateField(field);
    };
    /**
     * Disable particular validator for given field
     *
     * @param {string} field The field name
     * @param {string} validator The validator name. If it isn't specified, all validators will be disabled
     * @return {Core}
     */
    Core.prototype.disableValidator = function (field, validator) {
        return this.toggleValidator(false, field, validator);
    };
    /**
     * Enable particular validator for given field
     *
     * @param {string} field The field name
     * @param {string} validator The validator name. If it isn't specified, all validators will be enabled
     * @return {Core}
     */
    Core.prototype.enableValidator = function (field, validator) {
        return this.toggleValidator(true, field, validator);
    };
    /**
     * Update option of particular validator for given field
     *
     * @param {string} field The field name
     * @param {string} validator The validator name
     * @param {string} name The option's name
     * @param {any} value The option's value
     * @return {Core}
     */
    Core.prototype.updateValidatorOption = function (field, validator, name, value) {
        if (this.fields[field] && this.fields[field].validators && this.fields[field].validators[validator]) {
            this.fields[field].validators[validator][name] = value;
        }
        return this;
    };
    Core.prototype.setFieldOptions = function (field, options) {
        this.fields[field] = options;
        return this;
    };
    Core.prototype.destroy = function () {
        var _this = this;
        // Remove plugins and filters
        Object.keys(this.plugins).forEach(function (id) { return _this.plugins[id].uninstall(); });
        this.ee.clear();
        this.filter.clear();
        this.results.clear();
        this.plugins = {};
        return this;
    };
    Core.prototype.setLocale = function (locale, localization) {
        this.locale = locale;
        this.localization = localization;
        return this;
    };
    Core.prototype.waterfall = function (promises) {
        return promises.reduce(function (p, c, i, a) {
            return p.then(function (res) {
                return c().then(function (result) {
                    res.push(result);
                    return res;
                });
            });
        }, Promise.resolve([]));
    };
    Core.prototype.queryElements = function (field) {
        var selector = (this.fields[field].selector)
            // Check if the selector is an ID selector which starts with `#`
            ? ('#' === this.fields[field].selector.charAt(0)
                ? "[id=\"".concat(this.fields[field].selector.substring(1), "\"]")
                : this.fields[field].selector)
            : "[name=\"".concat(field, "\"]");
        return [].slice.call(this.form.querySelectorAll(selector));
    };
    Core.prototype.normalizeResult = function (field, validator, result) {
        var opts = this.fields[field].validators[validator];
        return Object.assign({}, result, {
            message: result.message
                || (opts ? opts.message : '')
                || (this.localization && this.localization[validator] && this.localization[validator].default
                    ? this.localization[validator].default : '')
                || "The field ".concat(field, " is not valid"),
        });
    };
    Core.prototype.toggleValidator = function (enabled, field, validator) {
        var _this = this;
        var validatorArr = this.fields[field].validators;
        if (validator && validatorArr && validatorArr[validator]) {
            this.fields[field].validators[validator].enabled = enabled;
        }
        else if (!validator) {
            Object.keys(validatorArr).forEach(function (v) { return _this.fields[field].validators[v].enabled = enabled; });
        }
        return this.updateFieldStatus(field, 'NotValidated', validator);
    };
    return Core;
}());
exports.Core = Core;
function formValidation(form, options) {
    var opts = Object.assign({}, {
        fields: {},
        locale: 'en_US',
        plugins: {},
    }, options);
    var core = new Core(form, opts.fields);
    core.setLocale(opts.locale, opts.localization);
    // Register plugins
    Object.keys(opts.plugins).forEach(function (name) { return core.registerPlugin(name, opts.plugins[name]); });
    // Register basic validators
    Object.keys(index_1.default).forEach(function (name) { return core.registerValidator(name, index_1.default[name]); });
    // and add fields
    Object.keys(opts.fields).forEach(function (field) { return core.addField(field, opts.fields[field]); });
    return core;
}
exports.default = formValidation;
//# sourceMappingURL=Core.js.map
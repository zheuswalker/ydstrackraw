"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = require("../../utils/format");
// vat validators for supported countries
var arVat_1 = require("./arVat");
var atVat_1 = require("./atVat");
var beVat_1 = require("./beVat");
var bgVat_1 = require("./bgVat");
var brVat_1 = require("./brVat");
var chVat_1 = require("./chVat");
var cyVat_1 = require("./cyVat");
var czVat_1 = require("./czVat");
var deVat_1 = require("./deVat");
var dkVat_1 = require("./dkVat");
var eeVat_1 = require("./eeVat");
var esVat_1 = require("./esVat");
var fiVat_1 = require("./fiVat");
var frVat_1 = require("./frVat");
var gbVat_1 = require("./gbVat");
var grVat_1 = require("./grVat");
var hrVat_1 = require("./hrVat");
var huVat_1 = require("./huVat");
var ieVat_1 = require("./ieVat");
var isVat_1 = require("./isVat");
var itVat_1 = require("./itVat");
var ltVat_1 = require("./ltVat");
var luVat_1 = require("./luVat");
var lvVat_1 = require("./lvVat");
var mtVat_1 = require("./mtVat");
var nlVat_1 = require("./nlVat");
var noVat_1 = require("./noVat");
var plVat_1 = require("./plVat");
var ptVat_1 = require("./ptVat");
var roVat_1 = require("./roVat");
var rsVat_1 = require("./rsVat");
var ruVat_1 = require("./ruVat");
var seVat_1 = require("./seVat");
var siVat_1 = require("./siVat");
var skVat_1 = require("./skVat");
var veVat_1 = require("./veVat");
var zaVat_1 = require("./zaVat");
function vat() {
    // Supported country codes
    var COUNTRY_CODES = [
        'AR', 'AT', 'BE', 'BG', 'BR', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR',
        'HU', 'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'RS', 'SE', 'SK', 'SI',
        'VE', 'ZA',
    ];
    return {
        /**
         * Validate an European VAT number
         */
        validate: function (input) {
            var value = input.value;
            if (value === '') {
                return { valid: true };
            }
            var opts = Object.assign({}, { message: '' }, input.options);
            var country = value.substr(0, 2);
            if ('function' === typeof opts.country) {
                country = opts.country.call(this);
            }
            else {
                country = opts.country;
            }
            if (COUNTRY_CODES.indexOf(country) === -1) {
                return { valid: true };
            }
            var result = {
                meta: {},
                valid: true,
            };
            switch (country.toLowerCase()) {
                case 'ar':
                    result = (0, arVat_1.default)(value);
                    break;
                case 'at':
                    result = (0, atVat_1.default)(value);
                    break;
                case 'be':
                    result = (0, beVat_1.default)(value);
                    break;
                case 'bg':
                    result = (0, bgVat_1.default)(value);
                    break;
                case 'br':
                    result = (0, brVat_1.default)(value);
                    break;
                case 'ch':
                    result = (0, chVat_1.default)(value);
                    break;
                case 'cy':
                    result = (0, cyVat_1.default)(value);
                    break;
                case 'cz':
                    result = (0, czVat_1.default)(value);
                    break;
                case 'de':
                    result = (0, deVat_1.default)(value);
                    break;
                case 'dk':
                    result = (0, dkVat_1.default)(value);
                    break;
                case 'ee':
                    result = (0, eeVat_1.default)(value);
                    break;
                // EL is traditionally prefix of Greek VAT numbers
                case 'el':
                    result = (0, grVat_1.default)(value);
                    break;
                case 'es':
                    result = (0, esVat_1.default)(value);
                    break;
                case 'fi':
                    result = (0, fiVat_1.default)(value);
                    break;
                case 'fr':
                    result = (0, frVat_1.default)(value);
                    break;
                case 'gb':
                    result = (0, gbVat_1.default)(value);
                    break;
                case 'gr':
                    result = (0, grVat_1.default)(value);
                    break;
                case 'hr':
                    result = (0, hrVat_1.default)(value);
                    break;
                case 'hu':
                    result = (0, huVat_1.default)(value);
                    break;
                case 'ie':
                    result = (0, ieVat_1.default)(value);
                    break;
                case 'is':
                    result = (0, isVat_1.default)(value);
                    break;
                case 'it':
                    result = (0, itVat_1.default)(value);
                    break;
                case 'lt':
                    result = (0, ltVat_1.default)(value);
                    break;
                case 'lu':
                    result = (0, luVat_1.default)(value);
                    break;
                case 'lv':
                    result = (0, lvVat_1.default)(value);
                    break;
                case 'mt':
                    result = (0, mtVat_1.default)(value);
                    break;
                case 'nl':
                    result = (0, nlVat_1.default)(value);
                    break;
                case 'no':
                    result = (0, noVat_1.default)(value);
                    break;
                case 'pl':
                    result = (0, plVat_1.default)(value);
                    break;
                case 'pt':
                    result = (0, ptVat_1.default)(value);
                    break;
                case 'ro':
                    result = (0, roVat_1.default)(value);
                    break;
                case 'rs':
                    result = (0, rsVat_1.default)(value);
                    break;
                case 'ru':
                    result = (0, ruVat_1.default)(value);
                    break;
                case 'se':
                    result = (0, seVat_1.default)(value);
                    break;
                case 'si':
                    result = (0, siVat_1.default)(value);
                    break;
                case 'sk':
                    result = (0, skVat_1.default)(value);
                    break;
                case 've':
                    result = (0, veVat_1.default)(value);
                    break;
                case 'za':
                    result = (0, zaVat_1.default)(value);
                    break;
                default: break;
            }
            var message = (0, format_1.default)(input.l10n ? opts.message || input.l10n.vat.country : opts.message, input.l10n ? input.l10n.vat.countries[country.toUpperCase()] : country.toUpperCase());
            return Object.assign({}, { message: message }, result);
        },
    };
}
exports.default = vat;
//# sourceMappingURL=index.js.map
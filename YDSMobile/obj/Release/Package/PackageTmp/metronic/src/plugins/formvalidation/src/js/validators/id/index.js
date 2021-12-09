"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var format_1 = require("../../utils/format");
// ID validators for supported countries
var arId_1 = require("./arId");
var baId_1 = require("./baId");
var bgId_1 = require("./bgId");
var brId_1 = require("./brId");
var chId_1 = require("./chId");
var clId_1 = require("./clId");
var cnId_1 = require("./cnId");
var coId_1 = require("./coId");
var czId_1 = require("./czId");
var dkId_1 = require("./dkId");
var esId_1 = require("./esId");
var fiId_1 = require("./fiId");
var frId_1 = require("./frId");
var hkId_1 = require("./hkId");
var hrId_1 = require("./hrId");
var idId_1 = require("./idId");
var ieId_1 = require("./ieId");
var ilId_1 = require("./ilId");
var isId_1 = require("./isId");
var krId_1 = require("./krId");
var ltId_1 = require("./ltId");
var lvId_1 = require("./lvId");
var meId_1 = require("./meId");
var mkId_1 = require("./mkId");
var mxId_1 = require("./mxId");
var myId_1 = require("./myId");
var nlId_1 = require("./nlId");
var noId_1 = require("./noId");
var peId_1 = require("./peId");
var plId_1 = require("./plId");
var roId_1 = require("./roId");
var rsId_1 = require("./rsId");
var seId_1 = require("./seId");
var siId_1 = require("./siId");
var smId_1 = require("./smId");
var thId_1 = require("./thId");
var trId_1 = require("./trId");
var twId_1 = require("./twId");
var uyId_1 = require("./uyId");
var zaId_1 = require("./zaId");
function id() {
    // Supported country codes
    var COUNTRY_CODES = [
        'AR', 'BA', 'BG', 'BR', 'CH', 'CL', 'CN', 'CO', 'CZ', 'DK', 'EE', 'ES', 'FI', 'FR', 'HK', 'HR', 'ID', 'IE',
        'IL', 'IS', 'KR', 'LT', 'LV', 'ME', 'MK', 'MX', 'MY', 'NL', 'NO', 'PE', 'PL', 'RO', 'RS', 'SE', 'SI', 'SK',
        'SM', 'TH', 'TR', 'TW', 'UY', 'ZA',
    ];
    return {
        /**
         * Validate identification number in different countries
         * @see http://en.wikipedia.org/wiki/National_identification_number
         */
        validate: function (input) {
            if (input.value === '') {
                return { valid: true };
            }
            var opts = Object.assign({}, { message: '' }, input.options);
            var country = input.value.substr(0, 2);
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
                    result = (0, arId_1.default)(input.value);
                    break;
                case 'ba':
                    result = (0, baId_1.default)(input.value);
                    break;
                case 'bg':
                    result = (0, bgId_1.default)(input.value);
                    break;
                case 'br':
                    result = (0, brId_1.default)(input.value);
                    break;
                case 'ch':
                    result = (0, chId_1.default)(input.value);
                    break;
                case 'cl':
                    result = (0, clId_1.default)(input.value);
                    break;
                case 'cn':
                    result = (0, cnId_1.default)(input.value);
                    break;
                case 'co':
                    result = (0, coId_1.default)(input.value);
                    break;
                case 'cz':
                    result = (0, czId_1.default)(input.value);
                    break;
                case 'dk':
                    result = (0, dkId_1.default)(input.value);
                    break;
                // Validate Estonian Personal Identification Code (isikukood)
                // Use the same format as Lithuanian Personal Code
                // See http://et.wikipedia.org/wiki/Isikukood
                case 'ee':
                    result = (0, ltId_1.default)(input.value);
                    break;
                case 'es':
                    result = (0, esId_1.default)(input.value);
                    break;
                case 'fi':
                    result = (0, fiId_1.default)(input.value);
                    break;
                case 'fr':
                    result = (0, frId_1.default)(input.value);
                    break;
                case 'hk':
                    result = (0, hkId_1.default)(input.value);
                    break;
                case 'hr':
                    result = (0, hrId_1.default)(input.value);
                    break;
                case 'id':
                    result = (0, idId_1.default)(input.value);
                    break;
                case 'ie':
                    result = (0, ieId_1.default)(input.value);
                    break;
                case 'il':
                    result = (0, ilId_1.default)(input.value);
                    break;
                case 'is':
                    result = (0, isId_1.default)(input.value);
                    break;
                case 'kr':
                    result = (0, krId_1.default)(input.value);
                    break;
                case 'lt':
                    result = (0, ltId_1.default)(input.value);
                    break;
                case 'lv':
                    result = (0, lvId_1.default)(input.value);
                    break;
                case 'me':
                    result = (0, meId_1.default)(input.value);
                    break;
                case 'mk':
                    result = (0, mkId_1.default)(input.value);
                    break;
                case 'mx':
                    result = (0, mxId_1.default)(input.value);
                    break;
                case 'my':
                    result = (0, myId_1.default)(input.value);
                    break;
                case 'nl':
                    result = (0, nlId_1.default)(input.value);
                    break;
                case 'no':
                    result = (0, noId_1.default)(input.value);
                    break;
                case 'pe':
                    result = (0, peId_1.default)(input.value);
                    break;
                case 'pl':
                    result = (0, plId_1.default)(input.value);
                    break;
                case 'ro':
                    result = (0, roId_1.default)(input.value);
                    break;
                case 'rs':
                    result = (0, rsId_1.default)(input.value);
                    break;
                case 'se':
                    result = (0, seId_1.default)(input.value);
                    break;
                case 'si':
                    result = (0, siId_1.default)(input.value);
                    break;
                // Validate Slovak national identifier number (RC)
                // Slovakia uses the same format as Czech Republic
                case 'sk':
                    result = (0, czId_1.default)(input.value);
                    break;
                case 'sm':
                    result = (0, smId_1.default)(input.value);
                    break;
                case 'th':
                    result = (0, thId_1.default)(input.value);
                    break;
                case 'tr':
                    result = (0, trId_1.default)(input.value);
                    break;
                case 'tw':
                    result = (0, twId_1.default)(input.value);
                    break;
                case 'uy':
                    result = (0, uyId_1.default)(input.value);
                    break;
                case 'za':
                    result = (0, zaId_1.default)(input.value);
                    break;
                default: break;
            }
            var message = (0, format_1.default)(input.l10n ? opts.message || input.l10n.id.country : opts.message, input.l10n ? input.l10n.id.countries[country.toUpperCase()] : country.toUpperCase());
            return Object.assign({}, { message: message }, result);
        },
    };
}
exports.default = id;
//# sourceMappingURL=index.js.map
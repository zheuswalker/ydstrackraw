"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var between_1 = require("./between");
var blank_1 = require("./blank");
var callback_1 = require("./callback");
var choice_1 = require("./choice");
var creditCard_1 = require("./creditCard");
var date_1 = require("./date");
var different_1 = require("./different");
var digits_1 = require("./digits");
var emailAddress_1 = require("./emailAddress");
var file_1 = require("./file");
var greaterThan_1 = require("./greaterThan");
var identical_1 = require("./identical");
var integer_1 = require("./integer");
var ip_1 = require("./ip");
var lessThan_1 = require("./lessThan");
var notEmpty_1 = require("./notEmpty");
var numeric_1 = require("./numeric");
var promise_1 = require("./promise");
var regexp_1 = require("./regexp");
var remote_1 = require("./remote");
var stringCase_1 = require("./stringCase");
var stringLength_1 = require("./stringLength");
var uri_1 = require("./uri");
// Additional validators
var base64_1 = require("./base64");
var bic_1 = require("./bic");
var color_1 = require("./color");
var cusip_1 = require("./cusip");
var ean_1 = require("./ean");
var ein_1 = require("./ein");
var grid_1 = require("./grid");
var hex_1 = require("./hex");
var iban_1 = require("./iban");
var index_1 = require("./id/index");
var imei_1 = require("./imei");
var imo_1 = require("./imo");
var isbn_1 = require("./isbn");
var isin_1 = require("./isin");
var ismn_1 = require("./ismn");
var issn_1 = require("./issn");
var mac_1 = require("./mac");
var meid_1 = require("./meid");
var phone_1 = require("./phone");
var rtn_1 = require("./rtn");
var sedol_1 = require("./sedol");
var siren_1 = require("./siren");
var siret_1 = require("./siret");
var step_1 = require("./step");
var uuid_1 = require("./uuid");
var index_2 = require("./vat/index");
var vin_1 = require("./vin");
var zipCode_1 = require("./zipCode");
/* tslint:disable:object-literal-sort-keys */
exports.default = {
    between: between_1.default,
    blank: blank_1.default,
    callback: callback_1.default,
    choice: choice_1.default,
    creditCard: creditCard_1.default,
    date: date_1.default,
    different: different_1.default,
    digits: digits_1.default,
    emailAddress: emailAddress_1.default,
    file: file_1.default,
    greaterThan: greaterThan_1.default,
    identical: identical_1.default,
    integer: integer_1.default,
    ip: ip_1.default,
    lessThan: lessThan_1.default,
    notEmpty: notEmpty_1.default,
    numeric: numeric_1.default,
    promise: promise_1.default,
    regexp: regexp_1.default,
    remote: remote_1.default,
    stringCase: stringCase_1.default,
    stringLength: stringLength_1.default,
    uri: uri_1.default,
    // Additional validators
    base64: base64_1.default,
    bic: bic_1.default,
    color: color_1.default,
    cusip: cusip_1.default,
    ean: ean_1.default,
    ein: ein_1.default,
    grid: grid_1.default,
    hex: hex_1.default,
    iban: iban_1.default,
    id: index_1.default,
    imei: imei_1.default,
    imo: imo_1.default,
    isbn: isbn_1.default,
    isin: isin_1.default,
    ismn: ismn_1.default,
    issn: issn_1.default,
    mac: mac_1.default,
    meid: meid_1.default,
    phone: phone_1.default,
    rtn: rtn_1.default,
    sedol: sedol_1.default,
    siren: siren_1.default,
    siret: siret_1.default,
    step: step_1.default,
    uuid: uuid_1.default,
    vat: index_2.default,
    vin: vin_1.default,
    zipCode: zipCode_1.default,
};
/* tslint:enable:object-literal-sort-keys */
//# sourceMappingURL=index-full.js.map
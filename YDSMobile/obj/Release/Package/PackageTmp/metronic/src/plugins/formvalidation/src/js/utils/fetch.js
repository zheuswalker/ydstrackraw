"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
function fetch(url, options) {
    var toQuery = function (obj) {
        return Object.keys(obj).map(function (k) { return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(obj[k])); }).join('&');
    };
    return new Promise(function (resolve, reject) {
        var opts = Object.assign({}, {
            crossDomain: false,
            headers: {},
            method: 'GET',
            params: {},
        }, options);
        // Build the params for GET request
        var params = Object.keys(opts.params)
            .map(function (k) { return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(opts.params[k])); })
            .join('&');
        var hasQuery = url.indexOf('?');
        var requestUrl = ('GET' === opts.method) ? "".concat(url).concat(hasQuery ? '?' : '&').concat(params) : url;
        if (opts.crossDomain) {
            // User is making cross domain request
            var script_1 = document.createElement('script');
            var callback_1 = "___fetch".concat(Date.now(), "___");
            window[callback_1] = function (data) {
                delete window[callback_1];
                resolve(data);
            };
            script_1.src = "".concat(requestUrl).concat(hasQuery ? '&' : '?', "callback=").concat(callback_1);
            script_1.async = true;
            script_1.addEventListener('load', function () {
                script_1.parentNode.removeChild(script_1);
            });
            script_1.addEventListener('error', function () { return reject; });
            document.head.appendChild(script_1);
        }
        else {
            var request_1 = new XMLHttpRequest();
            request_1.open(opts.method, requestUrl);
            // Set the headers
            request_1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            if ('POST' === opts.method) {
                request_1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
            Object.keys(opts.headers).forEach(function (k) { return request_1.setRequestHeader(k, opts.headers[k]); });
            request_1.addEventListener('load', function () {
                // Cannot use arrow function here due to the `this` scope
                resolve(JSON.parse(this.responseText));
            });
            request_1.addEventListener('error', function () { return reject; });
            // GET request will ignore the passed data here
            request_1.send(toQuery(opts.params));
        }
    });
}
exports.default = fetch;
//# sourceMappingURL=fetch.js.map
"use strict";
/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */
Object.defineProperty(exports, "__esModule", { value: true });
function file() {
    return {
        validate: function (input) {
            if (input.value === '') {
                return { valid: true };
            }
            var extension;
            var extensions = input.options.extension ? input.options.extension.toLowerCase().split(',') : null;
            var types = input.options.type ? input.options.type.toLowerCase().split(',') : null;
            // tslint:disable-next-line:no-string-literal
            var html5 = (window['File'] && window['FileList'] && window['FileReader']);
            if (html5) {
                // Get FileList instance
                var files = input.element.files;
                var total = files.length;
                var allSize = 0;
                // Check the maxFiles
                if (input.options.maxFiles && total > parseInt("".concat(input.options.maxFiles), 10)) {
                    return {
                        meta: { error: 'INVALID_MAX_FILES' },
                        valid: false,
                    };
                }
                // Check the minFiles
                if (input.options.minFiles && total < parseInt("".concat(input.options.minFiles), 10)) {
                    return {
                        meta: { error: 'INVALID_MIN_FILES' },
                        valid: false,
                    };
                }
                var metaData = {};
                for (var i = 0; i < total; i++) {
                    allSize += files[i].size;
                    extension = files[i].name.substr(files[i].name.lastIndexOf('.') + 1);
                    metaData = {
                        ext: extension,
                        file: files[i],
                        size: files[i].size,
                        type: files[i].type,
                    };
                    // Check the minSize
                    if (input.options.minSize && files[i].size < parseInt("".concat(input.options.minSize), 10)) {
                        return {
                            meta: Object.assign({}, { error: 'INVALID_MIN_SIZE' }, metaData),
                            valid: false,
                        };
                    }
                    // Check the maxSize
                    if (input.options.maxSize && files[i].size > parseInt("".concat(input.options.maxSize), 10)) {
                        return {
                            meta: Object.assign({}, { error: 'INVALID_MAX_SIZE' }, metaData),
                            valid: false,
                        };
                    }
                    // Check file extension
                    if (extensions && extensions.indexOf(extension.toLowerCase()) === -1) {
                        return {
                            meta: Object.assign({}, { error: 'INVALID_EXTENSION' }, metaData),
                            valid: false,
                        };
                    }
                    // Check file type
                    if (files[i].type && types && types.indexOf(files[i].type.toLowerCase()) === -1) {
                        return {
                            meta: Object.assign({}, { error: 'INVALID_TYPE' }, metaData),
                            valid: false,
                        };
                    }
                }
                // Check the maxTotalSize
                if (input.options.maxTotalSize && allSize > parseInt("".concat(input.options.maxTotalSize), 10)) {
                    return {
                        meta: Object.assign({}, {
                            error: 'INVALID_MAX_TOTAL_SIZE',
                            totalSize: allSize,
                        }, metaData),
                        valid: false,
                    };
                }
                // Check the minTotalSize
                if (input.options.minTotalSize && allSize < parseInt("".concat(input.options.minTotalSize), 10)) {
                    return {
                        meta: Object.assign({}, {
                            error: 'INVALID_MIN_TOTAL_SIZE',
                            totalSize: allSize,
                        }, metaData),
                        valid: false,
                    };
                }
            }
            else {
                // Check file extension
                extension = input.value.substr(input.value.lastIndexOf('.') + 1);
                if (extensions && extensions.indexOf(extension.toLowerCase()) === -1) {
                    return {
                        meta: {
                            error: 'INVALID_EXTENSION',
                            ext: extension,
                        },
                        valid: false,
                    };
                }
            }
            return { valid: true };
        },
    };
}
exports.default = file;
//# sourceMappingURL=file.js.map
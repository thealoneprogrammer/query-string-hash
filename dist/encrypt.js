'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var MIN_KEY_LENGTH = 16;

var encryptQueryParams = function encryptQueryParams() {
    var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'real secret keys should be long and random';

    if (key.length < 16) return 'key must be at least 16 characters long';
    var encryptor = require("simple-encryptor")(key);
    var encryptedHash = encryptor.encrypt(queryString);
    return encryptedHash;
};

exports.default = encryptQueryParams;
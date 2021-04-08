'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var decryptQueryParams = function decryptQueryParams() {
    var encryptedHash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'real secret keys should be long and random';

    var encryptor = require("simple-encryptor")(key);
    var queryString = require("query-string");

    var decrypted = encryptor.decrypt(encryptedHash.replace(/ /g, "+"));
    var parsed = queryString.parse('?' + decrypted);
    return parsed;
};

exports.default = decryptQueryParams;
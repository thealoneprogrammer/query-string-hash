const decryptQueryParams = (encryptedHash = '', key = 'real secret keys should be long and random') => {
    const encryptor = require("simple-encryptor")(key);
    const queryString = require("query-string");

    const decrypted = encryptor.decrypt(
        encryptedHash.replace(/ /g, "+")
    );
    const parsed = queryString.parse(`?${decrypted}`);
    return parsed
}

export default decryptQueryParams
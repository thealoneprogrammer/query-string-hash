const MIN_KEY_LENGTH = 16

const encryptQueryParams = (queryString = '', key = 'real secret keys should be long and random') => {
    if (key.length < MIN_KEY_LENGTH) return 'key must be at least 16 characters long'
    const encryptor = require("simple-encryptor")(key);
    const encryptedHash = encryptor.encrypt(queryString)
    return encryptedHash
}

export default encryptQueryParams

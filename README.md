##  **query-string-hash**
> **Encrypt and Decrypt query string**

query-string-hash hides the query string params by encrypting them it into two way hash.

## **How it works?**
- Hides query params from URL by hashing them.
- Encrypt the query params with a strong key.
- Decrypt and get JSON by using the same key.

## **Install**
```sh 
$ npm install query-string-hash 
OR
$ yarn add query-string-hash
```

This module uses [simple-encryptor](https://www.npmjs.com/package/simple-encryptor). to encrypt and decrypt the string and [query-string](https://www.npmjs.com/package/query-string) to parse the string.


## **Usage**

##### **At encryption side**

```js
const { encryptQueryParams } = require('query-string-hash')
const key = "real secret keys should be long and random"; //Encryption key (optional) should be atleast 16 characters long.

const queryParams = 'name=John&&age=22&&number=9876543210'; //query string params which you want to encrypt
const hash = encryptQueryParams(queryParams, key) // returns the encryptd hash which can be used as a single query string while routing
Or
const hash = encryptQueryParams(queryParams) // key is optional.

// Output 
hash = 0561267fc5adccb1a3898b2d24af78b1eb69b980b5a1180d60494f9d64afccbd081b27110880da8fadbe10ffa3fa4420uO8Ub4lj652Veq5u4DraQ2YH9j96/VjfFMQfJaYE7W05io6I4WQgV8QbZAA+Wc4R
```

##### **At decryption side**

```js
const { decryptQueryParams } = require('query-string-hash')
const key = "real secret keys should be long and random";

const queryParams = decryptQueryParams(hash, key) //returns the decrypted query params which can be used for further processing in JSON format.
Or
const queryParams = decryptQueryParams(hash) //key is optional

// Output 
queryParams = {
  age: '22',
  name: 'John',
  number: '9876543210'
}
```

## **Usage with ES6**
```js
import { encryptQueryParams, decryptQueryParams } from "query-string-hash";
```

## **Options**
1. **hash**: {
    type: string,
    required: true
}
2. **key**: {
    type: string,
    required: false
}

## **Example**
Usage with Vue
URL ``` https://example.com?name=John&&age=22&&number=9876543210``` can be encrypred as below
```js
  import { encryptQueryParams } from 'query-string-hash'
  export default {
      // other options
      methods: {
          exampleFunc() {
				const key = "real secret keys should be long and random";
            	const queryParams = 'name=John&&age=22&&number=9876543210'; 
				const hash = encryptQueryParams(queryParams, key)
                Or
                const hash = encryptQueryParams(queryParams) // key is optional.
            	this.$router.push(`https://example.com?hash=${hash}`)
          }
      }
  }
```
Above URL becomes ```https://example.com?hash=0561267fc5adccb1a3898b2d24af78b1eb69b980b5a1180d60494f9d64afccbd081b27110880da8fadbe10ffa3fa4420uO8Ub4lj652Veq5u4DraQ2YH9j96/VjfFMQfJaYE7W05io6I4WQgV8QbZAA+Wc4R```

At decryption side
Extract query string from ```https://example.com?hash=0561267fc5adccb1a3898b2d24af78b1eb69b980b5a1180d60494f9d64afccbd081b27110880da8fadbe10ffa3fa4420uO8Ub4lj652Veq5u4DraQ2YH9j96/VjfFMQfJaYE7W05io6I4WQgV8QbZAA+Wc4R```
```js
import { decryptQueryParams } from 'query-string-hash'
  export default {
      // other options
      methods: {
          exampleFunc() {
				const key = "real secret keys should be long and random";
                const queryParams = decryptQueryParams(this.$route.query.hash, key)
                Or
                const queryParams = decryptQueryParams(this.$route.query.hash) //key is optional
                
                //play with decrypted params ie; queryParams
          }
      }
  }
```
Gives us ```{
  age: '22',
  name: 'John',
  number: '9876543210'
}```
## **Development**
Install packages
```sh
$ npm install
```
Build
```sh
$ npm run build
```

# Recycle Mates Client App

## To Run

1. `cd` into the client directory
2. `npm i`
3. `npm run start` (or `npm start`)

If you get the following bug, try `npm run startLegacy` instead of `npm run start`

```bash
node:internal/crypto/hash:71
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:140:10)
    at module.exports (/home/andrew/GT/JID-2327-RecycleMates/client/node_modules/webpack/lib/util/createHash.js:135:53)
    at NormalModule._initBuildHash (/home/andrew/GT/JID-2327-RecycleMates/client/node_modules/webpack/lib/NormalModule.js:417:16)
    at handleParseError (/home/andrew/GT/JID-2327-RecycleMates/client/node_modules/webpack/lib/NormalModule.js:471:10)
    at /home/andrew/GT/JID-2327-RecycleMates/client/node_modules/webpack/lib/NormalModule.js:503:5
    at /home/andrew/GT/JID-2327-RecycleMates/client/node_modules/webpack/lib/NormalModule.js:358:12
    at /home/andrew/GT/JID-2327-RecycleMates/client/node_modules/loader-runner/lib/LoaderRunner.js:373:3
    at iterateNormalLoaders (/home/andrew/GT/JID-2327-RecycleMates/client/node_modules/loader-runner/lib/LoaderRunner.js:214:10)
    at Array.<anonymous> (/home/andrew/GT/JID-2327-RecycleMates/client/node_modules/loader-runner/lib/LoaderRunner.js:205:4)
    at Storage.finished (/home/andrew/GT/JID-2327-RecycleMates/client/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)
    at /home/andrew/GT/JID-2327-RecycleMates/client/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9
    at /home/andrew/GT/JID-2327-RecycleMates/client/node_modules/graceful-fs/graceful-fs.js:123:16
    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3) {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
```

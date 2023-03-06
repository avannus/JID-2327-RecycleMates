# Recycle Mates Client App

## To Run

1. [Ensure node is installed](../README.md##Runtime-Requirements)
2. Create a `.env` file in this directory `<project>/client/.env`
3. Add SERVER as a key/value pair
   1. `SERVER=http://192.168.86.234:3000/`
4. Install dependencies
   1. `cd` into the client directory
   2. `npm i` (or `npm install`)
5. Run with Expo
   1. `npm run start` (or `npm start`)
      1. One of the following to open the UI
         1. Scan the QR code with a phone on the same network and the Expo app (I think you need to scan within the Expo app on Android)
         2. Read the printout for other run-time options

## Get working in a browser

You must disable CORS to get this working within a browser.

**Note that this is a security risk to leave on outside of development.**

Here is a firefox extension to do so: https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/

## Notes

Expo will try to auto-update if you make changes, but sometimes it crashes when doing so, and your viewer will be stuck with the last working code. Kill Expo with `ctrl+C` and reopen it with the above commands.

---

## Crashes

If you get the following crash on start, try `npm run startLegacy` instead of `npm run start`

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

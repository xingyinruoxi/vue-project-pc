const CryptoJS = require('crypto-js') // 引用AES源码js

const key = CryptoJS.enc.Utf8.parse('aG9ybmJpbGw=1111') // 密钥
    // const iv = CryptoJS.enc.Utf8.parse('aG9ybmJpbGw=1111') // 密钥偏移量

// 解密方法
export function decrypt(word) {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    const decrypt = CryptoJS.AES.decrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
}

// 加密方法
export function encrypt(word) {
    const srcs = CryptoJS.enc.Utf8.parse(JSON.stringify(word))
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
    encrypted = encrypted.ciphertext.toString(CryptoJS.enc.Hex)
    return encrypted
}
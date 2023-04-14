/*
encrypted Buffer
Returns string - the decrypted string. Decrypts the encrypted buffer obtained with safeStorage.encryptString back into a string.

This function will throw an error if decryption fails.
*/

const {app,BrowserWindow, safeStorage} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    const stringBuffer = safeStorage.encryptString('some text in here')

    console.log(stringBuffer)           // <Buffer 76 31 30 17 da 97 34 61 c3 24 4a 59 45 bf 17 09 76 61 13 a7 a6 50 39 e6 c6 f0 13 6c 09 e6 bc 7f 08 cb 41 67 b0 f5 8e 6f 42 e9 f6 a5 77 83 fc f8>

    const original = safeStorage.decryptString(stringBuffer)

    console.log(original);              // some text in here
}

app.whenReady().then(createWindow)

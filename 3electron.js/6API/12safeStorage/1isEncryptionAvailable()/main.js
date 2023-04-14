/*
Returns boolean - Whether encryption is available.

On Linux, returns true if the app has emitted the ready event and the secret key is available. On MacOS, returns true if Keychain is available. 
On Windows, returns true once the app has emitted the ready event.
*/

const {app,BrowserWindow, safeStorage} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    console.log(safeStorage.isEncryptionAvailable())        // true
}

app.whenReady().then(createWindow)

/*
type string (optional) - Can be selection or clipboard; default is 'clipboard'. selection is only available on Linux.
Returns string[] - An array of supported formats for the clipboard type.

*/
const {app, BrowserWindow, clipboard, nativeImage} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    const format = clipboard.availableFormats()
    console.log(format)                 // [ 'text/plain', 'text/html', 'vscode-editor-data' ]

}

app.whenReady().then(createWindow)


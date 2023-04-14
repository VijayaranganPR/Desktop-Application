/*
format string
type string (optional) - Can be selection or clipboard; default is 'clipboard'. selection is only available on Linux.
Returns boolean - Whether the clipboard supports the specified format.

*/
const {app, BrowserWindow, clipboard, nativeImage} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    const format = clipboard.availableFormats()
    console.log(format)                 // [ 'text/plain', 'text/html', 'vscode-editor-data' ]

    console.log(clipboard.has('text/html'))            // false

}

app.whenReady().then(createWindow)


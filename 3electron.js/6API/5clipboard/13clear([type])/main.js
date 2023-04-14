/*
type string (optional) - Can be selection or clipboard; default is 'clipboard'. selection is only available on Linux.
Clears the clipboard content.

*/
const {app, BrowserWindow, clipboard, nativeImage} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    // Clear only the text contents of the clipboard
    clipboard.clear('clipboard')

}

app.whenReady().then(createWindow)


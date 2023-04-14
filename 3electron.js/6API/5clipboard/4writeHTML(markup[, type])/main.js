/*
markup string
type string (optional) - Can be selection or clipboard; default is 'clipboard'. selection is only available on Linux.
Writes markup to the clipboard.
*/
const {app, BrowserWindow, clipboard} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    clipboard.writeHTML('<b>Hi</b>')
    const html = clipboard.readHTML()               // <b>Hi</b>

    console.log(html)
}

app.whenReady().then(createWindow)

/*
type string (optional) - Can be selection or clipboard; default is 'clipboard'. selection is only available on Linux.
Returns string - The content in the clipboard as plain text.

I am copying this text
Hello, World!
*/
const {app, BrowserWindow, clipboard} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    const text = clipboard.readText()
    console.log(text)
}

app.whenReady().then(createWindow)

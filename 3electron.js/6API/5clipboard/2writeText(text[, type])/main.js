/*
text string
type string (optional) - Can be selection or clipboard; default is 'clipboard'. selection is only available on Linux.
Writes the text into the clipboard as plain text.

*/
const {app, BrowserWindow, clipboard} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    const text = 'hello i am a bit of text!'            // will be added to clip board
    clipboard.writeText(text)
    
}

app.whenReady().then(createWindow)

/*
format string
buffer Buffer
type string (optional) - Can be selection or clipboard; default is 'clipboard'. selection is only available on Linux.
Writes the buffer into the clipboard as format.

*/
const {app, BrowserWindow, clipboard, nativeImage} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')


    const buffer = Buffer.from('this is binary', 'utf8')
    clipboard.writeBuffer('public/utf8-plain-text', buffer)
    
    const out = clipboard.readBuffer('public/utf8-plain-text')
    
    console.log(buffer.equals(out))             // true
}

app.whenReady().then(createWindow)


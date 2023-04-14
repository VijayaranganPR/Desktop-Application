/*
format string
Returns Buffer - Reads format type from the clipboard.

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


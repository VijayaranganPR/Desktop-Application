/*
format string
Returns string - Reads format type from the clipboard.

format should contain valid ASCII characters and have / separator. a/c, a/bc are valid formats while /abc, abc/, a/, /a, a are not valid.

*/
const {app, BrowserWindow, clipboard, nativeImage} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    // Read text data from the clipboard
    const text = clipboard.read('text')

    // Display the text in the console
    console.log(text)
}

app.whenReady().then(createWindow)


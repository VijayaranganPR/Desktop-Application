/*
flag boolean
Starts or stops flashing the window to attract user's attention.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.flashFrame(true)
}

app.whenReady().then(createWindow)

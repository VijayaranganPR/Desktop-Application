/*
skip boolean
Makes the window not show in the taskbar.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.setSkipTaskbar(true)
}

app.whenReady().then(createWindow)

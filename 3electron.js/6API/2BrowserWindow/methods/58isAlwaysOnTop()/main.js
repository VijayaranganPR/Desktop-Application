/*
Returns boolean - Whether the window is always on top of other windows.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setAlwaysOnTop(true)
    console.log(win.isAlwaysOnTop());         // true
}

app.whenReady().then(createWindow)

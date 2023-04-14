/*
minimizable boolean
Sets whether the window can be manually minimized by user. On Linux does nothing.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setMinimizable(false)
    console.log(win.isMinimizable());         // false
}

app.whenReady().then(createWindow)

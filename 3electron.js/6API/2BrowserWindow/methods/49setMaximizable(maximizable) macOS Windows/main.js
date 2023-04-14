/*
maximizable boolean
Sets whether the window can be manually maximized by user. On Linux does nothing.


*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setMaximizable(false)
    console.log(win.isMaximizable());         // false
}

app.whenReady().then(createWindow)

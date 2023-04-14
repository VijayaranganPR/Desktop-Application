/*
movable boolean
Sets whether the window can be moved by user. On Linux does nothing.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setMovable(false)
    console.log(win.isMovable());         // false
}

app.whenReady().then(createWindow)

/*
Returns boolean - Whether the window can be moved by user.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setMovable(false)
    console.log(win.isMovable());         // false
}

app.whenReady().then(createWindow)

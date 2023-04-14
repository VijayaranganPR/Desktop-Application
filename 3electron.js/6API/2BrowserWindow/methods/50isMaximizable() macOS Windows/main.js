/*
Returns boolean - Whether the window can be manually maximized by user.

On Linux always returns true.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setMaximizable(false)
    console.log(win.isMaximizable());         // false
}

app.whenReady().then(createWindow)

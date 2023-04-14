/*
Returns boolean - Whether the window can be manually minimized by the user.
On Linux always returns true.


*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setMinimizable(false)
    console.log(win.isMinimizable());         // false
}

app.whenReady().then(createWindow)

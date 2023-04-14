/*
Returns boolean - Whether the window is minimized.
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.minimize()
    console.log(win1.isMinimized())     // true
}

app.whenReady().then(createWindow)
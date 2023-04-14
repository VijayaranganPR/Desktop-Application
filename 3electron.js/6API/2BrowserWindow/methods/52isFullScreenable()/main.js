/*
Returns boolean - Whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setFullScreenable(false)
    win.setFullScreen(true)
    console.log(win.isFullScreenable());         // false
}

app.whenReady().then(createWindow)

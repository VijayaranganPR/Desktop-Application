/*
flag boolean
Sets whether the window should be in fullscreen mode.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.setFullScreen(true)
    setTimeout(() => {
        win1.setFullScreen(false)
    }, 3000);
}

app.whenReady().then(createWindow)
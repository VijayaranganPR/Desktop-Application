/*
Returns boolean - Whether the window is in fullscreen mode.
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.setFullScreen(true)
    console.log(win1.isFullScreen())            // true
    setTimeout(() => {
        win1.setFullScreen(false)
    }, 3000);
}

app.whenReady().then(createWindow)
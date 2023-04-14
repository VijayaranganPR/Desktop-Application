/*
A boolean property that determines whether the window is in simple (pre-Lion) fullscreen mode.

*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    win.simpleFullScreen = true
}

app.whenReady().then(createWindow)


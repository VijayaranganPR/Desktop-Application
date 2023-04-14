/*
A boolean property that determines whether the window is in fullscreen mode.
*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.fullScreen);            // false
}

app.whenReady().then(createWindow)


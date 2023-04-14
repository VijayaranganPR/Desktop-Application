/*
A boolean property that determines whether the window is focusable.
*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.focusable);            // true
}

app.whenReady().then(createWindow)


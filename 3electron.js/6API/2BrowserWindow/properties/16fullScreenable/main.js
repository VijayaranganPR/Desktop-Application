/*
A boolean property that determines whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.

*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.fullScreenable);                     // true
}

app.whenReady().then(createWindow)


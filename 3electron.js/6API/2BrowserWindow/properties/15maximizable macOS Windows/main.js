/*
A boolean property that determines whether the window can be manually maximized by user.

On Linux the setter is a no-op, although the getter returns true.
*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.maximizable);                     // true
}

app.whenReady().then(createWindow)


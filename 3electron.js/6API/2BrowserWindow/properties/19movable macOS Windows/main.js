/*
A boolean property that determines Whether the window can be moved by user.

On Linux the setter is a no-op, although the getter returns true.
*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.movable);                     // true
}

app.whenReady().then(createWindow)


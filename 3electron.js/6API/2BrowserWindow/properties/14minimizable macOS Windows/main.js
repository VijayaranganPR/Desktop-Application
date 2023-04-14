/*
A boolean property that determines whether the window can be manually minimized by user.

On Linux the setter is a no-op, although the getter returns true.
*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.minimizable);                     // true
}

app.whenReady().then(createWindow)


/*
A boolean property that determines whether the window can be manually closed by user.

On Linux the setter is a no-op, although the getter returns true.
*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.closable);                     // true
}

app.whenReady().then(createWindow)


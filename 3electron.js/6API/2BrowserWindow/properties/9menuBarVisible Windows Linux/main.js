/*
A boolean property that determines whether the menu bar should be visible.

Note: If the menu bar is auto-hide, users can still bring up the menu bar by pressing the single Alt key.
*/

const {
    app,
    BrowserWindow
} = require('electron')


function createWindow() {
    const win = new BrowserWindow()

    console.log(win.menuBarVisible);            // true
}

app.whenReady().then(createWindow)


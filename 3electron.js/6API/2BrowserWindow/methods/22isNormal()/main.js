/*
Returns boolean - Whether the window is in normal state (not maximized, not minimized, not in fullscreen mode).


*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    console.log(win1.isNormal());         // true
}

app.whenReady().then(createWindow)
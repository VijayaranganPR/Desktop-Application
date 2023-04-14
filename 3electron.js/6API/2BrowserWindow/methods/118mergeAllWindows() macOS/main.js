/*
Merges all windows into one window with multiple tabs when native tabs are enabled and there is more than one open window.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('first.html')
    win.mergeAllWindows()
}

// create the window when app is ready
app.on('ready', createWindow)


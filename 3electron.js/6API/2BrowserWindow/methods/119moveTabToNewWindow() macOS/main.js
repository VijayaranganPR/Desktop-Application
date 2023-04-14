/*
Moves the current tab into a new window if native tabs are enabled and there is more than one tab in the current window.
*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('first.html')
    win.moveTabToNewWindow()
}

// create the window when app is ready
app.on('ready', createWindow)


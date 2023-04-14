/*
Selects the previous tab when native tabs are enabled and there are other tabs in the window.
*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('first.html')
    win.selectPreviousTab()
}

// create the window when app is ready
app.on('ready', createWindow)


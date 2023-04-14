/*
opacity number - between 0.0 (fully transparent) and 1.0 (fully opaque)
Sets the opacity of the window. On Linux, does nothing. Out of bound number values are clamped to the [0, 1] range.
*/


const {app,BrowserWindow} = require('electron')
const path = require('path')
let mainWindow

function createWindow() {
    const win = new BrowserWindow()
    win.setOpacity(0.5)
}

// create the window when app is ready
app.on('ready', createWindow)

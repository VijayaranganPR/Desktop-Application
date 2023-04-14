/*
opacity number - between 0.0 (fully transparent) and 1.0 (fully opaque)
Sets the opacity of the window. On Linux, does nothing. Out of bound number values are clamped to the [0, 1] range.
*/


const {app,BrowserWindow} = require('electron')
const path = require('path')
let mainWindow

function createWindow() {
    const win = new BrowserWindow()
    console.log(win.getOpacity());              // 1
    win.setOpacity(0.5)
    console.log(win.getOpacity());              // 0.5
}

// create the window when app is ready
app.on('ready', createWindow)

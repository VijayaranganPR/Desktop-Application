/*
rects Rectangle[] - Sets a shape on the window. Passing an empty list reverts the window to being rectangular.
Setting a window shape determines the area within the window where the system permits drawing and user interaction. Outside of the given region, no pixels will be drawn and no mouse events will be registered. Mouse events outside of the region will not be received by that window, but will fall through to whatever is behind the window.

*/


const {app,BrowserWindow} = require('electron')
const path = require('path')
let mainWindow

function createWindow() {
    const win = new BrowserWindow()
    // set the custom shape for the window
    win.setShape([
    { x: 0, y: 0, width: 100, height: 600 },
    { x: 100, y: 0, width: 600, height: 100 },
    { x: 100, y: 500, width: 600, height: 100 },
    { x: 700, y: 0, width: 100, height: 600 }
  ])
}

// create the window when app is ready
app.on('ready', createWindow)

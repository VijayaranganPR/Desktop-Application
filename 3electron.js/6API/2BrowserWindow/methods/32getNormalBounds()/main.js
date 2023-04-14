/*
Returns Rectangle - Contains the window bounds of the normal state

Note: whatever the current state of the window : maximized, minimized or in fullscreen, this function always returns the position and size of the window in normal state. 
In normal state, getBounds and getNormalBounds returns the same Rectangle.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    // Get the normal size and position of the window
    let bounds = win.getNormalBounds()
    console.log(bounds)                     // { x: 240, y: 60, width: 800, height: 600 }
}

app.whenReady().then(createWindow)

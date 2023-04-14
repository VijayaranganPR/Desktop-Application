/*
bounds Rectangle
animate boolean (optional) macOS
Resizes and moves the window's client area (e.g. the web page) to the supplied bounds.
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    // Set the size and position of the content area
    win.setContentBounds({ x: 100, y: 100, width: 800, height: 600 }, true)

}

app.whenReady().then(createWindow)
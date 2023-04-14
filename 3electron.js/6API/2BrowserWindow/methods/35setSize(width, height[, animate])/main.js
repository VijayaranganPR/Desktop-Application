/*
width Integer
height Integer
animate boolean (optional) macOS
Resizes the window to width and height. If width or height are below any set minimum size constraints the window will snap to its minimum size.
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    // Set the size of the window
    win.setSize(800, 600, true)

    console.log(win.getSize())          // [ 800, 600 ]
}

app.whenReady().then(createWindow)

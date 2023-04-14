/*
Returns Rectangle - The bounds of the window's client area as Object.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    // Set the size and position of the content area
    win.setContentBounds({ x: 100, y: 100, width: 800, height: 600 }, true)

    // Get the size and position of the content area
    let bounds = win.getContentBounds()
    console.log(bounds)                     // { x: 99, y: 100, width: 800, height: 600 }
}

app.whenReady().then(createWindow)

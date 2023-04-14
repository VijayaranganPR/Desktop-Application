/*
Returns Integer[] - Contains the window's width and height.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    // Set the size of the window
    win.setSize(800, 600, true)

    console.log(win.getSize())          // [ 800, 600 ]
}

app.whenReady().then(createWindow)

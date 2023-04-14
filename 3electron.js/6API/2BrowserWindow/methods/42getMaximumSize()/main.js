/*
Returns Integer[] - Contains the window's maximum width and height.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    // it will change once you start changing the size
    win.setMaximumSize(500, 600)


    console.log(win.getMaximumSize())          // [ 500, 601 ]
}

app.whenReady().then(createWindow)

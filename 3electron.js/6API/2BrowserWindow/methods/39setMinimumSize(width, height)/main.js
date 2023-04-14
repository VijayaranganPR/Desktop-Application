/*
width Integer
height Integer
Sets the minimum size of window to width and height.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    // it will change once you start changing the size
    win.setMinimumSize(1000, 1100)


    console.log(win.getMinimumSize())          // [ 1000, 1101 ]
}

app.whenReady().then(createWindow)

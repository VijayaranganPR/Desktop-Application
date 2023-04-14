/*
Returns Integer[] - Contains the window's client area's width and height.
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
  // Set the size of the content area
  win.setContentSize(1000, 1100, true)


    console.log(win.getContentSize())          // [ 1000, 1100 ]
}

app.whenReady().then(createWindow)

/*
Returns boolean - Whether the window can be manually resized by the user.
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setResizable(false)
    console.log(win.isResizable());         // false
}

app.whenReady().then(createWindow)

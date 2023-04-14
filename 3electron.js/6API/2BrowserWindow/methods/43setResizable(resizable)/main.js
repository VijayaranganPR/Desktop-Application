/*
resizable boolean
Sets whether the window can be manually resized by the user.
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setResizable(false)
}

app.whenReady().then(createWindow)

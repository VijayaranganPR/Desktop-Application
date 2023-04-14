/*
hasShadow boolean
Sets whether the window should have a shadow.

*/


const {app,BrowserWindow} = require('electron')
const path = require('path')
let mainWindow

function createWindow() {
    const win = new BrowserWindow()
    win.setHasShadow(true)
    setTimeout(() => {
        win.setHasShadow(false)
    }, 5000);

}

// create the window when app is ready
app.on('ready', createWindow)

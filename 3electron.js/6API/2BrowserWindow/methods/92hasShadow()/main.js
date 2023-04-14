/*
hasShadow boolean
Sets whether the window should have a shadow.

*/


const {app,BrowserWindow} = require('electron')
const path = require('path')
let mainWindow

function createWindow() {
    const win = new BrowserWindow()
    console.log(win.hasShadow());           // false
    win.setHasShadow(true)
    console.log(win.hasShadow());           // true
    setTimeout(() => {
        win.setHasShadow(false)
        console.log(win.hasShadow());       // false
    }, 5000);

}

// create the window when app is ready
app.on('ready', createWindow)

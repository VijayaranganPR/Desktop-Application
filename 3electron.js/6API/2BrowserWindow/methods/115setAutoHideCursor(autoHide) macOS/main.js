/*
autoHide boolean
Controls whether to hide cursor when typing.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('first.html')
    win.setAutoHideCursor(true)
    
    
}

// create the window when app is ready
app.on('ready', createWindow)


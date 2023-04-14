/*
ignore boolean
options Object (optional)
forward boolean (optional) macOS Windows - If true, forwards mouse move messages to Chromium, enabling mouse related events such as mouseleave. Only used when ignore is true. If ignore is false, forwarding is always disabled regardless of this value.
Makes the window ignore all mouse events.

All mouse events happened in this window will be passed to the window below this window, but if this window has focus, it will still receive keyboard events.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow()
    mainWindow.loadFile('index.html')
    mainWindow.setIgnoreMouseEvents(true)
    
}



// create the window when app is ready
app.on('ready', createWindow)
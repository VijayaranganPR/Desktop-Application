/*
Returns whether the window can be focused.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow()
    mainWindow.loadFile('index.html')
    mainWindow.setFocusable(true)
    console.log(mainWindow.isFocusable());          // true
    
}



// create the window when app is ready
app.on('ready', createWindow)
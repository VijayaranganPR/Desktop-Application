/*
hide boolean
Sets whether the window menu bar should hide itself automatically. Once set the menu bar will only show when users press the single Alt key.

If the menu bar is already visible, calling setAutoHideMenuBar(true) won't hide it immediately.


*/


const {app,BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
    const mainWindow = new BrowserWindow()
    mainWindow.loadFile('index.html')
    mainWindow.setAutoHideMenuBar(true)

    setTimeout(() => {
        mainWindow.setAutoHideMenuBar(false)
    }, 3000);
    
}



// create the window when app is ready
app.on('ready', createWindow)
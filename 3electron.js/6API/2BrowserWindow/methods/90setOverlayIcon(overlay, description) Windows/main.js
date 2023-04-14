/*
overlay NativeImage | null - the icon to display on the bottom right corner of the taskbar icon. If this parameter is null, the overlay is cleared
description string - a description that will be provided to Accessibility screen readers
Sets a 16 x 16 pixel overlay onto the current taskbar icon, usually used to convey some sort of application status or to passively notify the user.
*/


const {app,BrowserWindow} = require('electron')
const path = require('path')
let mainWindow

function createWindow() {
    const mainWindow = new BrowserWindow()
    mainWindow.loadFile('index.html')
        // set the overlay icon to a red dot
        mainWindow.setOverlayIcon(path.join(__dirname, 'full.jpg'), 'Error')

}

// create the window when app is ready
app.on('ready', createWindow)

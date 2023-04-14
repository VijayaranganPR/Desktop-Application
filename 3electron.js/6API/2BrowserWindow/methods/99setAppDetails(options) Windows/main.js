/*
options Object
appId string (optional) - Window's App User Model ID. It has to be set, otherwise the other options will have no effect.
appIconPath string (optional) - Window's Relaunch Icon.
appIconIndex Integer (optional) - Index of the icon in appIconPath. Ignored when appIconPath is not set. Default is 0.
relaunchCommand string (optional) - Window's Relaunch Command.
relaunchDisplayName string (optional) - Window's Relaunch Display Name.
Sets the properties for the window's taskbar button.

Note: relaunchCommand and relaunchDisplayName must always be set together. If one of those properties is not set, then neither will be used.

win.showDefinitionForSelection() macOS
Same as webContents.showDefinitionForSelection().
*/


const {app,BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
    const mainWindow = new BrowserWindow()
    // load the index.html file
    mainWindow.loadFile('index.html')
    // set the application details
    mainWindow.setAppDetails({
        appId: 'my-app-id',
        appUserModelId: 'my-app-user-model-id',
        relaunchCommand: process.argv.join(' ')
    })
}



// create the window when app is ready
app.on('ready', createWindow)
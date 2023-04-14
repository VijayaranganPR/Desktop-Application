/*
icon NativeImage | string
Changes window icon.

*/


const {app,BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
    const mainWindow = new BrowserWindow()
    mainWindow.loadFile('index.html')

    mainWindow.setIcon('full.jpg')
    
}



// create the window when app is ready
app.on('ready', createWindow)
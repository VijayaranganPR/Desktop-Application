/*
visible boolean
Sets whether the window traffic light buttons should be visible.

*/


const {app,BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
    const mainWindow = new BrowserWindow()
    mainWindow.loadFile('index.html')
    mainWindow.setWindowButtonVisibility(true)

    setTimeout(() => {
        mainWindow.setWindowButtonVisibility(false)
    }, 3000);
    
}



// create the window when app is ready
app.on('ready', createWindow)
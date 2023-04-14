/*
toolTip string
Sets the toolTip that is displayed when hovering over the window thumbnail in the taskbar.


*/


const {app,BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
    const mainWindow = new BrowserWindow()
    // load the index.html file
    mainWindow.loadFile('index.html')

  // set the thumbnail tooltip for the window
  mainWindow.setThumbnailToolTip('My App')


}



// create the window when app is ready
app.on('ready', createWindow)
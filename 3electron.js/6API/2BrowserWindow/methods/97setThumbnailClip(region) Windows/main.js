/*
region Rectangle - Region of the window
Sets the region of the window to show as the thumbnail image displayed when hovering over the window in the taskbar. 
You can reset the thumbnail to be the entire window by specifying an empty region: { x: 0, y: 0, width: 0, height: 0 }.

*/


const {app,BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
    const mainWindow = new BrowserWindow()
    // load the index.html file
    mainWindow.loadFile('index.html')

      // set the thumbnail clip region for the window
  mainWindow.setThumbnailClip({
    x: 0,
    y: 0,
    width: 200,
    height: 200
  })

}



// create the window when app is ready
app.on('ready', createWindow)
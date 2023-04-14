/*
minimumLevel number
maximumLevel number
Returns Promise<void>

Sets the maximum and minimum pinch-to-zoom level.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    win.webContents.on('did-finish-load', () => {
        win.webContents.setVisualZoomLevelLimits(1, 2)
    })

}

app.whenReady().then(createWindow)

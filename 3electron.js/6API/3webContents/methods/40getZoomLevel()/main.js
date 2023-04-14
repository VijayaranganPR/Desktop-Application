/*
In summary, "zoomFactor" is a more specific setting that applies to the contents of a specific web page, while "zoom level" is a more general setting that applies to all contents in the window.

Returns number - the current zoom level.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    win.webContents.on('did-finish-load', () => {
        win.webContents.setZoomLevel(2)
        console.log(win.webContents.getZoomLevel());           // 2
    })

}

app.whenReady().then(createWindow)

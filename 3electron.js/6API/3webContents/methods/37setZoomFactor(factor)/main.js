/*
factor Double - Zoom factor; default is 1.0.
Changes the zoom factor to the specified factor. Zoom factor is zoom percent divided by 100, so 300% = 3.0.

The factor must be greater than 0.0.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    win.webContents.on('did-finish-load', () => {
        win.webContents.setZoomFactor(2)
    })

}

app.whenReady().then(createWindow)
/*
// true
*/
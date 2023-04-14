/*
In summary, "zoomFactor" is a more specific setting that applies to the contents of a specific web page, while "zoom level" is a more general setting that applies to all contents in the window.

A number property that determines the zoom factor for this web contents.

The zoom factor is the zoom percent divided by 100, so 300% = 3.0.

*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        win.webContents.setZoomFactor(2)
        console.log(win.webContents.zoomFactor)         // 2
    })
}

app.whenReady().then(createWindow)

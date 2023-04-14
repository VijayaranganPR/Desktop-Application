/*
In summary, "zoomFactor" is a more specific setting that applies to the contents of a specific web page, while "zoom level" is a more general setting that applies to all contents in the window.

A number property that determines the zoom level for this web contents.

The original size is 0 and each increment above or below represents zooming 20% larger or smaller to default limits of 300% and 50% of original size, respectively. The formula for this is scale := 1.2 ^ level.

*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        win.webContents.setZoomLevel(2)
        console.log(win.webContents.zoomLevel)         // 2
    })
}

app.whenReady().then(createWindow)

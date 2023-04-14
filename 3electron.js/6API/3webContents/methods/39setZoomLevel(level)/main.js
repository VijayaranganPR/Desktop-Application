/*
level number - Zoom level.
Changes the zoom level to the specified level. The original size is 0 and each increment above or below represents zooming 20% larger or smaller to default limits of 300% and 50% of original size, respectively. The formula for this is scale := 1.2 ^ level.

NOTE: The zoom policy at the Chromium level is same-origin, meaning that the zoom level for a specific domain propagates across all instances of windows with the same domain. Differentiating the window URLs will make zoom work per-window.

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

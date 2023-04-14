/*
Returns boolean - Whether the renderer process has crashed.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    win.webContents.on('crashed', (event, killed) => {
        console.log(`WebContents has crashed (killed=${killed}): ${win.webContents.isCrashed()}`)       // WebContents has crashed (killed=false): true
    })

    // Wait for the window to finish loading
    win.webContents.on('did-finish-load', () => {
        // Call forcefullyCrashRenderer method to intentionally crash the renderer process
        win.webContents.forcefullyCrashRenderer()
    })
}
app.whenReady().then(createWindow)
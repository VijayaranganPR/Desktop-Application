/*
Returns boolean - Whether this page is being captured. It returns true when the capturer count is large then 0.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('index.html')

    // Wait for the window to finish loading
    win.webContents.on('did-finish-load', async () => {
        // Capture a screenshot of the entire window
        win.webContents.capturePage().then(image => {
            win.webContents.send('fromMain', image)
            console.log(win.webContents.isBeingCaptured());     // false
        })
        console.log(win.webContents.isBeingCaptured());         // true

    })
}

app.whenReady().then(createWindow)

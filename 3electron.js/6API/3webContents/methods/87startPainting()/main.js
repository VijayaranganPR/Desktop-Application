/*
still pending

If offscreen rendering is enabled and not painting, start painting.
*/


const {
    app,
    BrowserWindow
} = require('electron')
const fs = require('fs')
const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            offscreen: true
        }
    })
    win.loadFile('index.html')

    win.webContents.on('did-finish-load', () => {
        win.webContents.startPainting();

        // Perform some updates to the page content here
        win.webContents.insertCSS('body { background-color: #f0f0f0; }');

        win.webContents.stopPainting();

        // Capture a screenshot of the entire window
        win.webContents.capturePage().then(image => {
            console.log(`screenshot captured`);
            win.webContents.send('fromMain', image)
        })

    })
}
app.whenReady().then(createWindow)

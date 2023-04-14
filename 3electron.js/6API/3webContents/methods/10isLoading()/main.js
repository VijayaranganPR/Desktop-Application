/*
Returns boolean - Whether web page is still loading resources.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    // Check if the contents of the window are still loading
    if (win.webContents.isLoading()) {
        console.log('Window contents are still loading')
    } else {
        console.log('Window contents have finished loading')
    }
}

app.whenReady().then(createWindow)
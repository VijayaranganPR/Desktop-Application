/*
userAgent string
Overrides the user agent for this web page.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')

    // Wait for the window to finish loading
    win.webContents.on('did-finish-load', () => {
        win.webContents.setUserAgent('My Custom User Agent')
    })
}
app.whenReady().then(createWindow)

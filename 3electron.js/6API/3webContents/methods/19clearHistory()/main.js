/*
Clears the navigation history.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    win.webContents.clearHistory()
}
app.whenReady().then(createWindow)

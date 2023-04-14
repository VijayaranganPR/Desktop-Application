/*
Returns boolean - Whether the browser can go back to previous web page.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    console.log(win.webContents.canGoBack());       // false
}
app.whenReady().then(createWindow)

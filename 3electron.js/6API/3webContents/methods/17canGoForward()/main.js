/*
Returns boolean - Whether the browser can go forward to next web page.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    console.log(win.webContents.canGoForward());       // false
}
app.whenReady().then(createWindow)

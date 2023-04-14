/*
Reloads current page and ignores cache.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    setTimeout(() => {
        win.webContents.reloadIgnoringCache()     
    }, 3000); 
}
app.whenReady().then(createWindow)

/*
Reloads the current web page.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    setTimeout(() => {
        win.webContents.reload()     
    }, 3000); 
}
app.whenReady().then(createWindow)

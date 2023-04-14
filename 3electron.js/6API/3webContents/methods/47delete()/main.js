/*
Executes the editing command delete in web page.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    setTimeout(() => {
        win.webContents.delete()
    }, 5000);
}

app.whenReady().then(createWindow)

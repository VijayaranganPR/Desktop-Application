/*
Executes the editing command unselect in web page.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    setTimeout(() => {
        win.webContents.selectAll()
    }, 5000);
    setTimeout(() => {
        win.webContents.unselect()
    }, 8000);
}

app.whenReady().then(createWindow)

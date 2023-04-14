/*
Executes the editing command paste in web page.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    setTimeout(() => {
        win.webContents.selectAll()
        win.webContents.copy()
        win.webContents.unselect()
        win.webContents.paste()
    }, 5000);
}

app.whenReady().then(createWindow)

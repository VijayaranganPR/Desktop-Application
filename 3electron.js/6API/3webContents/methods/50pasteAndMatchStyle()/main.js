/*
Executes the editing command pasteAndMatchStyle in web page.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    setTimeout(() => {
        win.webContents.selectAll()
        win.webContents.copy()
        win.webContents.unselect()
        win.webContents.pasteAndMatchStyle()
    }, 5000);
}

app.whenReady().then(createWindow)

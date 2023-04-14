/*
Executes the editing command copy in web page.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    setTimeout(() => {
        win.webContents.copy()
    }, 5000);
}

app.whenReady().then(createWindow)

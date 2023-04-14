/*
Same as webContents.reload.
*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    setTimeout(() => {
        win.reload()
    }, 3000);
}

app.whenReady().then(createWindow)

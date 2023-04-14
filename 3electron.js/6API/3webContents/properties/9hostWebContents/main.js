/*
A WebContents instance that might own this WebContents.

*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        console.log(win.webContents.hostWebContents)         // null
    })
}

app.whenReady().then(createWindow)

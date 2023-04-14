/*
Returns boolean - Whether the web page is destroyed.

*/


const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.webContents.loadURL('https://www.google.com/')
    .then(() => console.log(win.webContents.isDestroyed()))     // false
}

app.whenReady().then(createWindow)

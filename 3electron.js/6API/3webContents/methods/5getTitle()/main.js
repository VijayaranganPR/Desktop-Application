/*
Returns string - The title of the current web page.

*/


const { app, webContents, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.webContents.loadURL('https://www.google.com/').then(() => {
        console.log(win.webContents.getTitle());                      // Google
    })
}

app.whenReady().then(createWindow)
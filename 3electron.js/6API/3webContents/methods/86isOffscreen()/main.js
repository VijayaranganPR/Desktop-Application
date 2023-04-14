/*
Returns boolean - Indicates whether offscreen rendering is enabled.
*/


const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            offscreen: true
        }
    })
    win.loadURL('https://www.google.com/')
    
    win.webContents.on('did-finish-load', () => {
        console.log(win.webContents.isOffscreen());         // true
    })
}

app.whenReady().then(createWindow)

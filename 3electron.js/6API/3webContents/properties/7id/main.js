/*
A Integer representing the unique ID of this WebContents. Each ID is unique among all WebContents instances of the entire Electron application.

*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        console.log(win.webContents.id)         // 1
    })
}

app.whenReady().then(createWindow)

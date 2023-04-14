/*
An Integer property that sets the frame rate of the web contents to the specified number. Only values between 1 and 240 are accepted.

Only applicable if offscreen rendering is enabled.

*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            offscreen: true
        }
    })

    win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        console.log(win.webContents.frameRate)         // 60
    })
}

app.whenReady().then(createWindow)

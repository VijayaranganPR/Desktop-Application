/*
ignore boolean
Ignore application menu shortcuts while this web contents is focused.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    win.webContents.setIgnoreMenuShortcuts(true)
}

app.whenReady().then(createWindow)

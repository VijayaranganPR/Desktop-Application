/*
Returns boolean - Whether the web page is focused.

*/

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win1 = new BrowserWindow()
    const win2 = new BrowserWindow()
    win1.webContents.loadURL('https://www.google.com/')
    win2.webContents.loadURL('https://developer.mozilla.org/en-US/')

    win1.webContents.focus()
    console.log(win1.isFocused());          // true
}

app.whenReady().then(createWindow)

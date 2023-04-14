/*
A WebContents | null property that represents the of DevTools WebContents associated with a given WebContents.

Note: Users should never store this object because it may become null when the DevTools has been closed.

*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        console.log(win.webContents.devToolsWebContents)         // null
    })
}

app.whenReady().then(createWindow)

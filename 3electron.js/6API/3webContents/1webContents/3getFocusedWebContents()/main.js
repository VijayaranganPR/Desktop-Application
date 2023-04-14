/*
Returns WebContents | null - The web contents that is focused in this application, otherwise returns null.

*/

const {app, BrowserWindow, webContents} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    console.log(webContents.getFocusedWebContents())            // null

    win.focus()
    console.log(webContents.getFocusedWebContents())            // null
}


app.on('ready', () => {
    createWindow()
})

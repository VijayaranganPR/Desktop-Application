/*
Returns boolean - Whether the web page is waiting for a first-response from the main resource of the page.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    console.log(win.webContents.isWaitingForResponse());      // false
}
app.whenReady().then(createWindow)

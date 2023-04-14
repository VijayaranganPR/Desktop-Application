/*
index Integer
Navigates browser to the specified absolute web page index.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    setTimeout(() => {
        win.webContents.goBack()
    }, 5000);
    setTimeout(() => {
        win.webContents.goToIndex(1)            // works like goForward in this case
    }, 10000);
}
app.whenReady().then(createWindow)


/*
Makes the browser go forward a web page.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    setTimeout(() => {
        win.webContents.goBack()
    }, 5000);
    setTimeout(() => {
        win.webContents.goForward()
    }, 10000);
}
app.whenReady().then(createWindow)


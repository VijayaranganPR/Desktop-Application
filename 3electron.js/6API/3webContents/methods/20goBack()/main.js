/*
Makes the browser go back a web page.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    setTimeout(() => {
        win.webContents.goBack()
    }, 10000);
}
app.whenReady().then(createWindow)

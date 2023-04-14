/*
Returns boolean - Whether the devtools is opened.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    setTimeout(() => {
        win.webContents.openDevTools()
        setTimeout(() => {
            console.log(win.webContents.isDevToolsOpened());        // true
        }, 1000);
    }, 3000);

    setTimeout(() => {
        win.webContents.closeDevTools()
        setTimeout(() => {
            console.log(win.webContents.isDevToolsOpened());        // false
        }, 1000);
    }, 6000);
}

app.whenReady().then(createWindow)

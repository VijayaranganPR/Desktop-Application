/*
Closes the devtools.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    setTimeout(() => {
        win.webContents.openDevTools()
    }, 3000);

    setTimeout(() => {
        win.webContents.closeDevTools()
    }, 6000);
}

app.whenReady().then(createWindow)

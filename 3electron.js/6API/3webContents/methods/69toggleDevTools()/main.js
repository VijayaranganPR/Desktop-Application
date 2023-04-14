/*
Toggles the developer tools.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    setTimeout(() => {
        win.webContents.openDevTools()
        setTimeout(() => {
            win.webContents.toggleDevTools()
        }, 2000);
    }, 3000);

}

app.whenReady().then(createWindow)

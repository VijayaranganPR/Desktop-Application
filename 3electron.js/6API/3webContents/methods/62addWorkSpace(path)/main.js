/*
path string
Adds the specified path to DevTools workspace. Must be used after DevTools creation:
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('http://github.com')
    win.webContents.on('devtools-opened', () => {
      win.webContents.addWorkSpace('E:\\desktop\\Desktop Application\\0summa')          // will be added to the sources in dev tools
    })
}

app.whenReady().then(createWindow)

/*
path string
Removes the specified path from DevTools workspace.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('http://github.com')
    win.webContents.on('devtools-opened', () => {
      win.webContents.addWorkSpace('E:\\desktop\\Desktop Application\\0summa')          // will be added to the sources in dev tools

      setTimeout(() => {
        win.webContents.removeWorkSpace('E:\\desktop\\Desktop Application\\0summa')
      }, 5000);
    })

}

app.whenReady().then(createWindow)

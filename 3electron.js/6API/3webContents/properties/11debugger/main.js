/*
A Debugger instance for this webContents.

*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        console.log(win.webContents.debugger)         
    })
}

app.whenReady().then(createWindow)

/*
Debugger {
  attach: [Function: attach],
  isAttached: [Function: isAttached],
  detach: [Function: detach],
  sendCommand: [Function: sendCommand]
}
*/
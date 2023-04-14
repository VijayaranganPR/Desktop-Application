/*
Returns string - the type of the webContent. Can be backgroundPage, window, browserView, remote, webview or offscreen.
*/


const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')


app.on('ready', () => {
  const win = new BrowserWindow()

  win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        console.log(win.webContents.getType());         // window
    })

});

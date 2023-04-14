/*
allowed boolean
Controls whether or not this WebContents will throttle animations and timers when the page becomes backgrounded. This also affects the Page Visibility API.

*/


const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')


app.on('ready', () => {
  const win = new BrowserWindow()

  win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        win.webContents.setBackgroundThrottling(true)
        console.log(win.webContents.getBackgroundThrottling());
    })

});

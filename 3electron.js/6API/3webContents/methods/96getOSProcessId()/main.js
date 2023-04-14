/*
Returns Integer - The operating system pid of the associated renderer process.

*/


const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const win = new BrowserWindow();

  win.loadURL('https://www.google.com');

  win.webContents.on('did-finish-load', () => {
    console.log(win.webContents.getOSProcessId());              // 15332             
  });
});

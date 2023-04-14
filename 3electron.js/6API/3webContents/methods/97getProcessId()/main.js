/*
Returns Integer - The Chromium internal pid of the associated renderer. 
Can be compared to the frameProcessId passed by frame specific navigation events (e.g. did-frame-navigate)
*/


const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const win = new BrowserWindow();

  win.loadURL('https://www.google.com');

  win.webContents.on('did-finish-load', () => {
    console.log(win.webContents.getProcessId());              // 5         
  });
});

/*
The contents.invalidate() method in Electron.js marks the whole webContents instance as needing to be repainted. This method is only applicable when the webContents is being rendered offscreen.

When the invalidate() method is called, it marks the whole webContents instance as needing to be repainted. This is useful in situations where the content of the webContents has changed but has not been automatically repainted.

*/


const { app, BrowserWindow } = require('electron');

let window;

app.on('ready', () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      offscreen: true
    }
  });

  window.loadURL('https://www.google.com');

  window.webContents.on('did-finish-load', () => {
    console.log(`Is painting: ${window.webContents.isPainting()}`);             // Is painting: true

    window.webContents.startPainting();

    console.log(`Is painting: ${window.webContents.isPainting()}`);             // Is painting: true

    window.webContents.invalidate();
  });
});


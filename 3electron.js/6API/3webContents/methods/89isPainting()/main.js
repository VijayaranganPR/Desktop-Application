/*
still pending

Returns boolean - If offscreen rendering is enabled returns whether it is currently painting.

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
    console.log(`Is painting: ${window.webContents.isPainting()}`);         // Is painting: true

    window.webContents.startPainting();

    console.log(`Is painting: ${window.webContents.isPainting()}`);         // Is painting: true

    window.webContents.stopPainting();

    console.log(`Is painting: ${window.webContents.isPainting()}`);         // Is painting: false
  });
});


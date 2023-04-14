/*
Returns Integer - If offscreen rendering is enabled returns the current frame rate.
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
    console.log(`Current frame rate: ${window.webContents.getFrameRate()}`);            // Current frame rate: 60

    window.webContents.setFrameRate(30);

    console.log(`New frame rate: ${window.webContents.getFrameRate()}`);                // New frame rate: 30
  });
});


/*
still pending

requestWebContents WebContents - Web contents that the id will be registered to.

Returns string - The identifier of a WebContents stream. This identifier can be used with navigator.mediaDevices.getUserMedia using a chromeMediaSource of tab. 
The identifier is restricted to the web contents that it is registered to and is only valid for 10 seconds.
*/


const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const win = new BrowserWindow();

  win.loadURL('https://www.google.com');

  win.webContents.on('did-finish-load', () => {
    console.log(win.webContents.getMediaSourceId('requestWebContents'));               
  });
});

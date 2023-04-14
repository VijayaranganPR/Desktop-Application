/*
Returns string - Returns the WebRTC IP Handling Policy.

*/


const { app, BrowserWindow } = require('electron');

let win;

app.on('ready', () => {
  win = new BrowserWindow();

  win.loadURL('https://www.google.com');

  win.webContents.on('did-finish-load', () => {
    win.webContents.setWebRTCIPHandlingPolicy('disable_non_proxied_udp');
    console.log(win.webContents.getWebRTCIPHandlingPolicy());               // disable_non_proxied_udp

  });
});


/*
End subscribing for frame presentation events.

*/
const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('start-recording', (event, filePath) => {
  const videoFile = fs.createWriteStream(filePath);

  mainWindow.webContents.beginFrameSubscription(true, (image) => {
    videoFile.write(image.toJPEG(80));
  });
});

ipcMain.on('stop-recording', (event) => {
  mainWindow.webContents.endFrameSubscription();
});

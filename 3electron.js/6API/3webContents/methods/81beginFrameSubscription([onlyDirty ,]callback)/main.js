/*
onlyDirty boolean (optional) - Defaults to false.
callback Function
image NativeImage
dirtyRect Rectangle
Begin subscribing for presentation events and captured frames, the callback will be called with callback(image, dirtyRect) when there is a presentation event.

The image is an instance of NativeImage that stores the captured frame.

The dirtyRect is an object with x, y, width, height properties that describes which part of the page was repainted. 
If onlyDirty is set to true, image will only contain the repainted area. onlyDirty defaults to false.
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

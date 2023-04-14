/*
The contents.startDrag(item) method in Electron is used to start a drag-and-drop operation from a web page. 
This method is typically called in response to a user-initiated event such as a mouse click or touch event.

The item parameter specifies the data to be dragged. 
This can be a DataTransfer object or a plain JavaScript object that contains the data to be dragged. 
The data can be in any format supported by the HTML 5 drag-and-drop API, such as text, images, URLs, or custom data types.


item Object
file string - The path to the file being dragged.
files string[] (optional) - The paths to the files being dragged. (files will override file field)
icon NativeImage | string - The image must be non-empty on macOS.
Sets the item as dragging item for current drag-drop operation, file is the absolute path of the file to be dragged, and icon is the image showing under the cursor when dragging.

*/
const { app, BrowserWindow } = require('electron');
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

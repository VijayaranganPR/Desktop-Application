/*
filePath string - Path to the output file.
Returns Promise<void> - Indicates whether the snapshot has been created successfully.

Takes a V8 heap snapshot and saves it to filePath.

*/


const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')


app.on('ready', () => {
  const win = new BrowserWindow()

  win.loadFile('index.html')
    win.webContents.on('did-finish-load', () => {
        const filepath = path.join(__dirname, 'image.jpg')
        win.webContents.takeHeapSnapshot(filepath)
            .then(console.log('V8 HeapSnapshot taken Successfully'))
            .catch(err => {
                console.log(err);
            });
    })

});

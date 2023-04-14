/*
fullPath string - The absolute file path.
saveType string - Specify the save type.
    HTMLOnly - Save only the HTML of the page.
    HTMLComplete - Save complete-html page.
    MHTML - Save complete-html page as MHTML.
Returns Promise<void> - resolves if the page is saved.
*/
const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {


  const { BrowserWindow } = require('electron')
  const win = new BrowserWindow()
  
  win.loadURL('https://github.com')
  
  win.webContents.on('did-finish-load', async () => {
    win.webContents.savePage(path.join(__dirname, 'test.html'), 'HTMLComplete').then(() => {
      console.log('Page was saved successfully.')
    }).catch(err => {
      console.log(err)
    })
  })
}

app.on('ready', createWindow);

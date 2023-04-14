/*
Returns string - The URL of the current web page.
should need to wait to load the url so use .then then() 
*/


const { app, webContents, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.webContents.loadURL('https://www.google.com/').then(() => {
        console.log(win.webContents.getURL());                      // https://www.google.com/
    })
    
}

app.whenReady().then(createWindow)
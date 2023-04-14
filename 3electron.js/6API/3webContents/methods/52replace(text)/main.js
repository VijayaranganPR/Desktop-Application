/*
text string
Executes the editing command replace in web page
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    setTimeout(() => {
        win.webContents.selectAll()
    }, 5000);
    setTimeout(() => {
        win.webContents.replace('whatever you written this will replace the text')
    }, 8000);
}

app.whenReady().then(createWindow)

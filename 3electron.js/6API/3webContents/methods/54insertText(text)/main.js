/*
text string
Returns Promise<void>

Inserts text to the focused element.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    
    setTimeout(() => {
        win.webContents.insertText('inserted_test')
    }, 3000);
}

app.whenReady().then(createWindow)

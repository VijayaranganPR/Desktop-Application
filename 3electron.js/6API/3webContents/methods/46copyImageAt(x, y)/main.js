/*
Executes the editing command copy in web page.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    
    setTimeout(() => {
        win.webContents.copyImageAt(100,100)
    }, 5000);
}

app.whenReady().then(createWindow)

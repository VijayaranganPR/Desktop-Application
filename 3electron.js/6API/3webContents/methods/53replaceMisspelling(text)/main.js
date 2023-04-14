/*
not working need to understand

text string
Executes the editing command replaceMisspelling in web page.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    
    setTimeout(() => {
        win.webContents.replaceMisspelling('the_text_in_here_is_misspelled')
    }, 10000);
}

app.whenReady().then(createWindow)

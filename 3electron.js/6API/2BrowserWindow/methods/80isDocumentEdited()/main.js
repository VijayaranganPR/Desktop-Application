/*
Returns boolean - Whether the window's document has been edited.
*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    win.setDocumentEdited(true)
    console.log(win.isDocumentEdited());
}

app.whenReady().then(createWindow)

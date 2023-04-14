/*
edited boolean
Specifies whether the window’s document has been edited, and the icon in title bar will become gray when set to true.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    win.setDocumentEdited(true)
    console.log(win.isDocumentEdited());
}

app.whenReady().then(createWindow)

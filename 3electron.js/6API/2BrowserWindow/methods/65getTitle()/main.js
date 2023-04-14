/*
Returns string - The title of the native window.

Note: The title of the web page can be different from the title of the native window.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.setTitle('new Title')
    console.log(win1.getTitle());            // new Title
}

app.whenReady().then(createWindow)

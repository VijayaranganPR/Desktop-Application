/*
Try to close the window. This has the same effect as a user manually clicking the close button of the window. 
The web page may cancel the close though. See the close event.
*/

const {app,BrowserWindow, Menu} = require('electron')

function createWindow() {
    const win = new BrowserWindow()


    // after 3 sec the window will be closed
    setTimeout(() => {
        win.close()
    }, 3000);
}

app.whenReady().then(createWindow)
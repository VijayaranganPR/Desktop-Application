/*
Force closing the window, the unload and beforeunload event won't be emitted for the web page, and 
close event will also not be emitted for this window, but it guarantees the closed event will be emitted.
*/

const {app,BrowserWindow, Menu} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    // after 3 sec window will be distroied
    setTimeout(() => {
        win.destroy()
    }, 3000);

}

app.whenReady().then(createWindow)
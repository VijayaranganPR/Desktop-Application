/*
Returns boolean - Whether the main frame (and not just iframes or frames within it) is still loading.

The main frame is the top-level frame of a web page that contains all other frames. 
When a web page is loaded, the main frame is the first frame to start loading and the last frame to finish loading.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    console.log(win.webContents.isLoadingMainFrame());      // false
}
app.whenReady().then(createWindow)

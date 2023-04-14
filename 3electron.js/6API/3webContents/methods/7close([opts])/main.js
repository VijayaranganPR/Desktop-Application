/*
opts Object (optional)
waitForBeforeUnload boolean - if true, fire the beforeunload event before closing the page. If the page prevents the unload, the WebContents will not be closed. The will-prevent-unload will be fired if the page requests prevention of unload.
Closes the page, as if the web content had called window.close().

If the page is successfully closed (i.e. the unload is not prevented by the page, or waitForBeforeUnload is false or unspecified), the WebContents will be destroyed and no longer usable. The destroyed event will be emitted.
*/


const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.webContents.loadURL('https://www.google.com/')
    
    setTimeout(() => {
        win.webContents.close()
    }, 3000);
}

app.whenReady().then(createWindow)

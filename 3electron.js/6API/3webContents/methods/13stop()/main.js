/*
Stops any pending navigation.
if you are accessing a new url and change mind not to navigate there means you will click the cancel button 
that cancel button is the .stop()
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.webContents.stop()      
}
app.whenReady().then(createWindow)

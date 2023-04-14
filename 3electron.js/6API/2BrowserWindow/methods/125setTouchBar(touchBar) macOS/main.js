/*
touchBar TouchBar | null
Sets the touchBar layout for the current window. Specifying null or undefined clears the touch bar. This method only has an effect if the machine has a touch bar and is running on macOS 10.12.1+.

Note: The TouchBar API is currently experimental and may change or be removed in future Electron releases.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('first.html')
    win.setTouchBar('give touchbar')
}

// create the window when app is ready
app.on('ready', createWindow)


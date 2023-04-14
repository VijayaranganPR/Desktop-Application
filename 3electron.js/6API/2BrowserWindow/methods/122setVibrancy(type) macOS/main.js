/*
type string | null - Can be appearance-based, light, dark, titlebar, selection, menu, popover, sidebar, medium-light, ultra-dark, header, sheet, window, hud, fullscreen-ui, tooltip, content, under-window, or under-page. See the macOS documentation for more details.
Adds a vibrancy effect to the browser window. Passing null or an empty string will remove the vibrancy effect on the window.

Note that appearance-based, light, dark, medium-light, and ultra-dark have been deprecated and will be removed in an upcoming version of macOS.
*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('first.html')
    win.setVibrancy('dark')
}

// create the window when app is ready
app.on('ready', createWindow)


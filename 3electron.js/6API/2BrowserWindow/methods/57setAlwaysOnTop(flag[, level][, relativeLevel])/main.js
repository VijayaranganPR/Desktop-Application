/*
flag boolean
level string (optional) macOS Windows - Values include normal, floating, torn-off-menu, modal-panel, main-menu, status, pop-up-menu, screen-saver, and dock (Deprecated). The default is floating when flag is true. The level is reset to normal when the flag is false. Note that from floating to status included, the window is placed below the Dock on macOS and below the taskbar on Windows. From pop-up-menu to a higher it is shown above the Dock on macOS and above the taskbar on Windows. See the macOS docs for more details.
relativeLevel Integer (optional) macOS - The number of layers higher to set this window relative to the given level. The default is 0. Note that Apple discourages setting levels higher than 1 above screen-saver.
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setAlwaysOnTop(true, 'floating')
    console.log(win.isAlwaysOnTop());         // true
}

app.whenReady().then(createWindow)

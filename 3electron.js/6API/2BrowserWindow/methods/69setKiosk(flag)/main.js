/*
In Electron, a kiosk application is a full-screen application that is designed to run continuously, 
typically on a public display or kiosk system. A kiosk application usually runs with a simplified user interface, 
and provides limited user interaction options.

Electron provides a kiosk mode for creating such applications. 
When a window is created in kiosk mode, it runs in full-screen mode and does not show any window decorations, 
such as title bars, borders, or menus. The window also takes up the entire screen and cannot be resized or moved.
*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.setKiosk(true)
}

app.whenReady().then(createWindow)

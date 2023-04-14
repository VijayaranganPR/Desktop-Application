/*
bounds Partial<Rectangle>
animate boolean (optional) macOS
Resizes and moves the window to the supplied bounds. Any properties that are not supplied will default to their current values.

*/

const {
    app,
    BrowserWindow
} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    // set all bounds properties
    win.setBounds({ x: 440, y: 225, width: 800, height: 600 })

    // set a single bounds property
    win.setBounds({ width: 100 })

    // { x: 440, y: 225, width: 100, height: 600 }
    console.log(win.getBounds())
}

app.whenReady().then(createWindow)
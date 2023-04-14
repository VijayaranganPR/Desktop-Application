/*
Returns string - Gets the background color of the window in Hex (#RRGGBB) format.

See Setting backgroundColor.

Note: The alpha value is not returned alongside the red, green, and blue values.

*/

const {
    app,
    BrowserWindow
} = require('electron')

function createWindow() {
    const win = new BrowserWindow()

    win.setBackgroundColor('red')

    console.log(win.getBackgroundColor())               // #FF0000
}

app.whenReady().then(createWindow)
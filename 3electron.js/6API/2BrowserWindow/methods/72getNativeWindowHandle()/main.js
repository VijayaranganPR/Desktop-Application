/*
Returns Buffer - The platform-specific handle of the window.

The native type of the handle is HWND on Windows, NSView* on macOS, and Window (unsigned long) on Linux.

*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    const nativeWindowHandle = win1.getNativeWindowHandle()
    console.log(nativeWindowHandle)                     // <Buffer 64 09 15 00 00 00 00 00>
    console.log(nativeWindowHandle.toString('hex'));    // fe07150000000000
}

app.whenReady().then(createWindow)

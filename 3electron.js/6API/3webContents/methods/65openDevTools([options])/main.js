/*
options Object (optional)
mode string - Opens the devtools with specified dock state, can be left, right, bottom, undocked, detach. Defaults to last used dock state. In undocked mode it's possible to dock back. In detach mode it's not.
activate boolean (optional) - Whether to bring the opened devtools window to the foreground. The default is true.
Opens the devtools.

When contents is a <webview> tag, the mode would be detach by default, explicitly passing an empty mode can force using last used dock state.

On Windows, if Windows Control Overlay is enabled, Devtools will be opened with mode: 'detach'.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    setTimeout(() => {
        win.webContents.openDevTools()
    }, 3000);
}

app.whenReady().then(createWindow)

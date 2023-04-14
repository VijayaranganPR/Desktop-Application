/*
filePath string
options Object (optional)
query Record<string, string> (optional) - Passed to url.format().
search string (optional) - Passed to url.format().
hash string (optional) - Passed to url.format().
Returns Promise<void> - the promise will resolve when the page has finished loading (see did-finish-load), and rejects if the page fails to load (see did-fail-load).

Same as webContents.loadFile, filePath should be a path to an HTML file relative to the root of your application. See the webContents docs for more information.


*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow()
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

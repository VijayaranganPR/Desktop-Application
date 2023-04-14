/*
filePath string
options Object (optional)
query Record<string, string> (optional) - Passed to url.format().
search string (optional) - Passed to url.format().
hash string (optional) - Passed to url.format().
Returns Promise<void> - the promise will resolve when the page has finished loading (see did-finish-load), and rejects if the page fails to load (see did-fail-load).

Loads the given file in the window, filePath should be a path to an HTML file relative to the root of your application. 
*/


const { app, webContents, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.webContents.loadFile('index.html')
}

app.whenReady().then(createWindow)
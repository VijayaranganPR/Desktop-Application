/*
css string
options Object (optional)
cssOrigin string (optional) - Can be either 'user' or 'author'. Sets the cascade origin of the inserted stylesheet. Default is 'author'.
Returns Promise<string> - A promise that resolves with a key for the inserted CSS that can later be used to remove the CSS via contents.removeInsertedCSS(key).

Injects CSS into the current web page and returns a unique key for the inserted stylesheet.
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile('index.html')

    win.webContents.on('did-finish-load', async () => {
        const key = await win.webContents.insertCSS('html, body { background-color: #f00; }')
        setTimeout(() => {
            win.webContents.removeInsertedCSS(key)
        }, 3000);
    })
}

app.whenReady().then(createWindow)

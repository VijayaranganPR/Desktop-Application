/*
Returns boolean - Whether the devtools view is focused .
*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    setTimeout(() => {
        win.webContents.openDevTools()
        setTimeout(() => {
            console.log(win.webContents.isDevToolsFocused());        // true
        }, 1000);
    }, 3000);

}

app.whenReady().then(createWindow)

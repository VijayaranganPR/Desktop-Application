/*
x Integer
y Integer
Starts inspecting element at position (x, y).

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile('index.html')
    setTimeout(() => {
        win.webContents.inspectElement(100, 36)
    }, 2000);
}

app.whenReady().then(createWindow)

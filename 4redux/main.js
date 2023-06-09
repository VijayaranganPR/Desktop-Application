const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

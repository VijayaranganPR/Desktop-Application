const {app, BrowserWindow, ipcMain} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    ipcMain.on('channelName', (event, message) => {
        console.log(message)
        win.webContents.send('channelName', message)
    })

    win.loadFile('index.html')
}

app.on('ready', () => {
    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows.length === 0)
        createWindow()
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')
    app.quit()
})

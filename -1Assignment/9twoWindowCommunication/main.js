const {app, BrowserWindow, ipcMain} = require('electron')

const createWindow = () => {
    const win1 = new BrowserWindow({
        width: 800, 
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    
    const win2 = new BrowserWindow({
        width: 800, 
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    ipcMain.on('fromSecond', (event, message) => {
        win1.webContents.send('fromSecond', message)
    })

    ipcMain.on('fromFirst', (event, message) => {
        win2.webContents.send('fromFirst', message)
    })
    
    win1.loadFile('first.html')

    win2.loadFile('second.html')
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

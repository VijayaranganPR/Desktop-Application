const {app, BrowserWindow, dialog} = require('electron')

// after crashing showing a dialog box and quiting the app
app.on('render-process-gone', () => {
    console.log('renderer-process-crashed by me')
    dialog.showErrorBox("Renderer process crashed", "its better to close the app")
    app.quit()
})


const createWindow = async () => {

    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile('index.html')
}
app.whenReady().then(async () => {
    createWindow()
})

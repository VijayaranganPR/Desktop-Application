/*
In Electron, BrowserWindow.fromWebContents(webContents) is a static method that returns the BrowserWindow instance associated with the given webContents object.

The webContents parameter can be an instance of the WebContents class, which represents the renderer process of a BrowserWindow. 
This method is useful when you have a reference to a WebContents object and need to get the BrowserWindow instance that contains it.
*/

const {app,BrowserWindow,ipcMain} = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    // Load the main HTML file
    mainWindow.loadFile('index.html')


    // Listen for an IPC message from the renderer process
    ipcMain.on('get-window-info', (event) => {
        const webContents = event.sender
        // console.log(webContents)
        const browserWindow = BrowserWindow.fromWebContents(webContents)
        console.log(browserWindow)
    })
}

app.whenReady().then(createWindow)

/*
BrowserWindow {
  setBounds: [Function (anonymous)],
  _events: [Object: null prototype] {
    blur: [Function (anonymous)],
    focus: [Function (anonymous)],
    show: [Function: visibilityChanged],
    hide: [Function: visibilityChanged],
    minimize: [Function: visibilityChanged],
    maximize: [Function: visibilityChanged],
    restore: [Function: visibilityChanged]
  },
  _eventsCount: 7,
  devToolsWebContents: [Getter]
}
*/
/*
In Electron, BrowserWindow.fromId(id) is a static method that returns the BrowserWindow instance associated with the given window id.

The id parameter is an integer that uniquely identifies a window in the application. 
This method is useful when you have a window id and need to get the BrowserWindow instance associated with it.
*/

const {
    app,
    BrowserWindow,
    BrowserView
} = require('electron')


function createWindow() {
    const mainWindow = new BrowserWindow()
    mainWindow.loadFile('index.html')
    const id = mainWindow.id

    const browserWindow = BrowserWindow.fromId(id)
    console.log(browserWindow)
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
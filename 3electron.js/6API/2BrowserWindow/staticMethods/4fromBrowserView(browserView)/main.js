/*
In Electron, BrowserWindow.fromBrowserView(browserView) is a static method that returns the BrowserWindow instance associated with the given BrowserView object.

The browserView parameter can be an instance of the BrowserView class, which represents a web page that can be embedded into a BrowserWindow. 
This method is useful when you have a reference to a BrowserView object and need to get the BrowserWindow instance that contains it.
*/

const {
    app,
    BrowserWindow,
    BrowserView
} = require('electron')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    // Create a BrowserView and add it to the main window
    const view = new BrowserView()
    mainWindow.setBrowserView(view)
    view.setBounds({
        x: 0,
        y: 50,
        width: 800,
        height: 600
    })
    view.webContents.loadURL('https://www.google.com')


    const browserWindow = BrowserWindow.fromBrowserView(view)
    console.log(browserWindow)
    if (browserWindow) {
        browserWindow.show()
    }
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
/*
In Electron, BrowserWindow.getFocusedWindow() is a method that returns the currently focused BrowserWindow object. 
This method can be used to access properties and methods of the focused window, 
such as its dimensions or to send messages between the renderer process and the focused window. 
Note that this method returns null if there is no focused window.
*/

const { app, BrowserWindow } = require('electron')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  // Load the main HTML file
  mainWindow.loadFile('index.html')

  // Get the focused window
  const focusedWindow = BrowserWindow.getFocusedWindow()
  console.log('Focused window:', focusedWindow)

  // Rest of the code...
}

app.whenReady().then(createWindow)


/*
Focused window: BrowserWindow {
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
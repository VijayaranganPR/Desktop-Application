/*
parent BrowserWindow | null
Sets parent as current window's parent window, passing null will turn current window into a top-level window.
*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.loadFile('first.html')

    const win2 = new BrowserWindow()
    win2.loadFile('second.html')

    win2.setParentWindow(win1)
    console.log(win1.getChildWindows());          
    
}

// create the window when app is ready
app.on('ready', createWindow)


/*
[
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
]
*/
/*
A WebFrameMain property that represents the top frame of the page's frame hierarchy.

*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')
    win.webContents.on('did-finish-load', () => {
        console.log(win.webContents.mainFrame)       
    })
}

app.whenReady().then(createWindow)

/*
EventEmitter {
  executeJavaScript: [Function: executeJavaScript],
  reload: [Function: reload],
  _send: [Function: _send],
  _postMessage: [Function: _postMessage],
  frameTreeNodeId: [Getter],
  name: [Getter],
  osProcessId: [Getter],
  processId: [Getter],
  routingId: [Getter],
  url: [Getter],
  origin: [Getter],
  visibilityState: [Getter],
  top: [Getter],
  parent: [Getter],
  frames: [Getter],
  framesInSubtree: [Getter]
}
*/
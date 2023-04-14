/*
devToolsWebContents WebContents
Uses the devToolsWebContents as the target WebContents to show devtools.

The devToolsWebContents must not have done any navigation, and it should not be used for other purposes after the call.

By default Electron manages the devtools by creating an internal WebContents with native view, which developers have very limited control of.
With the setDevToolsWebContents method, developers can use any WebContents to show the devtools in it, including BrowserWindow, BrowserView and <webview> tag.

Note that closing the devtools does not destroy the devToolsWebContents, it is caller's responsibility to destroy devToolsWebContents.

An example of showing devtools in a <webview> tag:

// */
// Main process
const { ipcMain, webContents } = require('electron')
ipcMain.on('open-devtools', (event, targetContentsId, devtoolsContentsId) => {
  const target = webContents.fromId(targetContentsId)
  const devtools = webContents.fromId(devtoolsContentsId)
  target.setDevToolsWebContents(devtools)
  target.openDevTools()
}) 
const { app, BrowserWindow } = require('electron')

let win = null
let devtools = null

app.whenReady().then(() => {
  win = new BrowserWindow()
  devtools = new BrowserWindow()
  win.loadFile('index.html')
  win.webContents.setDevToolsWebContents(devtools.webContents)
  win.webContents.openDevTools({ mode: 'detach' })
})

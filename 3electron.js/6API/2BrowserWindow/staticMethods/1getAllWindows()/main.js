/*
Returns BrowserWindow[] - An array of all opened browser windows.
*/
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadFile('index.html')
}

app.on('ready', () => {
    createWindow()
    console.log(BrowserWindow.getAllWindows())
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')
    app.quit()
})


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
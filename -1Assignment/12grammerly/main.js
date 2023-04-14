const {app, BrowserWindow, session} = require('electron')
const createWindow = async () => {

    
    const win = new BrowserWindow()
    win.webContents.session.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
        if (permission === 'tabs') {
          return true
        }
    })
    await session.defaultSession.loadExtension(extensionPath)
    await session.defaultSession.loadExtension(grammerlyPath)
    

    win.loadURL('https://keep.google.com/')
    
}
const extensionPath = 'C:\\Users\\prvij\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 15\\Extensions\\aapbdbdomjkkjkaonfhkkikfgjllcleb\\2.0.12_0'
const grammerlyPath = 'C:\\Users\\prvij\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 15\\Extensions\\kbfnbcaeplbcioakkpcpgfkobkghlhen\\14.1098.0_0'
app.whenReady().then(async () => {
    createWindow()
})

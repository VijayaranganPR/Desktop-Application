const {app,BrowserWindow,session, systemPreferences} = require('electron');
const grammerlyPath = 'C:\\Users\\prvij\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 15\\Extensions\\kbfnbcaeplbcioakkpcpgfkobkghlhen\\14.1098.0_0'

const createWindow = async () => {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true, 
            contextIsolation: false,
            experimentalFeatures: true
        }
    })
    console.log(process.title)
    systemPreferences.askForMediaAccess('camera') 
    session.defaultSession.setPermissionCheckHandler((webContents, permissions, requestingOrigin) => {
        console.log(permissions)
    })
    await session.defaultSession.loadExtension(grammerlyPath)
    
    win.loadFile('index.html')
    // win.loadURL('https://mail.google.com/mail/u/0/#inbox?compose=new')
}

app.whenReady().then(createWindow)

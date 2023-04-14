const { app, BrowserWindow, session} = require('electron');
const linerPath = 'C:\\Users\\prvij\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 15\\Extensions\\bmhcbmnbenmcecpmpepghooflbehcack\\7.4.3_0'
const grammerlyPath = 'C:\\Users\\prvij\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 15\\Extensions\\kbfnbcaeplbcioakkpcpgfkobkghlhen\\14.1098.0_0'

const createWindow =async () => {
    const win = new BrowserWindow()
    
    await session.defaultSession.loadExtension(linerPath) 
    win.loadURL('https://www.electronjs.org/docs/latest/')

}

app.whenReady().then(createWindow)

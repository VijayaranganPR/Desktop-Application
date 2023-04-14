const { app, BrowserWindow, session, protocol} = require('electron');
const grammerlyPath = 'C:\\Users\\prvij\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 15\\Extensions\\kbfnbcaeplbcioakkpcpgfkobkghlhen\\14.1098.0_0'
const createWindow =async () => {

    const win = new BrowserWindow({
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('app.html')

    setTimeout(() => {
        win.loadURL('http://localhost:3000/')
    }, 200);
}

app.whenReady().then(() => {
    createWindow()
});

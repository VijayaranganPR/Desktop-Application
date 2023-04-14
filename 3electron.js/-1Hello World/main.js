const { app, BrowserWindow,  protocol} = require('electron');
const grammerlyPath = 'C:\\Users\\prvij\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 15\\Extensions\\kbfnbcaeplbcioakkpcpgfkobkghlhen\\14.1098.0_0'
const createWindow =async () => {

    let win = new BrowserWindow();
win.loadFile('index.html');


}

app.whenReady().then(() => {
    createWindow()
    
});

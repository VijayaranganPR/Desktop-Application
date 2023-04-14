/*
options Object
width boolean (optional) - If true, the view's width will grow and shrink together with the window. false by default.
height boolean (optional) - If true, the view's height will grow and shrink together with the window. false by default.
horizontal boolean (optional) - If true, the view's x position and width will grow and shrink proportionally with the window. false by default.
vertical boolean (optional) - If true, the view's y position and height will grow and shrink proportionally with the window. false by default.
s*/
const {
    app,
    BrowserWindow,
    BrowserView
} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    const view = new BrowserView()

    win.setBrowserView(view)
    view.setAutoResize({
        width: 300,
        height: 300,
        horizontal: true,
        vertical: true
    })
    view.webContents.loadURL('https://www.google.com/')
}

app.whenReady().then(createWindow)

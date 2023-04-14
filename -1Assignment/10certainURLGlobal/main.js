const {app,BrowserWindow,Menu,ipcMain} = require('electron')
const path = require('path')

// defining certain host which are allowed to access global variables in preload
const fixedHost = ['www.youtube.com', 'www.google.com', 'www.electronjs.org', 'anywhere.adaptiveu.io', 'developer.mozilla.org']

// creating menu
const createMenu = () => {
    const template = [{
        label: 'tools',
        submenu: [{
            label: 'open developer tools',
            accelerator: 'CommandOrControl+Shift+i',
            click: (menuItem, browserWindow) => {
                browserWindow.webContents.toggleDevTools()
            }
        }]
    }]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}


// creating window function which will be called with url and the state of context Isolation
// url is set null unless a url is passed
const createWindow = (url = null, contextIsolation) => {
    createMenu()
    const win = new BrowserWindow({
        webPreferences: {
            // if the contextIsolation is false then the renderer can access the global variable of preload
            // if the contextIsolation is true then the renderer can not access the global variable of preload
            contextIsolation: contextIsolation,
            // loading the preload 
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // load url if url is passed else load index.html file
    if(url) win.loadURL(url)
    else win.loadFile('index.html')
}


// create an ipc channel to communicate
ipcMain.on('openLink', (e, url) => {
    
    // if the url presents in fixedHost then set the contextIsolation to false to give access to the globalThis of the preload
    if(fixedHost.includes(url[0])) createWindow(url[1], false)
    else {
        createWindow(url[1], true)
    }
})


// create the starting window if the app is ready
app.on('ready', () => {
    createWindow(null, false)
});

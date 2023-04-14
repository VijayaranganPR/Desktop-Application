/*
Remove the window's menu bar.

*/


const {app,BrowserWindow,Menu} = require('electron')

function createWindow() {
    // create a template for the menu
    const mainWindow = new BrowserWindow()
    const template = [{
            label: 'File',
            submenu: [{
                    label: 'Open'
                },
                {
                    label: 'Save'
                },
                {
                    label: 'Exit'
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [{
                    label: 'Undo'
                },
                {
                    label: 'Redo'
                },
                {
                    label: 'Cut'
                },
                {
                    label: 'Copy'
                },
                {
                    label: 'Paste'
                },
                {
                    label: 'Select All'
                }
            ]
        },
        {
            label: 'View',
            submenu: [{
                    label: 'Zoom In'
                },
                {
                    label: 'Zoom Out'
                },
                {
                    label: 'Reset Zoom'
                }
            ]
        }
    ]

    // create the menu from the template
    const menu = Menu.buildFromTemplate(template)

    // set the menu for the window
    mainWindow.setMenu(menu)

    // load the index.html file
    mainWindow.loadFile('index.html')

    setTimeout(() => {
        mainWindow.removeMenu()
    }, 5000);

}

app.whenReady().then(createWindow)
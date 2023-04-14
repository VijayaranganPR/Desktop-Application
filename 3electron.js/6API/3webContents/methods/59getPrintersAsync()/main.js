/*
Get the system printer list.

Returns Promise<PrinterInfo[]> - Resolves with a PrinterInfo[]

*/


const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    
    win.webContents.on('did-finish-load', () => {
        win.webContents.getPrintersAsync().then(content => {
            console.log(content)
        })
    })
}

app.whenReady().then(createWindow)

/*
[
  {
    name: 'OneNote for Windows 10',
    displayName: 'OneNote for Windows 10',
    description: '',
    status: 0,
    isDefault: false,
    options: {
      'printer-location': '',
      'printer-make-and-model': 'Microsoft Software Printer Driver',
      system_driverinfo: 'Microsoft Software Printer Driver;10.0.22621.1105 (WinBuild.160101.0800);Microsoft┬« Windows┬« Operating System;10.0.22621.1105'
    }
  },
  {
    name: 'OneNote (Desktop)',
    displayName: 'OneNote (Desktop)',
    description: '',
    status: 0,
    isDefault: false,
    options: {
      'printer-location': '',
      'printer-make-and-model': 'Send to Microsoft OneNote 16 Driver',
      system_driverinfo: 'Send to Microsoft OneNote 16 Driver;10.0.22621.1105 (WinBuild.160101.0800);Microsoft┬« Windows┬« Operating System;10.0.22621.1105'
    }
  },
  {
    name: 'Microsoft Print to PDF',
    displayName: 'Microsoft Print to PDF',
    description: '',
    status: 0,
    isDefault: true,
    options: {
      'printer-location': '',
      'printer-make-and-model': 'Microsoft Print To PDF',
      system_driverinfo: 'Microsoft Print To PDF;10.0.22621.1105 (WinBuild.160101.0800);Microsoft┬« Windows┬« Operating System;10.0.22621.1105'
    }
  },
  {
    name: 'Fax',
    displayName: 'Fax',
    description: '',
    status: 0,
    isDefault: false,
    options: {
      'printer-location': '',
      'printer-make-and-model': 'Microsoft Shared Fax Driver',
      system_driverinfo: 'Microsoft Shared Fax Driver;10.0.22621.1105 (WinBuild.160101.0800);Microsoft┬« Windows┬« Operating System;10.0.22621.1105'
    }
  }
]
*/
/*
contents.enableDeviceEmulation(parameters) is a method provided by the Electron framework that allows you to emulate a device in the DevTools of a renderer process.

This method takes an optional parameters object as a parameter, which can be used to configure the device emulation settings. 
The parameters object can have the following properties:


parameters Object
screenPosition string - Specify the screen type to emulate (default: desktop):
desktop - Desktop screen type.
mobile - Mobile screen type.
screenSize Size - Set the emulated screen size (screenPosition == mobile).
viewPosition Point - Position the view on the screen (screenPosition == mobile) (default: { x: 0, y: 0 }).
deviceScaleFactor Integer - Set the device scale factor (if zero defaults to original device scale factor) (default: 0).
viewSize Size - Set the emulated view size (empty means no override)
scale Float - Scale of emulated view inside available space (not in fit to view mode) (default: 1).
Enable device emulation with the given parameters.

*/
const {app,BrowserWindow, ipcMain, MessageChannelMain} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('index.html')
    win.webContents.enableDeviceEmulation({
        screenPosition: 'mobile',
        screenSize: {
          width: 375,
          height: 667
        },
        viewPosition: 'center',
        viewSize: {
          width: 375,
          height: 667
        },
        deviceScaleFactor: 2,
        screenOrientation: {
          type: 'portrait-primary',
          angle: 0
        }
      });
}

app.whenReady().then(createWindow)


/* 
// in terminal
message from renderer : frameID is 1

// in browser terminal
message from main
*/

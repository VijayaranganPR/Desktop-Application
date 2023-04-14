/*
inputEvent MouseInputEvent | MouseWheelInputEvent | KeyboardInputEvent
Sends an input event to the page. Note: The BrowserWindow containing the contents needs to be focused for sendInputEvent() to work.

contents.sendInputEvent(inputEvent) is a method provided by the Electron framework that allows you to simulate input events on a web page in a renderer process.

This method takes an object inputEvent as a parameter, which can be used to configure the input event to be sent. The inputEvent object can have the following properties:

type: A string that specifies the type of the input event. The possible values are "keyDown", "keyUp", "char", "mouseDown", "mouseUp", "contextMenu", "mouseWheel", or "mouseMove".
modifiers: An array of strings that specifies the keyboard modifiers for the input event. The possible values are "Shift", "Control", "Alt", and "Meta".
x, y: Numbers that specify the coordinates of the mouse event. These properties are used only for mouse events.
button: A string that specifies which mouse button was pressed or released. The possible values are "left", "middle", or "right". These properties are used only for mouse events.
clickCount: A number that specifies the number of clicks for the mouse event. This property is used only for mouse events.
keyCode: A number that specifies the key code for the keyboard event. This property is used only for keyboard events.
code: A string that specifies the code for the keyboard event. This property is used only for keyboard events.
key: A string that specifies the key for the keyboard event. This property is used only for keyboard events.
isAutoRepeat: A boolean that specifies whether the keyboard event is an auto-repeat event. This property is used only for keyboard events.
text: A string that specifies the text input for the keyboard event. This property is used only for keyboard events.
unmodifiedText: A string that specifies the unmodified text input for the keyboard event. This property is used only for keyboard events.
canCompose: A boolean that specifies whether the keyboard event can be composed. This property is used only for keyboard events.
deltaX, deltaY: Numbers that specify the scroll delta for the mouseWheel event. These properties are used only for mouseWheel events.

*/
const {app,BrowserWindow, ipcMain} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.loadFile('index.html')
    win.webContents.on('did-finish-load', () => {
        win.webContents.sendInputEvent({
          type: 'mouseDown',
          button: 'left',
          clickCount: 1,
          x: 100,
          y: 100
        });
      
        win.webContents.sendInputEvent({
          type: 'mouseUp',
          button: 'left',
          clickCount: 1,
          x: 100,
          y: 100
        });
    
})
}
app.whenReady().then(createWindow)


/* 
// in terminal
message from renderer : frameID is 1

// in browser terminal
message from main
*/

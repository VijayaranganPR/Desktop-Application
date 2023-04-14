/*
buttons ThumbarButton[]
Returns boolean - Whether the buttons were added successfully

Add a thumbnail toolbar with a specified set of buttons to the thumbnail image of a window in a taskbar button layout. Returns a boolean object indicates whether the thumbnail has been added successfully.

The number of buttons in thumbnail toolbar should be no greater than 7 due to the limited room. Once you setup the thumbnail toolbar, the toolbar cannot be removed due to the platform's limitation. But you can call the API with an empty array to clean the buttons.

The buttons is an array of Button objects:

Button Object
icon NativeImage - The icon showing in thumbnail toolbar.
click Function
tooltip string (optional) - The text of the button's tooltip.
flags string[] (optional) - Control specific states and behaviors of the button. By default, it is ['enabled'].
The flags is an array that can include following strings:

enabled - The button is active and available to the user.
disabled - The button is disabled. It is present, but has a visual state indicating it will not respond to user action.
dismissonclick - When the button is clicked, the thumbnail window closes immediately.
nobackground - Do not draw a button border, use only the image.
hidden - The button is not shown to the user.
noninteractive - The button is enabled but not interactive; no pressed button state is drawn. This value is intended for instances where the button is used in a notification.
*/


const {app,BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
    const mainWindow = new BrowserWindow()
    // load the index.html file
    mainWindow.loadFile('index.html')

    // set the thumbar buttons for the window
    const buttonAdded = mainWindow.setThumbarButtons([{
        tooltip: 'Button 1',
        icon: 'full.jpg',
        click() {
            console.log('Button 1 clicked')
        }
    }])
    console.log(buttonAdded); // true

}



// create the window when app is ready
app.on('ready', createWindow)
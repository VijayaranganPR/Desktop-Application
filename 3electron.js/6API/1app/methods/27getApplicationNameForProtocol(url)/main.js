/*
The app.getApplicationNameForProtocol method in Electron allows you to retrieve the name of the default application for a given URL protocol. 
A protocol is a string that defines a custom URL scheme that can be used to launch an application.


url string - a URL with the protocol name to check. Unlike the other methods in this family, this accepts an entire URL, including :// at a minimum (e.g. https://).
Returns string - Name of the application handling the protocol, or an empty string if there is no handler. For instance, if Electron is the default handler of the URL, this could be Electron on Windows and Mac. However, don't rely on the precise format which is not guaranteed to remain unchanged. Expect a different format on Linux, possibly with a .desktop suffix.

This method returns the application name of the default handler for the protocol (aka URI scheme) of a URL.
*/

const {app,BrowserWindow} = require('electron');

// Create a new BrowserWindow when Electron is ready
app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load the main window with a file
    mainWindow.loadFile('index.html');

    // Get the name of the default application for the "myapp://" URL scheme
    const appName = app.getApplicationNameForProtocol('myapp://');

    // Log the result
    console.log(appName);
});

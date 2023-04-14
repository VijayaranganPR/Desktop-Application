/*
The app.getApplicationInfoForProtocol method in Electron retrieves information about the default application for a given URL protocol. 
A protocol is a string that defines a custom URL scheme that can be used to launch an application.


url string - a URL with the protocol name to check. Unlike the other methods in this family, this accepts an entire URL, including :// at a minimum (e.g. https://).
Returns Promise<Object> - Resolve with an object containing the following:

icon NativeImage - the display icon of the app handling the protocol.
path string - installation path of the app handling the protocol.
name string - display name of the app handling the protocol.
This method returns a promise that contains the application name, icon and path of the default handler for the protocol (aka URI scheme) of a URL.
*/

const {app} = require('electron');

app.on('ready', () => {
    app.setName('vijay')
    app.setAsDefaultProtocolClient('myapp', '/path/to/myapp', ['--arg1', '--arg2']);
    const appInfo = app.getApplicationInfoForProtocol('myapp://');
    console.log(appInfo)
    app.quit()
})

/*
The app.isDefaultProtocolClient method in Electron allows you to check whether your Electron application is set as the default client for a given protocol. 
A protocol is a string that defines a custom URL scheme that can be used to launch your application.

protocol string - The name of your protocol, without ://.
path string (optional) Windows - Defaults to process.execPath
args string[] (optional) Windows - Defaults to an empty array
Returns boolean - Whether the current executable is the default handler for a protocol (aka URI scheme).

Note: On macOS, you can use this method to check if the app has been registered as the default protocol handler for a protocol. You can also verify this by checking ~/Library/Preferences/com.apple.LaunchServices.plist on the macOS machine. Please refer to Apple's documentation for details.

The API uses the Windows Registry and LSCopyDefaultHandlerForURLScheme internally.
*/

const {app} = require('electron');

app.on('ready', () => {
    app.setAsDefaultProtocolClient('myapp', '/path/to/myapp', ['--arg1', '--arg2']);
    console.log(app.isDefaultProtocolClient('myapp', '/path/to/myapp', ['--arg1', '--arg2']));          // true
    app.quit()
})

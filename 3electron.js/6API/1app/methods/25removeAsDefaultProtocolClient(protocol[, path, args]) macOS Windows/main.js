/*
The app.removeAsDefaultProtocolClient method in Electron allows you to remove your Electron application as the default client for a given protocol. 
A protocol is a string that defines a custom URL scheme that can be used to launch your application.

protocol string - The name of your protocol, without ://.
path string (optional) Windows - Defaults to process.execPath
args string[] (optional) Windows - Defaults to an empty array
Returns boolean - Whether the call succeeded.

This method checks if the current executable as the default handler for a protocol (aka URI scheme). If so, it will remove the app as the default handler.
*/
const {app} = require('electron');

app.on('ready', () => {
    app.setAsDefaultProtocolClient('myapp', '/path/to/myapp', ['--arg1', '--arg2']);
    app.removeAsDefaultProtocolClient('myapp', '/path/to/myapp', ['--arg1', '--arg2']);
    app.quit()
})

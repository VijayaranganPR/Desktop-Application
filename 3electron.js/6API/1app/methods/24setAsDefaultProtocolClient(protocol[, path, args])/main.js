/*
The app.setAsDefaultProtocolClient method in Electron allows you to set your Electron application as the default client for a given protocol. 
A protocol is a string that defines a custom URL scheme that can be used to launch your application.

protocol string - The name of your protocol, without ://. For example, if you want your app to handle electron:// links, call this method with electron as the parameter.
path string (optional) Windows - The path to the Electron executable. Defaults to process.execPath
args string[] (optional) Windows - Arguments passed to the executable. Defaults to an empty array

Returns boolean - Whether the call succeeded.

Sets the current executable as the default handler for a protocol (aka URI scheme). It allows you to integrate your app deeper into the operating system. Once registered, all links with your-protocol:// will be opened with the current executable. The whole link, including protocol, will be passed to your application as a parameter.

Note: On macOS, you can only register protocols that have been added to your app's info.plist, which cannot be modified at runtime. However, you can change the file during build time via Electron Forge, Electron Packager, or by editing info.plist with a text editor. Please refer to Apple's documentation for details.

Note: In a Windows Store environment (when packaged as an appx) this API will return true for all calls but the registry key it sets won't be accessible by other applications. In order to register your Windows Store application as a default protocol handler you must declare the protocol in your manifest.

The API uses the Windows Registry and LSSetDefaultHandlerForURLScheme internally.
*/
const {app} = require('electron');

app.on('ready', () => {
    app.setAsDefaultProtocolClient('myapp', '/path/to/myapp', ['--arg1', '--arg2']);
    app.quit()
})

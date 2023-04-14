/*
In Electron, the app.setAppLogsPath method allows you to set the directory path where logs generated by the application will be stored.


path string (optional) - A custom path for your logs. Must be absolute.
Sets or creates a directory your app's logs which can then be manipulated with app.getPath() or app.setPath(pathName, newPath).

Calling app.setAppLogsPath() without a path parameter will result in this directory being set to 
~/Library/Logs/YourAppName on macOS, and 
inside the userData directory on Linux and Windows.
*/

const { app } = require('electron');
const path = require('path')
app.setAppLogsPath(path.join(__dirname,'/path/to/logs'));
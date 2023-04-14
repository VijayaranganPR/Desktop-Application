/*
The app.setPath method in Electron allows you to set the path of various directories that are commonly used by the operating system. The name parameter specifies which directory you want to set the path for, and the path parameter specifies the new path.

Here are some of the most common name values you can use with app.setPath:

    'home': sets the path to the user's home directory
    'appData': sets the path to the user's Application Data directory
    'userData': sets the path to the directory where data for the application can be stored
    'temp': sets the path to the system's temporary directory
    'exe': sets the path to the executable file that started the application
    'module': sets the path to the directory where the main module of the application is located

name string
path string
Overrides the path to a special directory or file associated with name. If the path specifies a directory that does not exist, an Error is thrown. In that case, the directory should be created with fs.mkdirSync or similar.

You can only override paths of a name defined in app.getPath.

By default, web pages' cookies and caches will be stored under the sessionData directory. If you want to change this location, you have to override the sessionData path before the ready event of the app module is emitted.
*/

const { app } = require('electron');

app.setPath('home', '/path/to/home');
console.log(app.getPath('home'));
// '/path/to/home'

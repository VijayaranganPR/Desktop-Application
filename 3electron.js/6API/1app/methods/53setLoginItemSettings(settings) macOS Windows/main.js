/*
settings Object
openAtLogin boolean (optional) - true to open the app at login, false to remove the app as a login item. Defaults to false.
openAsHidden boolean (optional) macOS - true to open the app as hidden. Defaults to false. The user can edit this setting from the System Preferences so app.getLoginItemSettings().wasOpenedAsHidden should be checked when the app is opened to know the current value. This setting is not available on MAS builds.
path string (optional) Windows - The executable to launch at login. Defaults to process.execPath.
args string[] (optional) Windows - The command-line arguments to pass to the executable. Defaults to an empty array. Take care to wrap paths in quotes.
enabled boolean (optional) Windows - true will change the startup approved registry key and enable / disable the App in Task Manager and Windows Settings. Defaults to true.
name string (optional) Windows - value name to write into registry. Defaults to the app's AppUserModelId(). Set the app's login item settings.
To work with Electron's autoUpdater on Windows, which uses Squirrel, you'll want to set the launch path to Update.exe, and pass arguments that specify your application name. 
*/

const path = require('path')
const {app} = require('electron')
const appFolder = path.dirname(process.execPath)
const updateExe = path.resolve(appFolder, '..', 'Update.exe')
const exeName = path.basename(process.execPath)

app.setLoginItemSettings({
  openAtLogin: true,
  path: updateExe,
  args: [
    '--processStart', `"${exeName}"`,
    '--process-start-args', `"--hidden"`
  ]
})
/*
options Object (optional)
path string (optional) Windows - The executable path to compare against. Defaults to process.execPath.
args string[] (optional) Windows - The command-line arguments to compare against. Defaults to an empty array.

If you provided path and args options to app.setLoginItemSettings, 
then you need to pass the same arguments here for openAtLogin to be set correctly.

Returns Object:

openAtLogin boolean - true if the app is set to open at login.
openAsHidden boolean macOS - true if the app is set to open as hidden at login. This setting is not available on MAS builds.
wasOpenedAtLogin boolean macOS - true if the app was opened at login automatically. This setting is not available on MAS builds.
wasOpenedAsHidden boolean macOS - true if the app was opened as a hidden login item. This indicates that the app should not open any windows at startup. This setting is not available on MAS builds.
restoreState boolean macOS - true if the app was opened as a login item that should restore the state from the previous session. This indicates that the app should restore the windows that were open the last time the app was closed. This setting is not available on MAS builds.
executableWillLaunchAtLogin boolean Windows - true if app is set to open at login and its run key is not deactivated. This differs from openAtLogin as it ignores the args option, this property will be true if the given executable would be launched at login with any arguments.
launchItems Object[] Windows
name string Windows - name value of a registry entry.
path string Windows - The executable to an app that corresponds to a registry entry.
args string[] Windows - the command-line arguments to pass to the executable.
scope string Windows - one of user or machine. Indicates whether the registry entry is under HKEY_CURRENT USER or HKEY_LOCAL_MACHINE.
enabled boolean Windows - true if the app registry key is startup approved and therefore shows as enabled in Task Manager and Windows settings.

*/

const {app} = require('electron');
console.log(app.getLoginItemSettings());
app.quit()

/*
{
  openAtLogin: false,
  openAsHidden: false,
  restoreState: false,
  wasOpenedAtLogin: false,
  wasOpenedAsHidden: false,
  launchItems: [],
  executableWillLaunchAtLogin: false
}
*/
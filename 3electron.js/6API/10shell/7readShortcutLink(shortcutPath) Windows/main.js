/*
shortcutPath string
operation string (optional) - Default is create, can be one of following:
create - Creates a new shortcut, overwriting if necessary.
update - Updates specified properties only on an existing shortcut.
replace - Overwrites an existing shortcut, fails if the shortcut doesn't exist.
options ShortcutDetails
Returns boolean - Whether the shortcut was created successfully.

Creates or updates a shortcut link at shortcutPath.
*/

const {app,BrowserWindow, shell} = require('electron')


const createWindow = async () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    const shortcutPath = "C:\\Users\\prvij\\Desktop\\Expenses.xlsx";

    const options = {
        target: "C:\\Users\\prvij\\Desktop\\Expenses.xlsx",
        cwd: 'C:\\Users\\prvij\\Desktop\\',
        args: ['--start'],
        description: 'Launches MyApp'
    };

shell.writeShortcutLink(shortcutPath, 'create', options);

const shortcut = shell.readShortcutLink('C:\\Users\\prvij\\Desktop\\Expenses.xlsx')
console.log(shortcut);
}

app.whenReady().then(createWindow)
/*
{
  target: 'C:\\Users\\prvij\\Desktop\\Expenses.xlsx',
  cwd: 'C:\\Users\\prvij\\Desktop\\',
  args: '',
  description: 'Launches MyApp',
  icon: '',
  iconIndex: 0,
  appUserModelId: '',
  toastActivatorClsid: ''
}
*/
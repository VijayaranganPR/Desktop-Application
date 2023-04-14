/*
still pending

worldId Integer - The ID of the world to run the javascript in, 0 is the default world, 999 is the world used by Electron's contextIsolation feature. You can provide any integer here.
scripts WebSource[]
userGesture boolean (optional) - Default is false.
Returns Promise<any> - A promise that resolves with the result of the executed code or is rejected if the result of the code is a rejected promise.

Works like executeJavaScript but evaluates scripts in an isolated context.

*/

const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')
    const win2 = new BrowserWindow()
    win2.loadFile('index.html')

    win.webContents.executeJavaScriptInIsolatedWorld(win2.id,'console.log(one)', true)
  .then((result) => {
    console.log(result) // Will be the JSON object from the fetch call
  })
}

app.whenReady().then(createWindow)

/*
{
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: { lat: '-37.3159', lng: '81.1496' }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
}
*/
/*
A Menu | null property that returns Menu if one has been set and null otherwise. Users can pass a Menu to set this property.
*/
const { app, Menu, MenuItem } = require('electron');

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New',
        accelerator: 'CmdOrCtrl+N',
        click: () => { console.log('Create a new file'); }
      },
      {
        label: 'Open',
        accelerator: 'CmdOrCtrl+O',
        click: () => { console.log('Open a file'); }
      },
      {
        label: 'Save',
        accelerator: 'CmdOrCtrl+S',
        click: () => { console.log('Save the current file'); }
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
        click: () => { console.log('Cut the selected text'); }
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        click: () => { console.log('Copy the selected text'); }
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        click: () => { console.log('Paste the text from the clipboard'); }
      }
    ]
  }
];

app.whenReady().then(() => {
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});

/*
The app.setUserTasks method in Electron is used to set the user tasks that are displayed in the Jump List on Windows. 
A Jump List is a feature in Windows that allows users to quickly access recently used files and tasks for an application.

tasks Task[] - Array of Task objects
Adds tasks to the Tasks category of the Jump List on Windows.

tasks is an array of Task objects.

Returns boolean - Whether the call succeeded.

Note: If you'd like to customize the Jump List even more use app.setJumpList(categories) instead.
*/

const {app} = require('electron');

app.on('ready', () => {

    const tasks = [
      {
        program: process.execPath,
        arguments: '--new-window',
        iconPath: process.execPath,
        iconIndex: 0,
        title: 'New Window',
        description: 'Open a new window'
      },
      {
        program: process.execPath,
        arguments: '--open-file',
        iconPath: process.execPath,
        iconIndex: 0,
        title: 'Open File',
        description: 'Open a file'
      }
    ];
    
    app.setUserTasks(tasks);
    
    app.quit()
})

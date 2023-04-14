/*
The app.getJumpListSettings() method in Electron is used to get the settings of the Jump List on Windows platforms. 
Jump Lists are context menus that appear when you right-click an application's taskbar icon on Windows. They provide quick access to frequently used tasks and recently opened items for an application.

In Electron, you can use the app.getJumpListSettings() method to get the current Jump List settings for your application. 
The method returns an object that includes properties such as minItems, removedItems, and options, which you can use to customize the Jump List for your application.


Returns Object:

minItems Integer - The minimum number of items that will be shown in the Jump List (for a more detailed description of this value see the MSDN docs).
removedItems JumpListItem[] - Array of JumpListItem objects that correspond to items that the user has explicitly removed from custom categories in the Jump List. 
These items must not be re-added to the Jump List in the next call to app.setJumpList(), Windows will not display any custom category that contains any of the removed items.

*/
const { app } = require('electron');

app.once('ready', () => {
  const settings = app.getJumpListSettings();
  console.log(settings);                    // { minItems: 10, removedItems: [] }
  app.quit()
});

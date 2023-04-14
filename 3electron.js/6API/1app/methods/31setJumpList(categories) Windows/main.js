/*
The app.setJumpList(categories) method in Electron is used to set the items in the Jump List for an application on Windows platforms. 
Jump Lists are context menus that appear when you right-click an application's taskbar icon on Windows. 
They provide quick access to frequently used tasks and recently opened items for an application.

In Electron, you can use the app.setJumpList(categories) method to specify the items that should appear in the Jump List for your application. 
The categories argument is an array of objects, where each object represents a category of items in the Jump List. 
Each object can have properties such as title and items, which specify the title of the category and the items within the category, respectively.

categories JumpListCategory[] | null - Array of JumpListCategory objects.
Returns string

Sets or removes a custom Jump List for the application, and returns one of the following strings:

ok - Nothing went wrong.
error - One or more errors occurred, enable runtime logging to figure out the likely cause.
invalidSeparatorError - An attempt was made to add a separator to a custom category in the Jump List. Separators are only allowed in the standard Tasks category.
fileTypeRegistrationError - An attempt was made to add a file link to the Jump List for a file type the app isn't registered to handle.
customCategoryAccessDeniedError - Custom categories can't be added to the Jump List due to user privacy or group policy settings.
If categories is null the previously set custom Jump List (if any) will be replaced by the standard Jump List for the app (managed by Windows).

Note: If a JumpListCategory object has neither the type nor the name property set then its type is assumed to be tasks. If the name property is set but the type property is omitted then the type is assumed to be custom.

Note: Users can remove items from custom categories, and Windows will not allow a removed item to be added back into a custom category until after the next successful call to app.setJumpList(categories). Any attempt to re-add a removed item to a custom category earlier than that will result in the entire custom category being omitted from the Jump List. The list of removed items can be obtained using app.getJumpListSettings().

Note: The maximum length of a Jump List item's description property is 260 characters. Beyond this limit, the item will not be added to the Jump List, nor will it be displayed.

Here's a very simple example of creating a custom Jump List:


*/

const { app } = require('electron');

app.once('ready', () => {
  const categories = [
    {
      title: 'Recently opened',
      items: [
        {
          type: 'file',
          path: '/path/to/file1.txt'
        },
        {
          type: 'file',
          path: '/path/to/file2.txt'
        }
      ]
    },
    {
      title: 'Tasks',
      items: [
        {
          type: 'task',
          title: 'Task 1',
          program: '/path/to/program1.exe',
          args: '--arg1 --arg2'
        },
        {
          type: 'task',
          title: 'Task 2',
          program: '/path/to/program2.exe',
          args: '--arg1 --arg2'
        }
      ]
    }
  ];

  app.setJumpList(categories);
});
/*
[19104:0213/150634.380:ERROR:jump_list.cc(269)] Failed to append '/path/to/file1.txt' to Jump List.
[19104:0213/150634.383:ERROR:jump_list.cc(269)] Failed to append '/path/to/file2.txt' to Jump List.
[19104:0213/150634.386:ERROR:jump_list.cc(247)] Failed to append task 'Task 1' to Jump List.
[19104:0213/150634.388:ERROR:jump_list.cc(247)] Failed to append task 'Task 2' to Jump List.
*/

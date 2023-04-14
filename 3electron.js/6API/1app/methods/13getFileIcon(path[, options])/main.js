/*
The getFileIcon method in Electron is used to retrieve the icon of a file or directory located at the specified path. 
The method returns a NativeImage object, which represents the icon of the file or directory.


path string
options Object (optional)
    size string
        small - 16x16
        normal - 32x32
        large - 48x48 on Linux, 
                32x32 on Windows, 
                unsupported on macOS.
Returns Promise<NativeImage> - fulfilled with the app's icon, which is a NativeImage.

Fetches a path's associated icon.

On Windows, there a 2 kinds of icons:

Icons associated with certain file extensions, like .mp3, .png, etc.
Icons inside the file itself, like .exe, .dll, .ico.
On Linux and macOS, icons depend on the application associated with file mime type.
*/

const { app} = require('electron');

app.getFileIcon('/path/to/file', { size: 'large' }, (error, icon) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(icon.toDataURL());
});

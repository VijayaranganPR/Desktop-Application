/*
Returns string - Window id in the format of DesktopCapturerSource's id. For example "window:1324:0".

More precisely the format is window:id:other_id 
where id is
HWND on Windows, 
CGWindowID (uint64_t) on macOS and Window (unsigned long) on Linux. 
other_id is used to identify web contents (tabs) so within the same top level window.
*/


const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    
    console.log(win1.getMediaSourceId())                    // window:919922:1    
}

app.whenReady().then(createWindow)

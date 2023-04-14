/*
options Object (optional)
silent boolean (optional) - Don't ask user for print settings. Default is false.
printBackground boolean (optional) - Prints the background color and image of the web page. Default is false.
deviceName string (optional) - Set the printer device name to use. Must be the system-defined name and not the 'friendly' name, e.g 'Brother_QL_820NWB' and not 'Brother QL-820NWB'.
color boolean (optional) - Set whether the printed web page will be in color or grayscale. Default is true.
margins Object (optional)
marginType string (optional) - Can be default, none, printableArea, or custom. If custom is chosen, you will also need to specify top, bottom, left, and right.
top number (optional) - The top margin of the printed web page, in pixels.
bottom number (optional) - The bottom margin of the printed web page, in pixels.
left number (optional) - The left margin of the printed web page, in pixels.
right number (optional) - The right margin of the printed web page, in pixels.
landscape boolean (optional) - Whether the web page should be printed in landscape mode. Default is false.
scaleFactor number (optional) - The scale factor of the web page.
pagesPerSheet number (optional) - The number of pages to print per page sheet.
collate boolean (optional) - Whether the web page should be collated.
copies number (optional) - The number of copies of the web page to print.
pageRanges Object[] (optional) - The page range to print. On macOS, only one range is honored.
from number - Index of the first page to print (0-based).
to number - Index of the last page to print (inclusive) (0-based).
duplexMode string (optional) - Set the duplex mode of the printed web page. Can be simplex, shortEdge, or longEdge.
dpi Record<string, number> (optional)
horizontal number (optional) - The horizontal dpi.
vertical number (optional) - The vertical dpi.
header string (optional) - string to be printed as page header.
footer string (optional) - string to be printed as page footer.
pageSize string | Size (optional) - Specify page size of the printed document. Can be A0, A1, A2, A3, A4, A5, A6, Legal, Letter, Tabloid or an Object containing height and width.
callback Function (optional)
success boolean - Indicates success of the print call.
failureReason string - Error description called back if the print fails.
When a custom pageSize is passed, Chromium attempts to validate platform specific minimum values for width_microns and height_microns. Width and height must both be minimum 353 microns but may be higher on some operating systems.

Prints window's web page. When silent is set to true, Electron will pick the system's default printer if deviceName is empty and the default settings for printing.

Use page-break-before: always; CSS style to force to print to a new page.


*/


const {app,BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('https://www.google.com/')

    const options = {
        silent: true,
        deviceName: 'My-Printer',
        pageRanges: [{
            from: 0,
            to: 1
        }]
    }
    win.webContents.print(options, (success, errorType) => {
        if (!success) console.log(errorType)            // Invalid deviceName provided (I don't have a printer)
    })
}

app.whenReady().then(createWindow)


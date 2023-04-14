/*
options Object
landscape boolean (optional) - Paper orientation.true for landscape, false for portrait. Defaults to false.
displayHeaderFooter boolean (optional) - Whether to display header and footer. Defaults to false.
printBackground boolean (optional) - Whether to print background graphics. Defaults to false.
scale number(optional) - Scale of the webpage rendering. Defaults to 1.
pageSize string | Size (optional) - Specify page size of the generated PDF. Can be A0, A1, A2, A3, A4, A5, A6, Legal, Letter, Tabloid, Ledger, or an Object containing height and width in inches. Defaults to Letter.
margins Object (optional)
top number (optional) - Top margin in inches. Defaults to 1cm (~0.4 inches).
bottom number (optional) - Bottom margin in inches. Defaults to 1cm (~0.4 inches).
left number (optional) - Left margin in inches. Defaults to 1cm (~0.4 inches).
right number (optional) - Right margin in inches. Defaults to 1cm (~0.4 inches).
pageRanges string (optional) - Paper ranges to print, e.g., '1-5, 8, 11-13'. Defaults to the empty string, which means print all pages.
headerTemplate string (optional) - HTML template for the print header. Should be valid HTML markup with following classes used to inject printing values into them: date (formatted print date), title (document title), url (document location), pageNumber (current page number) and totalPages (total pages in the document). For example, <span class=title></span> would generate span containing the title.
footerTemplate string (optional) - HTML template for the print footer. Should use the same format as the headerTemplate.
preferCSSPageSize boolean (optional) - Whether or not to prefer page size as defined by css. Defaults to false, in which case the content will be scaled to fit the paper size.
Returns Promise<Buffer> - Resolves with the generated PDF data.

Prints the window's web page as PDF.

The landscape will be ignored if @page CSS at-rule is used in the web page.


*/

const {app,BrowserWindow} = require('electron')
const fs = require('fs')
const path = require('path')
const os = require('os')

const createWindow = () => {
    const win = new BrowserWindow()
    win.loadURL('http://github.com')

    win.webContents.on('did-finish-load', () => {
        // Use default printing options
        const pdfPath = path.join(__dirname, 'temp.pdf')
        win.webContents.printToPDF({}).then(data => {
            fs.writeFile(pdfPath, data, (error) => {
                if (error) throw error
                console.log(`Wrote PDF successfully to ${pdfPath}`)     // Wrote PDF successfully to E:\desktop\Desktop Application\3electron.js\-1Hello World\temp.pdf
            })
        }).catch(error => {
            console.log(`Failed to write PDF to ${pdfPath}: `, error)
        })
    })
}

app.whenReady().then(createWindow)

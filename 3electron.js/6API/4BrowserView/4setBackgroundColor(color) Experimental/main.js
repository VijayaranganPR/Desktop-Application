/*
color string - Color in Hex, RGB, ARGB, HSL, HSLA or named CSS color format. The alpha channel is optional for the hex type.
Examples of valid color values:

Hex
#fff (RGB)
#ffff (ARGB)
#ffffff (RRGGBB)
#ffffffff (AARRGGBB)
RGB
rgb(([\d]+),\s([\d]+),\s([\d]+))
e.g. rgb(255, 255, 255)
RGBA
rgba(([\d]+),\s([\d]+),\s([\d]+),\s*([\d.]+))
e.g. rgba(255, 255, 255, 1.0)
HSL
hsl((-?[\d.]+),\s([\d.]+)%,\s([\d.]+)%)
e.g. hsl(200, 20%, 50%)
HSLA
hsla((-?[\d.]+),\s([\d.]+)%,\s([\d.]+)%,\s*([\d.]+))
e.g. hsla(200, 20%, 50%, 0.5)
Color name
Options are listed in SkParseColor.cpp
Similar to CSS Color Module Level 3 keywords, but case-sensitive.
e.g. blueviolet or red
Note: Hex format with alpha takes AARRGGBB or ARGB, not RRGGBBA or RGA.

s*/
const {app, BrowserWindow, BrowserView} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow()

    win.loadURL('https://www.google.com/')

    const view = new BrowserView()

    win.setBrowserView(view)
    view.setBounds({ x: 0, y: 0, width: 300, height: 300 })

    view.setBackgroundColor('blue')
    view.webContents.loadURL('https://www.google.com/')

    console.log(view.getBounds());          // { x: 0, y: 0, width: 300, height: 300 }
}

app.whenReady().then(createWindow)

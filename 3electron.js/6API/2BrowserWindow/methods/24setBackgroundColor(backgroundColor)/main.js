/*
backgroundColor string - Color in Hex, RGB, RGBA, HSL, HSLA or named CSS color format. The alpha channel is optional for the hex type.
Examples of valid backgroundColor values:

Hex
    #fff (shorthand RGB)
    #ffff (shorthand ARGB)
    #ffffff (RGB)
    #ffffffff (ARGB)
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
Sets the background color of the window. See Setting backgroundColor.

*/

const {app,BrowserWindow} = require('electron')

function createWindow() {
    const win1 = new BrowserWindow()
    win1.setBackgroundColor('blue')
}

app.whenReady().then(createWindow)
/*
scrollTop - how many pixels above the scroll bar
scrollLeft - how many pixels on left of the scroll bar
scrollHeight - (element_margin * 2 + element_border * 2 + element_padding * 2 + element_height)
scrollWidth - (element_margin * 2 + element_border * 2 + element_padding * 2 + element_width)
*/



function onScrollFunction(){
    const ele = document.getElementById('outer')
    const top = ele.scrollTop
    const left = ele.scrollLeft
    const height = ele.scrollHeight
    const width = ele.scrollWidth
    document.getElementById('p').innerHTML = `
    scrollTop: ${top.toFixed()}
    <br>
    scrollLeft: ${left.toFixed()}
    <br>
    scrollHeight: ${height.toFixed()}
    <br>
    scrollWidth: ${width.toFixed()}
    `;
}



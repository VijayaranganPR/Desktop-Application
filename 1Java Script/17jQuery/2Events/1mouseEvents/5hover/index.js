$(function(){
    $('button').hover(function(){
        const p = $('<p>mouse hover (enter or exit) the button</p>')
        $(this).after(p)
    })
})

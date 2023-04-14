$(function(){
    $('button').mouseleave(function(){
        const p = $('<p>mouse left the button</p>')
        $(this).after(p)
    })
})

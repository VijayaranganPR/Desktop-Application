$(function(){
    $('button').mouseenter(function(){
        const p = $('<p>mouse entered the button</p>')
        $(this).after(p)
    })
})

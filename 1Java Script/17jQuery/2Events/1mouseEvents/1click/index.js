$(function(){
    $('button').click(function(){
        const p = $('<p>button pressed</p>')
        $(this).after(p)
    })
})

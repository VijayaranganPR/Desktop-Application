$(function(){
    $('button').dblclick(function(){
        const p = $('<p>button double clicked</p>')
        $(this).after(p)
    })
})

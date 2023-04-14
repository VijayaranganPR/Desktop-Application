$(function(){

    // for tag
    console.log($('p'))     // jQuery.fn.init(3) [p.intro, p, p, prevObject: jQuery.fn.init(1)]

    // for class
    console.log($('.Chapter, .name'))   // jQuery.fn.init(2) [li.Chapter, li.Chapter.name, prevObject: jQuery.fn.init(1)]

    // for id
    console.log($('#one'))  // jQuery.fn.init [li#one]

    // '*' to select all element
    console.log($('*'))     // jQuery.fn.init(22) [html, head, meta, meta, meta, title, body, p.intro, p, ul, li, li, li, li, li, li, p, em, a, script, script, script, prevObject: jQuery.fn.init(1)]

    


    // element.className
    console.log($('li.Chapter'))     // jQuery.fn.init(2) [li.Chapter, li.Chapter.name, prevObject: jQuery.fn.init(1)]

    // element.idName
    console.log($('li#one'))     // jQuery.fn.init [li#one, prevObject: jQuery.fn.init(1)]

    


    // this
    $('#one').click(() =>{
        console.log($(this))        // jQuery.fn.init [document]
    })

    $('#one').click(function(){
    console.log($(this))            // jQuery.fn.init [li#one]
    })




    // element:first = Selects the first <li> element 
    console.log($('li:first'))      // jQuery.fn.init [li#one, prevObject: jQuery.fn.init(1)]

    // element:last = Selects the last <li> element
    console.log($('li:last'))      // jQuery.fn.init [li#one, prevObject: jQuery.fn.init(1)]

    

    // element element:first = Selects the first <li> element of the first <ul>
    console.log($('ul li:first'))       // jQuery.fn.init [li#one, prevObject: jQuery.fn.init(1)]

    // element element:last = Selects the last <li> element of the first <ul>
    console.log($('ul li:last'))       // jQuery.fn.init [li, prevObject: jQuery.fn.init(1)]



    // element element:first-child	Selects the first <li> element of every <ul>
    console.log($('ul li:first-child'))     // jQuery.fn.init(2) [li#one, li, prevObject: jQuery.fn.init(1)]

    // element element:last-child	Selects the last <li> element of every <ul>
    console.log($('ul li:last-child'))     // jQuery.fn.init(2) [li, li, prevObject: jQuery.fn.init(1)]



    // li:even      Selects all even <li> elements
    console.log($('li:even'))       // jQuery.fn.init(5) [li#one, li.Chapter.name, li, li, li, prevObject: jQuery.fn.init(1)]


    // li:odd       Selects all odd <li> elements
    console.log($('li:odd'))        // jQuery.fn.init(4) [li.Chapter, li, li, li, prevObject: jQuery.fn.init(1)]


    // '[attribute_name]'   	Selects all elements with an href attribute
    console.log($('[href]'))            // jQuery.fn.init(2) [a, a, prevObject: jQuery.fn.init(1)]


    // 	'a[]'Selects all <a> elements with a 'userAttribute' attribute value equal to "value1"
    console.log($('a[userAttribute = "value1" ]'))      // jQuery.fn.init [a, prevObject: jQuery.fn.init(1)]
})

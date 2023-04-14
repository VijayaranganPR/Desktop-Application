/*
According to the Document Object Model (DOM), every HTML tag is an object. 
Nested tags are “children” of the enclosing one. The text inside a tag is an object as well.

Everything in HTML, even comments, becomes a part of the DOM.

All these objects are accessible using JavaScript, and we can use them to modify the page.



There are only two top-level white space exclusions:

1) Spaces and newlines before <head> are ignored for historical reasons.
2) If we put something after </body>, then that is automatically moved inside the body, at the end, 
as the HTML spec requires that all content must be inside <body>. So there can’t be any spaces after </body>.

there are some rules:
if there is only one word as 'hello' then every other elements (html, head, body, p) will be added by the dom.


use this link to see live DOM
https://software.hixie.ch/utilities/js/live-dom-viewer/
*/


/*
DOM node classes
Different DOM nodes may have different properties. For instance, an element node corresponding to tag <a></a> has link-related properties, and the one corresponding to <input></input> has input-related properties and so on. Text nodes are not the same as element nodes. But there are also common properties and methods between all of them, because all classes of DOM nodes form a single hierarchy.

Each DOM node belongs to the corresponding built-in class.

The root of the hierarchy is EventTarget, that is inherited by Node, and other DOM nodes inherit from it.

Here’s the picture, explanations to follow:


# The classes are:

1) EventTarget – is the root “abstract” class for everything.

Objects of that class are never created. It serves as a base, so that all DOM nodes support so-called “events”, we’ll study them later.

2) Node – is also an “abstract” class, serving as a base for DOM nodes.

It provides the core tree functionality: parentNode, nextSibling, childNodes and so on (they are getters). Objects of Node class are never created. But there are other classes that inherit from it (and so inherit the Node functionality).

3) Document - for historical reasons often inherited by HTMLDocument (though the latest spec doesn’t dictate it) – is a document as a whole.

The document global object belongs exactly to this class. It serves as an entry point to the DOM.

4) CharacterData – an “abstract” class, inherited by:

    a) Text – the class corresponding to a text inside elements, e.g. Hello in <p>Hello</p>.
    b) Comment – the class for comments. They are not shown, but each comment becomes a member of DOM.
5) Element – is the base class for DOM elements.

It provides element-level navigation like nextElementSibling, children and searching methods like getElementsByTagName, querySelector.

A browser supports not only HTML, but also XML and SVG. So the Element class serves as a base for more specific classes: SVGElement, XMLElement (we don’t need them here) and HTMLElement.

6) HTMLElement - is the basic class for all HTML elements. We’ll work with it most of the time.

It is inherited by concrete HTML elements:

HTMLInputElement – the class for input elements.
HTMLBodyElement – the class for body elements.
HTMLAnchorElement – the class for "a" elements.
…and so on.
There are many other tags with their own classes that may have specific properties and methods, while some elements, such as "span", "section", "article" do not have any specific properties, so they are instances of HTMLElement class.

So, the full set of properties and methods of a given node comes as the result of the chain of inheritance.

For example, let’s consider the DOM object for an input element. It belongs to HTMLInputElement class.

It gets properties and methods as a superposition of (listed in inheritance order):

HTMLInputElement – this class provides input-specific properties,
HTMLElement – it provides common HTML element methods (and getters/setters),
Element – provides generic element methods,
Node – provides common DOM node properties,
EventTarget – gives the support for events (to be covered),
…and finally it inherits from Object, so “plain object” methods like hasOwnProperty are also available.

*/

// To see the DOM node class name, we can recall that an object usually has the constructor property. 
// It references the class constructor, and constructor.name is its name:

console.log(document.body.constructor.name)     // HTMLBodyElement

// or by using .toString()

console.log(document.body.toString())           // [object HTMLBodyElement]

// we also can use instanceof

console.log( document.body instanceof HTMLBodyElement ); // true
console.log( document.body instanceof HTMLElement ); // true
console.log( document.body instanceof Element ); // true
console.log( document.body instanceof Node ); // true
console.log( document.body instanceof EventTarget ); // true


// dir
console.dir(document.body)      // shows the element as a DOM object
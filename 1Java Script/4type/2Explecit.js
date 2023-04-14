// See the table here
// https://www.w3schools.com/js/js_type_conversion.asp

/*
for number
Number()
.parseInt(redix)
.parseFloat(redix)

for string
String()
.toString()

for boolean
Boolean()
*/





// false
a = false
console.log(`false`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))
/*
false
0
false
false
*/



console.log(``);
// true
a = true
console.log(`true`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))
/*
true
1
true
true
*/



console.log(``);
// 0
a = 0
console.log(`0`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
0
0
0
false
*/



console.log(``);
// 1
a = 1
console.log(`1`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
1
1
1
true
*/



console.log(``);
// '0'
a = '0'
console.log(`"0"`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
"0"
0
0
true
*/



console.log(``);
// '000'
a = '000'
console.log(`"000"`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))
/*
"000"
0
000
true
*/


console.log(``);
// '1'
a = '1'
console.log(`1`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
1
1
1
true
*/



console.log(``);
// NaN
a = NaN
console.log(`NaN`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
NaN
NaN
NaN
false
*/



console.log(``);
// Infinity
a = Infinity
console.log(`Infinity`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
Infinity
Infinity
Infinity
true
*/



console.log(``);
// -Infinity
a = -Infinity
console.log(`-Infinity`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))



/*
-Infinity
-Infinity
-Infinity
true
*/



console.log(``);
// ''
a = ''
console.log(`''`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
''
0

false
*/



console.log(``);
// '20'
a = '20'
console.log(`'20'`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
'20'
20
20
true
*/



console.log(``);
// 'twenty'
a = 'twenty'
console.log(`'twenty'`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
'twenty'
NaN
twenty
true
*/



console.log(``);
// []
a = []
console.log(`[]`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
[]
0

true
*/



console.log(``);
// [20]
a = [20]
console.log(`[20]`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
[20]
20
20
true
*/



console.log(``);
// [10,20]
a = [10,20]
console.log(`[10,20]`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
[10,20]
NaN
10,20
true
*/



console.log(``);
// ["twenty"]
a = ["twenty"]
console.log(`["twenty"]`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
["twenty"]
NaN
twenty
true
*/



console.log(``);
// ["ten","twenty"]
a = ["ten","twenty"]
console.log(`["ten","twenty"]`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
["ten","twenty"]
NaN
ten,twenty
true
*/



console.log(``);
// function(){}
a = function(){}
console.log(`function(){}`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
function(){}
NaN
function(){}
true
*/



console.log(``);
// {}
a = {}
console.log(`{}`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
{}
NaN
[object Object]
true
*/



console.log(``);
// null
a = null
console.log(`null`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
null
0
null
false
*/



console.log(``);
// undefined
a = undefined
console.log(`undefined`);
console.log(Number(a))
console.log(String(a))
console.log(Boolean(a))

/*
undefined
NaN
undefined
false
*/
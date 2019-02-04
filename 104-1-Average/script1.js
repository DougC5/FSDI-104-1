//test

//let message;  //const   //var
//message = 'WAKAWAKAWAKA'
//alert(message)
//let n = 123;
//n = 12.345;
//alert(n);

//var message;


/*
//A variable in JavaScript can contain any data

// no error
let message = "hello";
message = 123456;
*/
/*
//number

let n = 123;
n = 12.345;
alert(n);

alert( "not a number" / 2 ); // NaN, such division is erroneous
*/
/*
//string

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed ${str}`;
alert(phrase);
*/

//let name = "John";
//
//// embed a variable
//alert( `Hello, ${name}!` ); // Hello, John!
//
//// embed an expression
//alert( `the result is ${1 + 2}` ); // the result is 3
//
////boolean
//let nameFieldChecked = true; // yes, name field is checked
//let ageFieldChecked = false; // no, age field is not checked
//
//let isGreater = 4 > 1;
//
//alert( isGreater ); // true (the comparison result is "yes")
//
//
////Create an Array

let numbers = [1, 2, 5, 6];
let average = 0;
let i = 0;

//alert(fruits.length);
// 2


////Access (index into) an Array item
//
//var first = fruits[0];
//// Apple
//
//var last = fruits[fruits.length - 1];
//// Banana


//Loop over an Array

numbers.forEach(function (item, index, array) {
    i = i + 1;
    average = average + (item);
    alert("Number " + i + " is: " + (item) + " \nAnd the total so far is: " + average);
    return average;

});

alert("Total outside the function is: " + average);

alert("The average is: " + average / numbers.length);

// Apple 0
// Banana 1


//Add to the end of an Array
//
//var newLength = fruits.push('Orange');
//// ["Apple", "Banana", "Orange"]
//
//
//Remove from the end of an Array
//
//var last = fruits.pop(); // remove Orange (from the end)
//// ["Apple", "Banana"];
//
//
//Remove from the front of an Array
//
//var first = fruits.shift(); // remove Apple from the front
//// ["Banana"];
//
//
//Add to the front of an Array
//
//var newLength = fruits.unshift('Strawberry') // add to the front
//// ["Strawberry", "Banana"];
//
//
//Find the index of an item in the Array
//
//fruits.push('Mango');
//// ["Strawberry", "Banana", "Mango"]
//
//var pos = fruits.indexOf('Banana');
//// 1
//
//
//Remove an item by index position
//
//var removedItem = fruits.splice(pos, 1); // this is how to remove an item
//                                        
//// ["Strawberry", "Mango"]
//
//
//Remove items from an index position
//
//var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
//alert(vegetables); 
//// ["Cabbage", "Turnip", "Radish", "Carrot"]
//
//var pos = 1, n = 2;
//
//var removedItems = vegetables.splice(pos, n); 
//// this is how to remove items, n defines the number of items to be removed,
//// from that position(pos) onward to the end of array.
//
//alert(vegetables); 
//// ["Cabbage", "Carrot"] (the original array is changed)
//
//alert(removedItems); 
//// ["Turnip", "Radish"]
//
//
////Copy an Array
//
//var shallowCopy = fruits.slice(); // this is how to make a copy
//// ["Strawberry", "Mango"]
//
//
//
//
//
//
//*/



/*
Types of variables

number: for numbers of any kind: integer or floating-point.
string: for strings. A string may have one or more characters, there’s no separate single-character type.
boolean: for true/false.
null: for unknown values – a standalone type that has a single value null.
undefined: for unassigned values – a standalone type that has a single value undefined.
object: for more complex data structures.
symbol: for unique identifiers.

*/

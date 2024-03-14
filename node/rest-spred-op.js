// REST Operator: Collects all remaining elements into an array.
// Spread Operator: Expands iterables into individual elements.


//=================REST Operator START ================

//The REST operator (also known as the rest parameter syntax) allows us to represent an indefinite number of arguments as an array
function addNumbers(a, b, c, ...other) {
    // console.log(other[0]);
    console.log(other);
    return a + b + c;
}

const res = addNumbers(2, 3, 2, 5, 6, 9, 4, 6);
console.log(res);// 7

//=================REST Operator END ================





//=================SPREAD Operator Start ================

//The Spread operator is used to expand or "spread" iterable elements such as arrays or strings into individual elements. This is useful in various scenarios, including array literals, function calls, and object literals.

const names = ['satish', 'anil', 'sopa'];

function getNames(name1, name2, name3) {
    console.log(name1, name2, name3);
}

//getNames(names[0], names[1], names[2]); //tradional approach
getNames(...names);

//=================SPREAD Operator END ================
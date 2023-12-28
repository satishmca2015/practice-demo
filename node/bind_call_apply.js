/* 
JavaScript provides three important methods to set the this context of a function: bind, call, and apply. These methods are essential for functional programming in JavaScript, especially when dealing with issues related to the this keyword.
*/

/* 1. bind() Method
The bind() method creates a new function that, when called, has its this keyword set to the provided value. It allows you to permanently bind a function to a particular this context. */


const person1 = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const greetAlice = person1.greet.bind(person1);
greetAlice(); // Output: Hello, my name is Alice
/*
In this example, greetAlice is a new function bound to the person object. When greetAlice is called, it uses person as its this context. 
 */


/*
2. call() Method
The call() method calls a function with a given this value and arguments provided individually.
*/
function greet(greeting, signOff) {
    console.log(`${greeting}, my name is ${this.name}. ${signOff}`);
}

const person2 = {
    name: 'Bob'
};

greet.call(person2, 'Hello', 'Have a nice day!'); 
// Output: Hello, my name is Bob. Have a nice day!
/*
In this case, greet is called with person as its this context, and the rest of the arguments are passed individually. 
 */


/* 
3. apply() Method
The apply() method is similar to call(), but the arguments are passed as an array.
*/

function greet(greeting, signOff) {
    console.log(`${greeting}, my name is ${this.name}. ${signOff}`);
}

const person3 = {
    name: 'Charlie'
};

greet.apply(person3, ['Hi', 'See you later!']);
// Output: Hi, my name is Charlie. See you later!



/* 

bind() creates a new function with a set this value for later execution.

call() invokes the function immediately with a given this value and arguments passed individually.

apply() is similar to call(), but arguments are passed as an array.

These methods are particularly useful for controlling the this context in asynchronous programming and when working with callback functions.

*/
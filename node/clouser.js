/* A closure is a feature of JavaScript that allows inner functions to access their outer scope. 

Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created. 

A block is also treated as a scope since ES6. Since JavaScript is event-driven so closures are useful as it helps to maintain the state between events */

var x = 10;
function fun() {
    let a = 1;
    function fun2() {
        console.log(x);
        console.log(a);
    }
    return fun2;

}

let result = fun();
result();
// console.log(x);
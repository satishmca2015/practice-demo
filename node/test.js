/* var a = function fun() {
    console.log("Inside FUN");
}

// a();


function fun1(callback) {
    console.log('inside main');
    callback();
}


function test() {
    console.log('inside callback test');
} */

// fun1(test);
//console.log(x);



//promises example
 let promise = new Promise(function(resolve, reject) {
    let a = 10;
    let b = 50;
    if (a === b)
        resolve('a is  equal to b');
    else
        reject('a is not equal to b');
});


promise.then(function(data) {
    console.log(data);
}).catch(function(error) {
    console.log(error);
}); 



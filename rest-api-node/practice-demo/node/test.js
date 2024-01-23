

/* 
function test()
{
    console.log(typeof(this));
}
test(); */

/* 
let x = null;
console.log(typeof(x)); */


//----------------Array Destruting
[,,mname] = ['satish','amol',null];

// let a = ;
// console.log(typeof(mname)==='object');
//console.log(typeof(mname)=== 'object');
/* console.log(lname);
console.log(mname); */



//revrse number
/*let number = 12;

// Initializing the result variable 
let result = 0;

while(number>0){
    // Getting the rightmost digit
    rightmost = number%10;
    
    result = result*10 + rightmost;
    
    // Removing the rightmost digit from the number
    number = Math.floor(number/10);
}
console.log("Reversed number is : " + result)


*/


let n = 1234;
let str = n.toString();
// console.log(str);
let temp='';
for(i=str.length-1;  i >= 0; i--){
  temp = temp + str[i];
  // console.log(temp);
}
console.log(temp);



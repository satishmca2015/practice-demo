//map filter and reduce is example of  higer order function

// Higer order function is function it take another function as input (parameter) and retrun it as anoter function itself (output) is known as higher order function


    // and function is pass as input is called as callback function eg:area and diameter



const redis = [2,3,5];


function area(para){
    return Math.PI* para * para;
}

function diameter(para){
    return para*2;
}

output = [];
Array.prototype.calculate = function(logic){
    for(i=0;i<this.length;i++){
        output.push(logic(redis[i]));
    }

    return output;
}

/* console.log(calculate(redis,area));
console.log(calculate(redis,diameter)); */

console.log(redis.calculate(diameter));
// console.log(calculate(redis,diameter));




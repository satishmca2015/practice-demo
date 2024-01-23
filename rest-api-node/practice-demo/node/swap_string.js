let a= 'satish';
let b= 'amol';
a = a+b;
// console.log(a);//satishamol
// console.log(a.length);//10
// console.log(b.length);//6

b = a.substring(0,a.length-b.length);
a = a.substring(b.length);
// console.log(a,b);


//No of element occurnace in array
let data = [10,20,10,20,30,40];

let temp = {};
for(i=0;i<data.length;i++){

    if(temp[data[i]]){
        temp[data[i]] = temp[data[i]] + 1;
        //console.log('okkk')
    }else{
        temp[data[i]] = 1;
        // console.log('1')
    }
    // console.log(data[i]);

}
console.log(temp);






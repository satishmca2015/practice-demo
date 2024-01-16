/* OBJECT CLONE */

//when we have object this will copy memory reference not value

/* let obj = {
    name : "Satish"
}
let newObj = obj;
newObj.name = 'Rahul';
console.log(obj); */


// when we have variable this will copy value not reference
/* let x = 10;
let y = x;
y = 100;
console.log(y); */

/* when we have object this will copy memory reference not value, so in this we can modify object. to avoid this we have shallow copy and deep copy */


//Shallow Copy
//in shallow copy it will not copy memory location it will copy value

/* let obj = {
    name : "satish"
};
// let newObj= Object.assign({},obj);//this is first approach
let newObj= {...obj};//this is second approach to make shallow copy
newObj.name = 'borkar';
console.log(obj);
console.log(newObj); */


/* in shallow copy it will consider only first level of object and it will ALLOW to modify nested object to avoid this we have deep copy */
// following is the problem statement

/* let obj = {
    name : 'satish',
    address:{
        city:'pune',
        pincode:411036
    }
};

let newObj= {...obj}
newObj.address.city='mumbai'; // it will alllow to change the nested element to avoid this issue  we have deep copy
console.log(obj); */



// following is the example of deep copy
//In deep copy it will not allow to modify nested Object 
let obj = {
    name:"satish",
    address:{
        city:'pune',
        pincode:'42324'
    }

};

let newObj = JSON.parse(JSON.stringify(obj));
obj.address.city="mumbai";
console.log(obj);//{ name: 'satish', address: { city: 'mumbai', pincode: '42324' } }
console.log(newObj);//{ name: 'satish', address: { city: 'pune', pincode: '42324' } }








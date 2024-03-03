//check below link for call apply bind in js
/* 
https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/
*/

/* 
Call:
Call is a function that helps you change the context of the invoking function.
It helps you replace the value of this inside a function with whatever value you want
e.g: func.call(thisObj, args1, args2, ...)
------------------------
Apply:
Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.
e.g: func.apply(thisObj, argumentsArray);
--------------------
Bind :
Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.
*/

//Call function

/* function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.call(this, "convertible", "petrol");
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.call(this, "convertible", "diesel");
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000); */

//Apply function
function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);

//Bind
// React Class base component is best example of Bind
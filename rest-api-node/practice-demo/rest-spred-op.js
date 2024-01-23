//=================REST Operator START ================
function addNumbers(a, b, c, ...other) {
    // console.log(other[0]);
    // console.log(other);
    return a + b + c;
}

const res = addNumbers(2, 3, 2, 5, 6, 9, 4, 6);
console.log(res);

//=================REST Operator END ================





//=================SPREAD Operator Start ================


const names = ['satish', 'anil', 'sopa'];

function getNames(name1, name2, name3) {
    //console.log(name1, name2, name3);
}

//getNames(names[0], names[1], names[2]); //tradional approach
getNames(...names);

//=================SPREAD Operator END ================
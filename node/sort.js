let values = [20, 40, 100, 90];

//values = values.sort();
values.sort();

let length = values.length;
for (let index = length - 1, i = 0; i < length; i++, index--) {
    // console.log(values[index]);

}



function reverseArray(arr) {
    // let newArr = [];
    for (j = arr.length - 1, i = 0; i < arr.length; i++, j--) {
        // newArr[i] = arr[j];
        console.log(arr[j]);
    }
    // return newArr;
}
reverseArray(values);
// console.log();
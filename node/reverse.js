/* 
    reverse string
*/
// function strRevese(str) {
//   let strnew = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     // console.log(str[i]);
//     strnew += str[i];
//   }
//   return strnew;
// }
// const str = "satish";
// let result = strRevese(str);
// console.log(result);

//=============================
/* Reverse Array  */

const data = [10, 20, 30, 40];

const rev = (arr) => {
  for (i = arr.length - 1; i >= 0; i--) {
    // console.log(arr[i]);
  }
};
rev(data);


//--------------------------------

const a = [10, 20];
const b = [30, 40];
let newarr = [...a, ...b];
newarr.map((item, key) => {
  console.log(item);
});

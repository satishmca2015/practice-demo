const arr = [10, 20, 30];

//MAP function
/* const output = arr.map((num)=>{
  return num += 10;// add 10 to each element in array and return
})
console.log(arr); // [10, 20, 30]
console.log(output); // [20, 30, 40]
 */ 




//-------------------------------------------
/* const resultFilter = arr.filter((item)=>{
    return item > 20;
});
console.log(resultFilter); // [30] */

//---------------------------------------------

const resultReduce = arr.reduce((acc, current) => {
  // console.log(`acc : ${acc} current : ${current}`);
  return acc = acc + current;
}, 10);
console.log(resultReduce); // 70

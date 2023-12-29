const arr = [10, 20, 30];

//MAP function

/* 
arr.map((item)=>{
    console.log(item);
}); */



//-------------------------------------------
/* const resultFilter = arr.filter((item)=>{
    return item > 20;
});
console.log(resultFilter); */

//---------------------------------------------

const resultReduce = arr.reduce((acc, current) => {
  // console.log(`acc : ${acc} current : ${current}`);
  return acc = acc + current;
}, 10);
console.log(resultReduce);

/* 
get only duplicates from array */


// get only duplicates from array
/* let arr1 = [10,20,30,50,70];
let arr2 = [10,20,30];
let arr3 = [...arr1,...arr2];

let arra4 = arr3.filter(function(element,key){
        return arr3.indexOf(element) !== key;
        console.log(element+"="+arr3.indexOf(element)+"="+key);
});

console.log(arra4); 
console.log(arra4);  */


// find longgest string from array 
 let arr = ['fan','table', 'computerrreryrty','booksggg','table','hello I am','table'];

/*let long_str = '';
for(i=0;i<arr.length;i++){
        if(arr[i].length > long_str.length){
            long_str = arr[i];
        }
}

console.log(long_str);
 */



/* 
const getLongestText = arr.reduce(function(previesVal, currantVal){
    return  (currantVal.length > previesVal.length ? currantVal : previesVal)
 });

console.log(getLongestText); */



//Count duplicate 
function countDuplicate(data) {
  const temp = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i]]) {
      temp[data[i]] = temp[data[i]] + 1;
    } else {
      temp[data[i]] = 1;
    }
  }
  console.log(temp);
}
let data = [10, 20, 10, 20, 30, 40];
countDuplicate(data);



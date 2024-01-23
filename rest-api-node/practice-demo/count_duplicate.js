
// get only duplicates from array


let arr1 = [10,20,30,50,70];
let arr2 = [10,20,30];
let arr3 = [...arr1,...arr2];
console.log(arr3);

let arra4 = arr3.filter(function(element,key){
        return arr3.indexOf(element) !== key;
        // console.log(arr3.indexOf(element),key);
});

console.log(arra4);


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



/* const counts = {};
const sampleArray = ['a', 'a', 'b', 'c','a'];
sampleArray.forEach(function (x) 
{ 
        if(counts[x]){
                counts[x] = counts[x]+1;    
        }else{
                counts[x] = 1;    
        }
});
console.log(counts); */


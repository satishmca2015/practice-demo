function sumArra(arrval)
{
    let newArr = [];
    for(i=0;i<=arrval.length;i++){
        let tempSum = 0;
        for(j=0; j < arrval.length; j++){
            tempSum = tempSum + arrval[j][i];
        }
        newArr.push(tempSum);  
    }
 
    return newArr;
}

let data = [[1, 2, 3, 4, 5], [6, 2, 7, 8, 8],[6, 2, 7, 8, 8],[6, 2, 7, 8, 8]]
let sum = sumArra(data);
console.log(sum);// output : [ 19, 8, 24, 28, 29 ]
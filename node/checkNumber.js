function returnNumberFromStr(data) {
  let numStr = "";
  data = data.split("");
  /* for (i = 0; i < data.length; i++) {
    if (parseInt(data[i]) >= 0) {
      numStr += data[i];
    }
  } */
 
  /*  
  data.forEach((str) => {
    if (parseInt(str) >= 0) {
      numStr = numStr + str;
    }
  }); */

  data.forEach((str) => {
    if (!isNaN(str)) {
      numStr = numStr + str;
    }
  });
  

  return numStr;
}

let data = "satis45h23101990";
let newStr = returnNumberFromStr(data);
console.log(`numbers in string are : ${newStr}`);

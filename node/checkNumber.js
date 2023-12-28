let data = "satish23101990";
let newStr = returnNumberFromStr(data);

console.log(`numbers in string are : ${newStr}`);

function returnNumberFromStr() {
  let numStr = "";
  for (i = 0; i < data.length; i++) {
    if (parseInt(data[i]) >= 0) {
      numStr += data[i];
    }
  }
  return numStr;
}

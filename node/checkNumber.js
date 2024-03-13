function returnNumberFromStr(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(data[i])) {
      result.push(data[i]);
    }
  }
  return result;
}

let data = "satis45h23101990";
let result = returnNumberFromStr(data);
console.log(result);

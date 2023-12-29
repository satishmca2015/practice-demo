// Define a function named revWords that takes a string as an argument
function revWords(str) {
  // Split the input string into an array of words
  let arr = str.split(" ");

  // Initialize an empty array to hold the reversed words
  const arrTemp = [];

  // Loop through each word in the array
  for (let i = 0; i < arr.length; i++) {
    // Initialize an empty string to build the reversed word
    let strtemp = "";

    // Loop backwards through the characters of the current word
    for (let j = arr[i].length - 1; j >= 0; j--) {
      // Append each character to strtemp, effectively reversing the word
      strtemp = strtemp + arr[i][j];
    }

    // Add the reversed word to the arrTemp array
    arrTemp.push(strtemp);
  }

  // Join the array of reversed words back into a single string with spaces
  return arrTemp.join(" ");
}

// Test the function with a sample string
let rs = revWords("my name is satish");

// Output the result to the console
console.log(rs); // Output: ym eman si hsitas

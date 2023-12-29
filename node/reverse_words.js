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






//optimise way
function revWords(str) {
  // Split the input string into an array of words and map each word to its reversed form
  const reversedWords = str.split(" ").map(word => {
    // Use split('') to convert the word to an array of characters,
    // then use reverse() and join('') to reverse the characters and form the reversed word
    return word.split('').reverse().join('');
  });

  // Join the array of reversed words back into a single string with spaces
  return reversedWords.join(" ");
}

// Test the function with a sample string
// let result = revWords("my name is satish");

// Output the result to the console
// console.log(result); // Output: ym eman si hsitas


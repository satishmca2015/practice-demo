/* var a = 10;

for(let i=0;i<10; i++){
    var a = a+i;
    console.log(a,i);
}
console.log(a);
 */

// Sample array of numbers
let numbers = [5, 2, 9, 1, 5];

// Perform a basic sorting using a simple for loop
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    // Compare adjacent elements and swap them if they are in the wrong order
    if (numbers[j] > numbers[j + 1]) {
      // Swap numbers[j] and numbers[j+1]
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

// Output the sorted array
console.log(numbers); // Output: [1, 2, 5, 5, 9]

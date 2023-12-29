

function sortArray(numArray) {
    // Outer loop goes through each element of the array
    for (let i = 0; i < numArray.length - 1; i++) {
      // Inner loop to compare array elements for sorting
      for (let j = 0; j < numArray.length - i - 1; j++) {
        // Compare adjacent elements and swap them if they are in the wrong order
        if (numArray[j] > numArray[j + 1]) {
          // Temporary variable to hold the current element
          let temp = numArray[j];
          // Swapping elements
          numArray[j] = numArray[j + 1];
          numArray[j + 1] = temp;
        }
      }
    }
    // Return the sorted array
    return numArray;
  }
  
  // Test array of numbers
  let number = [5, 2, 1, 4, 30, 40, 10];
  // Call the function and store the result
  let result = sortArray(number);
  // Output the sorted array
  console.log("Sorted array in ascending order:", result);
  
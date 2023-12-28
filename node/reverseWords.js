function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

const myString = "Hello World Satish";
const reversed = reverseWords(myString);
console.log(reversed); // Outputs: "World Hello"

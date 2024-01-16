function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

const myString = "Hello World";
const reversed = reverseWords(myString);
console.log(reversed); // Outputs: "World Hello"

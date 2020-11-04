// String Reversal
// Given a string of characters as input, write a function that returns it with the characters reversed.

// STEPS
// 1. convert string to character array
// 2. apply the reverse method 
// 3. use join method to combine the characters back into a string again

// SOLUTION 1
const reverse1 = str => {
    let arr = [...str]  // let arr = str.split('');
    arr.reverse()
    return arr.join('')
}

// SOLUTION 2
const reverse2 = str =>
    str
        .split("")
        .reverse()
        .join("");

// SOLUTION 3
const reverse3 = str => {
    let result = "";
    for (let character of str) result = character + result;
    return result;
};

// SOLUTION 4
const reverse4 = str =>
    str.split("").reduce((result, character) => character + result);


console.log(reverse1("Paula!"))
console.log(reverse2("Paula!"))
console.log(reverse3("Paula!"))
console.log(reverse4("Paula!"))


/* 4 Ways to Convert String to Character Array in JavaScript
const string = 'word';

Option 1
string.split('');

Option 2
[...string];

Option 3
Array.from(string);

Option 4
Object.assign([], string);

// Result:
// ['w', 'o', 'r', 'd'] */
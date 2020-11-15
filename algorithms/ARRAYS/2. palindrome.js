// Palindrome
// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.


// STEPS
// 1. create new variable with cleaned string, use regEX
// 2. compare string with reversed string
// 3. if strings are equal return true, if no return false


// SOLUTION 1
const isPalindrome = string => {
    const cleaned = string.replace(/\W/g, "").toLowerCase(); // match any non word character 

    return (
        cleaned ===
        cleaned
            .split("")
            .reverse()
            .join("")
    );
};

// SOLUTION 2
const isPalindrome2  = string => {
    const validCharacters = "abcdefghijklmnopqrstuvwxyz".split(""); // need to declare validated character to skip special signs
    const stringCharacters = string
        .toLowerCase()
        .split("")
        .reduce(
            (characters, character) =>
                validCharacters.indexOf(character) > -1
                    ? characters.concat(character)
                    : characters,
            []
        );
    return stringCharacters.join("") === stringCharacters.reverse().join("");
};

console.log(isPalindrome("Cigar? Toss it in a can. It is so tragic"))
console.log(isPalindrome("Buuuuuuuuu"))

console.log(isPalindrome2("Cigar? Toss it in a can. It is so tragic"))
console.log(isPalindrome2("Buuuuuuuuu"))
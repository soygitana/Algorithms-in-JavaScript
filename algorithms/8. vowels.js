// Vowels
// Given a string of words or phrases, count the number of vowels.

// STEPS
// 1. create array which contain vowels
// 2. create variable result
// 3. iterate through string and check if element is present in array of vowels
// 4. if yes result++


const vowels = str => {

    let newStr = str.toLowerCase()
    const vowels = ["a", "e", "i", "o", "u"]
    let result = 0

    for (let i in newStr) {
        if (vowels.includes(newStr[i])) {
            result++
        }

    }
    return result
}

console.log(vowels("Paula"))
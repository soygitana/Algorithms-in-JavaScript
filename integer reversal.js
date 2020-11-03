// Integer Reversal
// Given an integer, reverse the order of the digits.

// STEPS
// 1. convert int into string
// 2. convert string into arr
// 3. reverse and join arr into string
// 4. convert new string into number


// SOLUTION 1
const reverse = int => {

    let str = int.toString()
    let arr = [...str]
    let newStr = arr.reverse().join('')

    return Number(newStr)
}

// SOLUTION 2
const reverse2 = integer =>
    parseInt(
        integer
            .toString()
            .split("")
            .reverse()
            .join("")
    ) * Math.sign(integer);


console.log(reverse(1234567))
console.log(reverse2(1234567))
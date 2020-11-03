// Fizz Buzz
// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, 
// print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// STEPS
// 1. split number into int in array
// 2. iterate array 
// 3. if int % 2 == 0 print Fizz
// 4. if int % 3 == 0 print Buzz
// 5. if int % 2 == 0 and int % 3 print Fizz Buzz

// SOLUTION 1

const FizzBuzz = number => {

    let str = number.toString()
    let arr = [...str]

    var list = []

    for (let i in arr) {
        let int = arr[i]

        if (int % 3 == 0 && int % 2 == 0) {
            list.push(`${int} Fizz Buzz`)
        }

        else if (int % 2 == 0) {
            list.push(`${int} Fizz`)
        }

        else if (int % 3 == 0) {
            list.push(`${int} Buzz`)
        }
    }

    return list
}

console.log(FizzBuzz(123456789))
// Find the most repeated element in an array of integers. What is the time complexity of this method?
// (A variation of this exercise is finding the most repeated word in a sentence. The algorithm is the same. Here we use an array of numbers for simplicity.) 


// create storage = {}
// loop through an array and store key:value pairs in storage
// create max = 0 
// loop through storage and compare to max value
// return max

const mostRepeated = arr => {

    let storage = {}
    let maxCount = 0
    let maxChar = 0
    
    for (let el of arr) {
    storage[el] = storage[el] ? storage[el] + 1 : 1;
    }
    
    for (let el in storage) {
    if (storage[el] > maxCount) {
    maxCount = storage[el]  
    maxChar = el
    } 
    }
    return maxChar
    }
    
    
    console.log(mostRepeated(arr))
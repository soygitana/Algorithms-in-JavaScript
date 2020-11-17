// Unique pairs
// Given an array of integers, count the number of unique pairs of integers that have difference k. 

// Input: [1, 7, 5, 9, 2, 12, 3] K=2 
// Output: 4 


// el - el2 = k  3-1=2 
// create counter, storage
// go through an array and store all pairs difference as a value 
// go through obj and check pairs that difference = k, store it in array
// counter++
// return counter


let arr = [1, 7, 5, 9, 2, 12, 3]

const uniquePairs = arr => {

    let counter = 0
    let k = 2
    let storage = {}

    for (let i in arr) {
        for (let j in arr) {
            if (i != j) {
                storage.difference = arr[i] - arr[j]

                for (let el in storage) {
                    if (storage[el] == k) {
                        console.log(Object.values(storage))
                        counter++
                    }
                }
            }
        }
    }

    return counter
}


console.log(uniquePairs(arr))
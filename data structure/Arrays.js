let arr = [1,2,3,4,5]


// CREATING NEW ARRAY

let newArr1 = []
let newArr2 = new Array(1,2,3) 
let newArr3 = new Array(5)      // create array of # null

// COPY ARRAY 

let copiedArr1 = [...arr]
let copiedArr2 = Array.from(arr)
let copiedArr3 = arr.slice();

let copiedArr4 = arr // in this case methodes performed on copiedArr4 will affect old arr 


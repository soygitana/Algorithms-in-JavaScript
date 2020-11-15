// Reverse array
// Given an array of items, reverse the order.

// 1. we have to change arr[0] with arr[arr.length -1]
// 2. we can loop through one half of the array and swap the beginning with the end. 
// 3. we will need to temporarily store one of the items



const reverseArray = array => {
    for (let i = 0; i < array.length / 2; i++) {
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
};

console.log(reverseArray([1, 2, 3, 4]))



// 1st iteration

// [1,2,3,4]

// temp = arr[0] // 1
// arr[0] = arr[arr.length - 1 - i] // 4-0 = 4
// arr[arr.length - 1 - i] = arr[0] // 1

// 2nd iteration 

// [4,2,3,1] 

// temp = arr[1] // 2
// arr[1] = arr[arr.length - 1 - i] //  last index - 1 = 3
// arr[2] = 2

// [4,3,2,1]
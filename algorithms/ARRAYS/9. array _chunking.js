// Array Chunking
// Given an array and a size, split the array items into a list of arrays of the given size.

// 1. create newArr using destructive splice method 
// 2. newArr will include # char from index 0 
// 3. arr is destructed and include rest of char  
// 4. if arr is empty return newArr is is not resturn [newArr, arr]

const chunk = (arr, num) => {

    let newArr = arr.splice(0, num)                 // splice is destructing method which affects given arr, newArr = [1,2] arr =[3,4]
    
    return (arr.length == 0) ? newArr : [newArr, arr]
     
    }
    
    console.log(chunk([1, 2, 3, 4], 2))
    console.log(chunk([1, 2, 3, 4], 3))
    console.log(chunk([1, 2, 3, 4], 5))
    

// SOULTION WITHOUT DESTROYING GIVEN ARRAY    
// const chunk = (arr, num) => {

//     let newArr = [...arr]    // coping an array
      
//     let firstArr = newArr.splice(0, num)
//     let secondArr = arr.splice(firstArr.length)
    
//     return secondArr.length == 0 ? firstArr : [firstArr, secondArr]
     
//     }
    
//     console.log(chunk([1, 2, 3, 4], 2))
//     console.log(chunk([1, 2, 3, 4], 3))
//     console.log(chunk([1, 2, 3, 4], 5))
    
// Two sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// Input: [2, 7, 11, 15] - target = 9 
// Output: [0, 1] (because 2 + 7 = 9)



let arr = [4, 4, 3, 5]



const removeDuplicates = (arr, obj) => {

        for(let i =0; i < arr.length; i++) {

          if(arr[i].el1 == obj.el1 && arr[i].el2 == obj.el2) return
          else if(arr[i].el1 == obj.el2 && arr[i].el2 == obj.el1) return
          
        }
        arr.push(obj);
    }

const uniquePairs = arr => {

    let target = 8
    let storage = {}
    let result = []

    for (let i in arr) {
        for (let j in arr) {
             if(arr[i] + arr[j] == target && i !=j) {
                 let storage = {}
                storage.el1 = Number(i);
                storage.el2 = Number(j);
               console.log(storage)
               removeDuplicates(result, storage)
            }
        }
    }
return result
}


console.log(uniquePairs(arr))
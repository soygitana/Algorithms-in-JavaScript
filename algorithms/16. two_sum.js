// Two Sum
// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

const twoSum = (arr, sum) => {
    let result = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result;
}



console.log(twoSum([1, 2, 2, 3, 4], 4)); // [2,2] [1,3]
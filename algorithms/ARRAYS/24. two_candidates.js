// Has an array two candidates?
// Problem: find pair in the arr which after adding is equal to sum

// 1. Sort the array in non-decreasing order.
// 2. Initialize two index variables: leftmost and rightmost 
// 3. Loop while leftmost < rightmost
// 4. If (arr[leftmost] + arr[rightmost] == sum) then return result 
// 5. Else (arr[leftmost] + arr[rightmost] < sum) then leftmost++
// 6. Else rightmost–-
// 7. No pair? return `there is no pair` */


const twoCandidates = (arr, sum) => {

    let sortedArr = arr.sort(function (a, b) {
        return a - b;
    })

    let result = 0

    let indexMin = 0
    let indexMax = sortedArr.length - 1

    while (indexMin < indexMax) {

        if (sortedArr[indexMin] + sortedArr[indexMax] == sum) {
            result = [sortedArr[indexMin], sortedArr[indexMax]]
            return result
        }

        else if ((sortedArr[indexMin] + sortedArr[indexMax]) < sum) {
            indexMin++
        }
        else {
            indexMax--
        }

    }

    return `there are no candidates`

}

console.log(twoCandidates([1, 2, 4, 5, 4], 8))
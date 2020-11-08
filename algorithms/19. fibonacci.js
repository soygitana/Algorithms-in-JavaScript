// Fibonacci
// Implement a function that returns the fibonacci number at a given index.
// fibonacci number is the sum of the previous two

function fibonacci(idx) {
    let el1 = 0;
    let el2 = 1;
    let arr = [el1, el2];

    for (let i = el2; i < idx; i++) { 
        el2 += el1; 
        el1 = el2 - el1;
      console.log(arr)
        arr.push(el2); 2
    }
    return arr[idx];
};



console.log(fibonacci(1), 1);
console.log(fibonacci(2), 1);
console.log(fibonacci(3), 2);
console.log(fibonacci(10), 55);

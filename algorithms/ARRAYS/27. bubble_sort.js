// Bubble Sort
// Bubble sort, referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// comparing each pair of adjacent items and swapping them if they are in the wrong order.

const bubble = (arr) => {
  for (let i in arr) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
};

console.log(bubble([2, 1, 4, 6, 7, -9, 5]));

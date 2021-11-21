// const countDown = (n) => {
//   for (let i = n; i > 0; i--) {
//     console.log(i);
//   }
// };

const countDownRecursive = (n) => {
  // warunek, base case
  if (n <= 0) {
    console.log("hooray");
    return;
  }
  console.log(n);
  // jak i--
  countDownRecursive(n - 1);
};

console.log(countDownRecursive(3));

// const SumRange = (n) => {
//   let total = 0;
//   for (let i = n; i > 0; i--) {
//     total += i;
//   }
//   return total;
// };

const SumRangeRecursive = (n, total = 0) => {
  if (n <= 0) {
    return total;
  }

  return SumRangeRecursive(n - 1, total + n);
};

console.log(SumRangeRecursive(4));

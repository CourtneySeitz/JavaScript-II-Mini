// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

// let n = 1;
// while (n <= 10) {
//   console.log('While Loop', n);
//   n++;
// }
// const loop = num => {
//     if (num > 10) return;
//     console.log(num);
//     loop(++num);
//   };
  
//  loop(1);
//   console.log(loop);


const countToTen = n => {
if (n >= 10) return; 
console.log('While Loop', n);
countToTen(++n);
};
//countToTen(1);
// write a recursive - function called countToTen that mimics the while loop above.

// code here

// when you code is ready, un-comment the next line and run the file
 console.log(countToTen(1));
/* ================ Next Problem ================= */

// Problem 2:

// const factorial = n => {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// };

// console.log(factorial(5));


const recursiveFactorial = n => {
  let result = 1;
  if (n === 0) return result;
  result =  n * recursiveFactorial(n-1);
  return result;
}

// write the above function in a recursive way.

// when your code is ready, un-comment the next line and run the file
console.log(recursiveFactorial(5));

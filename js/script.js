//1-masala
// function squareElement(arr) {
//   arr = Math.sqrt(4);
//   return arr;
// }
// console.log(squareElement());

//2-masala
// function substractElement(a, b) {
//   return a - b;
// }
// console.log(substractElement(7, 2));

//3-masala
// let str = "salom yaxshimisiz";
// function repeatElement(str) {
//   let res = [];
//   let num = +prompt("sonni kiriting");
//   for (let i = 0; i < num; i++) {
//     res.push(str);
//   }
//   return res;
// }
// console.log(repeatElement(str));

//4-masala
// let num = +prompt("sonni kiriting");
// function kubElement(num) {
//   return num ** 3;
// }
// console.log(kubElement(num));

//5-masala
// function divideElement(a, b) {
//   return Math.trunc(a / b);
// }
// console.log(divideElement(100, 3));

//Massivlarga oid masalalar
//1-masala
// function sumElement(arr) {
//   let sum = 0;
//   for (const iterator of arr) {
//     sum += iterator;
//   }
//   return sum;
// }
// console.log(sumElement([1, 5, 3, 6, 8, 9]));

//2-masala
// let arr = [5, 9, 8, 3, 4, 6];
// function maxElement(arr) {
//   let max = arr[0];
//   for (const iterator of arr) {
//     if (iterator > max) {
//       max = iterator;
//     }
//   }
//   return max;
// }
// console.log(maxElement(arr));

//3-masala
// function reverseElement(arr) {
//   let res = arr.reverse();
//   return res;
// }
// console.log(reverseElement([5, 2, 3, 6, 9]));

//4-masala
// let arr = [-2, 6, -9, -3, 4, -8];
// function filterElement(arr) {
//   let odd = [];
//   let res = arr.filter((element) => {
//     if (element > 0) {
//       odd.push(element);
//     }
//   });
//   return odd;
// }
// console.log(filterElement(arr));

//5-masala
// let arr = [2, 6, 3, 5, 4];
// function squareElement(arr) {
//   let res = [];
//   for (const iterator of arr) {
//     res.push(iterator ** 2);
//   }
//   return res;
// }
// console.log(squareElement(arr));

//6-masala
// let arr = [5, 9, 3, 5, 7, 6, 2];
// function repeatElement(arr) {
//   let res = [];
//   for (const iterator of arr) {
//     if (!res.includes(iterator)) {
//       res.push(iterator);
//     }
//   }
//   return res;
// }
// console.log(repeatElement(arr));

//7-masala
// let arr1 = [5, 8, 6, 9, 4, 2];
// let arr2 = [5, 8, 3, 6, 7];
// function concatElement(arr1, arr2) {
//   let res = arr1.concat(arr2);
//   return res;
// }
// console.log(concatElement(arr1, arr2));

//8-masala
// let arr = [5, 9, 7, 8, 6, 3, 4];
// function countOddElement(arr) {
//   let count = 0;
//   for (const iterator of arr) {
//     if (iterator % 2 == 1) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countOddElement(arr));

//9-masala,
// let arr = [7, 8, 5, 6, 3];
// function addNumber(arr) {
//   let res = [];
//   let num = +prompt(`sonni kiriting  `);
//   for (const iterator of arr) {
//     res.push(num + iterator);
//   }

//   return res;
// }
// console.log(addNumber(arr));

//10-masala
// let arr = [7, 5, 6, 9, 3];
// function minElement(arr) {
//   let min = arr[0];
//   for (const iterator of arr) {
//     if (iterator < min) {
//       min = iterator;
//     }
//   }
//   return min;
// }
// console.log(minElement(arr));

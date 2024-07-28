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

//6-masala
// let year = +prompt("yilni kiriting");
// function findCentury(year) {
//   let res = Math.ceil(year / 100);
//   switch (res) {
//     case 1:
//       return "1-asr";
//     case 2:
//       return "2-asr";
//     case 3:
//       return "3-asr";
//     case 4:
//       return "4-asr";
//     case 5:
//       return "5-asr";
//     default:
//       return `${res}-asr`;
//   }
// }
// console.log(findCentury(year));

//7-masala
//8-masala

//11-masala
// let num = +prompt("sonni kiriting");
// let element = +prompt("sonni kiriting");
// function degreeElement(num, element) {
//   return Math.pow(num, element);
// }
// console.log(degreeElement(num, element));

//12-masala
// let str = "hell o wor ld";
// function removeGap(str) {
//   let res = str.replaceAll(" ", "");
//   return res;
// }
// console.log(removeGap(str));

//13-masala
// let str1 = "salom";
// let str2 = "bolalar";
// function concatElement(str1, str2) {
//   let res = str1 + " " + str2;
//   return res;
// }
// console.log(concatElement(str1, str2));

//14-masala

//15-masala
// function CapitalizeFirstLetter(str) {
//   let res = str.split(" ");
//   res = res.map(function (value) {
//     return value[0].toUpperCase() + value.slice(1);
//   });
//   return res.join(" ");
// }
// console.log(CapitalizeFirstLetter("hello world"));

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

//Qo`shimcha masalalar
//1. **Berilgan sonni 3 ga ko'paytiradigan funksiya yozing.**
// function multiplyElement(num) {
//   return num * 3;
// }
// console.log(multiplyElement(4));

//2. **Berilgan sonning kvadratini hisoblaydigan funksiya yozing.**
// function squareElement(num) {
//   return num ** 2;
// }
// console.log(squareElement(6));

//3. **Massivning birinchi elementini qaytaradigan funksiya yozing.**
// let arr = [4, 2, 3, 6, 89, 6];
// function firstElement(arr) {
//   return arr[0];
// }
// console.log(firstElement(arr));

//4. **Massivning oxirgi elementini qaytaradigan funksiya yozing.**
// let arr = [6, 9, 3, 4, 8, 9, 6];
// function lastElement(arr) {
//   return arr.length - 1;
// }
// console.log(lastElement(arr));

// 5. **Massivning uzunligini qaytaradigan funksiya yozing.**
// let arr = [9, 2, 3, 4, 54, "salom", 23];
// function lengthArray(arr) {
//   return arr.length;
// }
// console.log(lengthArray(arr));

// 6. **Berilgan stringni kichik harflarga aylantiradigan funksiya yozing.**
// let str = "SALOM DUNYO";
// function toLowerCaseElement(str) {
//   return str.toLowerCase();
// }
// console.log(toLowerCaseElement(str));

// 7. **Massivning har bir elementini 2 ga ko'paytiradigan funksiya yozing.**
// let arr = [1, 3, 6, 7, 8, 6];
// function multiplyTwo(arr) {
//   let res = [];
//   for (const iterator of arr) {
//     res.push(iterator * 2);
//   }
//   return res;
// }
// console.log(multiplyTwo(arr))

// 8. **Berilgan stringning uzunligini qaytaradigan funksiya yozing.**
// let str = "salom bolalar";
// function lengthString(str) {
//   return str.length;
// }
// console.log(lengthString(str));

// 9. **Massivdagi juft sonlarni filtrlab qaytaradigan funksiya yozing.**
// let arr = [5, 9, 3, 4, 6, 7, 8];
// function evenElement(arr) {
//   let res = [];
//   for (const iterator of arr) {
//     if (iterator % 2 == 0) {
//       res.push(iterator);
//     }
//   }
//   return res;
// }
// console.log(evenElement(arr));

// 10. **Berilgan stringni teskari qaytaradigan funksiya yozing.**
// let str = "hello world";
// function reverseString(str) {
//   let res = str.split(" ").reverse();
//   return res.join(" ");
// }
// console.log(reverseString(str));

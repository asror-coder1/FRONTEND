//SINF ISHI

// let nums = [1, 2, 3, 4, 5, 4, 78];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
// }
// console.log(sum);

// let numbers = [1,2,3,4,5,6,7]
// let sum = numbers.reduce(function(total,element){
//      return total = total + element
// },"0")
// console.log(sum)

//1-topshiriq

// let numbers = [1,2,3,4,5,6,7]
// let sum = numbers.reduce(function(total,element){
//      return total = total + element
// },100)
// console.log(sum)

// let strArr = numbers.reduce(function(total,el){
//     // total.push(el.toString())
//     return total * el ;
// },[])
// console.log(strArr)

//2-topshiriq

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let sum = numbers.reduce(function(total,el){
//     total.push(10 * el)
//      return total
// },[])
// console.log(sum)


//3-topshiriq

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let strArr = numbers.reduce(function (total, el) {
//   if (total > el) return total;
//   return el;
// }, []);
// console.log(strArr);



//UY ISHI


// • 1-vazifa: Array elementlari orasidan faqat typi number bo’lganlarini yig’indisini toping.


// let arr = [1, "salom", 3, true, 6, null, 4, "5", 10];

// let numberSum = arr
//   .filter(el => typeof el === "number")
//   .reduce((sum, num) => sum + num, 0);

// console.log("Yig'indi:", numberSum);


// • 2-vazifa: Array elementlari orasidan faqat juft raqamlardan tashkil topgan array yarating


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = arr.filter(el => typeof el === "number" && el % 2 === 0);

console.log("Juft raqamlar:", evenNumbers);

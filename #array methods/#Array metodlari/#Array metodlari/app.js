// //parametr-0 bu funksiya ochilish qismidagi qavs ichida yaratiladigan uzgaruchi


// // function hello(param = "John"){
// //     console.log("hello"+param)
// // }



// //argument-bu funksiyani chaqirilish qismidagi qavs ichida berib yuborialdigan qiymat


// // hello("Asror")

// //Argumentga berilgan qiymat borib parametrga tushadi
// //Argument berilmasa parametrga undefined chiqadi 
// //undefined oldini olish uchun Parametga default qiymat berishimiz kerak


// // function startWork(callback){
// //     console.log("Ish boshlandi")

// // setTimeout(function(){
// //     callback(10)
// // },2000)
// // }


// // function finishWork (time){
// //     console.log("Ish tugadi",time)
// // }
// // startWork(finishWork)



// let array = [200,200,150,-90,50];

// array.forEach(function(element,index,array){
//     console.log(element);
// })



// let array = [200,200,150,-90,50];

// array.forEach(function(element,index,array){
//     console.log(array);
// })


// let array = [200,200,150,-90,50];
// let sum 0 ;
// array.forEach(function(element){
//     sum+=element
// })
// console.log(sum)




let elText = document.querySelector("text")
let array = [200,200,150,-90,50];
let newArray = array.map(function(el){
return el *2
})
console.log(sum)


//1-2-3-UYGA VAZIFALAR

//1-VAZIFA

// let array = [22, 93, 0, 0, -3];
// let son = 1;
// let arrPositive = false;

// array.forEach(num => {
//   if (num > 0) {
//     son *= num;
//     arrPositive = true;
//   }
// });

// if (arrPositive) {
//   console.log(son);
// } else {
//   console.log("0 dan katta son yoq");
// }

//2-VAZIFA

// let element = [-4, -3, -2, -1, 0, 1, 2, 3, 4,];

// array.forEach(function (array) {
//     console.log("-5 dan katta 5 dan kichik:", (element));
// })


// //3-VAZIFA

// let arr = [-2, 3, 0, 5, -1];
// let positiveArray = arr.filter(num => num > 0);
// console.log("0 dan katta elementlar:", positiveArray);
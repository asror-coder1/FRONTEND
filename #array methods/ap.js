//   1-mashq
  
//   let num = [1,'6',9,'n']
//  let result = num.filter(function(el){
//     return typeof el === "number";
//  })
// console.log(result);


// 2-mashq

// let array =[
//     {
//         name:'laptop',
//         price:200
//     },

//     {
//         name:'iphone',
//         price:2000
//     },
//     {
//         name:'smartvach',
//         price: 300
//     },
// ]
// let result = array.filter(function(el){
//     return el.price > 1000;
// })
// console.log(result);


//3-masala

// let numbers = [23,3344,54,65]

// numbers.sort((a,b) => b-a);
// console.log(numbers)



// let numbers2 = [23,3344,54,65]

// numbers2.sort((a,b) => a-b);
// console.log(numbers2)


// 4-masala ham usishda ham kamayishda chiqarish


// let numbers = [23,34,54,65,3,-7,6,56,45,];

// let decrease = [...numbers].sort((a,b)=>a-b);
// let increase = [...numbers].sort((a,b)=>b-a);

// console.log(increase);

// console.log(decrease);

//5-MASHQ

let array =[
    {
        name:'laptop',
        price:200
    },

    {
        name:'iphone',
        price:2000
    },
    {
        name:'smartvach',
        price: 300
    },
]

let decrease = [...array].sort((a,b)=>a-b);
console.log(array);

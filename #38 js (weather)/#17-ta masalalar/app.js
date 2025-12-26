// let fruits = ["apple","orange","grape","banana"]

// let fruitsLength = fruits.map(function(el){
//     return el.length
// })

// fruits.forEach(function(el, i){
//     let text = document.createElement("p")

//     text.textContent = el + " " + fruitsLength[i]; 
//     document.body.appendChild(text)
// })


//------------------------------------------------------------------------------------------------------


// 1 masala  Array elementlari orasidan eng katta sonni topuvchi funksiya yarating.

function engKattaSon(massiv) {
    if (massiv.length === 0) return null;
    let katta = massiv[0];
    for (let i = 1; i < massiv.length; i++) {
      if (massiv[i] > katta) {
        katta = massiv[i];
      }
    }
    return katta;
  }
  const sonlar = [10, 25, 8, 99, 42];
  console.log("Eng katta son:", engKattaSon(sonlar));
  

      

//-------------------------------------------------------------------------------------------------

//2-masala Array elementlari orasidan nechtasi “number” ekanligini qaytaruvchi funksiya yarating.

function raqamlarSoni(arr){
  let son = 0
  arr.forEach(el =>{
    if(typeof el === 'number')son++;

  })
  return son;
}
console.log(raqamlarSoni([1,2,'a','b','w']))


//-----------------------------------------------------------------------------------------------------------

//3-masala Array elementlari orasida nechta string borligini aniqlovchi funksiya yarating.

function raqamlarSoni(arr){
  let son = 0;

  arr.forEach(element => {
      if(typeof element === 'string')son++
  });
  return son
}

console.log(raqamlarSoni([1 , 3, 5 ,"s" , "wd" ,"sd"]));




//------------------------------------------------------------------------------------------------------


// 4 masala Stringdan tashkil topgan array berilgan. Array elementlari orasidan eng ko’p belgili elementni qaytaruvchi funksiya yarating.


function engUzunSoz(massiv) {
    if (massiv.length === 0) return null; 
    let uzunSoz = massiv[0];
    for (let i = 1; i < massiv.length; i++) {
      if (massiv[i].length > uzunSoz.length) {
        uzunSoz = massiv[i];
      }
    }
    return uzunSoz;
  }
  
  const sozlar = ["salom", "dasturlash", "js", "funksiya", "raqam"];
  console.log("Eng uzun so'z:", engUzunSoz(sozlar));
  




//------------------------------------------------------------------------------------------------------------------------


// 5-masala Sonlardan tashkil topgan array berilgan. Shu arrayning 0 ga teng elementlarini arrayning oxiriga o’tkazadigan funksiya yarating.

function moveZerosToEnd(arr) {
  let result = [];
  let zeroCount = 0;

  arr.forEach(num => {
    if (num === 0) {
      zeroCount++; 
    } else {
      result.push(num); 
    }
  });

  
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return result;
}


let array = [0, 1, 0, 3, 0, 5];
let result = moveZerosToEnd(array);
console.log(result); 


//-----------------------------------------------------------------------------------------------------------------------------


 // 6 masala Bitta funksiya yarating va u parametr sifatida bitta array qabul qilsin. Funksiya shu array elementlarini typidan iborat arrayni qaytarsin.

 function engUzunSoz(massiv) {
    if (massiv.length === 0) return null; 
    let uzunSoz = massiv[0];
    for (let i = 1; i < massiv.length; i++) {
      if (massiv[i].length > uzunSoz.length) {
        uzunSoz = massiv[i];
      }
    }
    return uzunSoz;
  }
  const sozzlar = ["salom", "dasturlash", "js", "funksiya", "raqam"];
  console.log("Eng uzun so'z:", engUzunSoz(sozzlar));


//--------------------------------------------------------------------------------------------------------



// 7-masala Bitta funksiya yarating va u parametr sifatida bitta array qabul qilsin. Funksiya shu array elementlarini stringga o’girib qaytarsin.


let array = [2, 3, 4, 6];

let arr = array.map(function(el){
    return el.toString();
})

console.log(arr);



//-------------------------------------------------------------------------------------------------------------------

//8-masala


 //BITTA FUNKSIYA YARATING VA U PARAMETR SIFATIDA BITTA ARRAY QABUL QILSIN . FUNKSIYA SHU ARRAY ELEMENTLARINI 5 GA KUPAYTIRIB QAYTARSIN

 
let array = [200, 300, 400, 280, 340, 290, 356]

let gre = array.map(function(el){
    return el * 5;
})
console.log(gre)


//----------------------------------------------------------------------------------------------------------------------------------------




// 9.Array elementlari orasidan nechta element 5 ga bo’linishini qaytaruvchi funksiya yarating.



function beshgaBolinadigonSon(arr){
    let zero = 0;
    for(let i = 0;i<arr.length;i++){
        arr[i] % 5 === 0
    }
}

console.log(beshgaBolinadigonSon(arr[i]));




//----------------------------------------------------------------------------------------------------

//10-masala  4 xonali sonning raqamlar yig’indisini hisoblovchi funksiya yarating.

function numbers(num=1234){
  let bir = num % 10;
  let onli = Math.floor((num %100)/10)
  let yuzli = Math.floor((num%1000)/100)
  let mingli = Math.floor((num%10000)/1000)
return bir+onli+yuzli+mingli
}

let javob = numbers()
console.log(javob)


//-------------------------------------------------------------------------------------------


// 11-masala 1 dan 5 gacha baho berilgan bo‘lsa, unga mos keluvchi so‘zni (Yomon, Qoniqarsiz, Qoniqarli, Yaxshi, A’lo) chiqaruvchi dastur yozing.


let array = ['yomon','qoniqarsiz','qoniqarli','yahshi','alo']


function findScore(num){
  if(num < 1 && num>5){
    console.log('xato kiritingiz');
  }


  console.log(array[num-1])
}



 findScore (1)



//--------------------------------------------------------------------------------------------------



// 12-masala Arraydagi eng katta va eng kichik elementni bitta array qilib qaytaruvchi funksiya yarating.
// [3,4,1,-4,9,2] => [-4,9]


let arRay =[5,9,0,-99,55,1]

let min =   [0]

  let max  = [0]


arRay.forEach(function(el){
  if(el<min){
    min = el
  };


  if(el > max){
    max = el
  }
})
 console.log (min , max)





//--------------------------------------------------------------------------------------------------



// 13 masala Stringlardan tashkil topgan array elementlarining nechta belgidan iborat ekanligidan tashkil topgan array qaytaruvchi funksiya yarating.
function sozUzunliklari(massiv) {
    return massiv.map(soz => soz.length);
  }
  const words = ["salom", "dastur", "js", "funksiya"];
  console.log(sozUzunliklari(words));
  

//-------------------------------------------------------------------------------------------------------



// 14 masala Berilgan array elementlarining o’rtachasini topuvchi funksiya yarating
function ortachaQiymat(massiv) {
    if (massiv.length === 0) return null; 
    const yigindi = massiv.reduce((sum, qiymat) => sum + qiymat, 0);
    return yigindi / massiv.length;
  };
  const number = [10, 20, 30, 40, 50];
  console.log("O'rtacha qiymat:", ortachaQiymat(number));
  



//--------------------------------------------------------------------------------


//15-masala Berilgan array elementlarini teskari tartibda chiqaruvchi funksiya yarating


const array = ["1", "2", "3", "4", "5"];
const reverced = [];

array.forEach(item =>{
    reverced.unshift(item);
})

reverced.forEach(item => {
    console.log(item);
})  


//-----------------------------------------------------------------------------------------------------




// 16 masala Array elementlari orasidan eng uzun so’zni topuvchi funksiya yarating.
function engUzunSoz(massiv) {
    if (massiv.length === 0) return null; 
    let uzunSoz = massiv[0];
    for (let i = 1; i < massiv.length; i++) {
      if (massiv[i].length > uzunSoz.length) {
        uzunSoz = massiv[i];
      }
    }
    return uzunSoz;
  }
  const word = ["salom", "dasturlash", "kitob", "funksiya"];
  console.log("Eng uzun so‘z:", engUzunSoz(word));
  




//------------------------------------------------------------------------------------------------




//  // 17 masala 100 dan 150 gacha sonlar orasidan 7 ga qoldiqsiz bo’linadiganlarini konsolga chiqaring.
 for (let i = 100; i <= 150; i++) {
    if (i % 7 === 0) {
      console.log(i);
    }
  };
  


// //------------------------------------------------------------------------------------------------



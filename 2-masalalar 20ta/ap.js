//Imtihon savollari bazasi

//1.Sonni teskari tartibda chiqaruvchi funksiya yarating.
//3451 => 1543

function reverseNumber(num) {
  return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseNumber(3451));

//2.100 dan 150 gacha sonlar orasidan 7 ga qoldiqsiz bo’linadiganlarini konsolga chiqaring.

for (let son = 100; son <= 150; son++) {
    if (son % 7 === 0) {
        console.log(son);
    }
}

//3.Argument qilib berilgan 2 ta arrayni birlashtirib qaytaruvchi funksiya yarating.
//[3,4,5,1], [7,2,4,3] => [3,4,5,1,7,2,4,3]

// function birlashtirArraylar
// (arr1, arr2) {
//     return arr1.concat(arr2);
// }

// const a = [3, 4, 5, 1];
// const b = [7, 2, 4, 3];
// const natija = birlashtirArraylar(a, b);
// console.log(natija);

// function birlashtirArraylar(arr1, arr2) {
//     return [...arr1, ...arr2];
// }

let nums = (arr1, arr2) => [...arr1, ...arr2];
console.log(nums([1, 3, 5], [2, 3, 4]));

//4.Funksiyaga argument qilib bitta array va bitta son beriladi. Shu son arrayda qaysi indexda turganini qaytaruvchi funksiya yarating.

function nom(arr, num) {
    return arr.indexOf(num)
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let number = 30;

console.log(nom(myArray, number))
console.log(nom(myArray, 30))

//5.Funksiyaga argument qilib berilgan sonning polindrom ekanligini tekshiring. Natija true yoki false qaytishi kerak. (polindrom son – teskari o’qiganda ham bir xil bo’ladigan son)
//345 –> false (chunki, teskarisi 543, 543 va 345 teng emas!)
//555 -> true

function polindromAylanish() {
    let word =
      "345 678 123 456 789 123 456 789 123 456 789 123 456 789 123 456 789";
    let arr = word.split(" ");
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
      let arr3 = arr[i].split("").reverse().join("");
      arr2.push(arr3);
    }
    return arr2.join(" ");
  }

  console.log(polindromAylanish());

//6.Arraydagi toq sonlarning yig’indisini hisoblang.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let summ = 5;
for (let i = 1; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    summ = summ + num[i];
  }
}

console.log("Toq sonlar", summ);

//7.Kiritilgan stringni teskari qilib qayatuvchi funksiya yarating.
//“salom” -> “molas”

const arrays = [1,2,3,4,5,6,7,8,9]

const reversed = []

arrays.forEach((item) => {
    reversed.unshift(item)
})

reversed.forEach((item) => {
    console.log(item)
})

//8.1 dan 7 gacha bo‘lgan son berilgan, switch case yordamida shu son mos keladigan hafta kunini chiqaruvchi dastur yozing.

let weeks = prompt("qaysi hafta kun");

switch (weeks) {
  case "1":
    alert("dushanba");
    break;
  case "2":
    alert("seshanba");
    break;
  case "3":
    alert("chorshanba");
    break;
  case "4":
    alert("payshanba");
    break;
  case "5":
    alert("juma");
    break;
  case "6":
    alert("shanba");
    break;
  case "7":
    alert("yakshanba");
    break;
  default:
    alert("bu hafta kuni mavjud emas");
}

//9.Funksiyaga argument qilib bitta string va bitta harf beriladi. Shu harf stringda bor yoki yo’qligini chiqaruvchi funksiya yarating. Natija true yoki false bo’lib qaytsin.
//“salom”, “l” -> true

function suz(str, char) {
    return str.includes(char);
  }

  console.log(suz("salom", "l"));
  console.log(suz("salom", "z"));

 //10.Array elementlarining 0 dan kattalarini va 0 dan kichiklarini 2 ta alohida arrayda chiqaring.
  //[-7,-3,2,5,6,-8] => [-7,-3,-8], [2,5,6]

  let array = [-1,3,4,-5,5,-3]

  let positive = []
  let negative = []

  for(let i = 0; i < array.length; i++){
      if(array[i] < 0){
          negative.push(array[i])
      }
      else if(array[i] > 0){
          positive.push(array[i])
      }
  }

  console.log(positive);
  console.log(negative);

//11. Berilgan so’zdagi unli harflar(a, e, i, o, u) sonini aniqlovchi funksiya yarating.

function un(soz) {
    const un = ['a', 'e', 'i', 'o', 'u'];

    let nechta = 0;

    for (let harf of soz.toLowerCase()) {
        if (un.includes(harf)) {
            nechta++;
        }
    }

    return nechta;
}

let soz = "Akmalakalanikiligimizdandirda";
console.log`('${soz}' da ${un(soz)} unli bor.)`;

//12. Agar ikkita array tarkibi bir xil bo’lsa, true, aks holda false qiymat qaytaruvchi funksiya yarating.

// function solishtirish(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++){
//         if (arr1[i] !== arr2[i]){
//             return false;
//         }
//     }
//     return true;

// }
// console.log(solishtirish([1, 2, 3], [1, 2, 3]));
// console.log(solishtirish([1, 2, 3], [1, 3, 2]));
// console.log(solishtirish([1, 2, 3], [3, 2, 1]));


function solishtirish(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}
console.log(solishtirish([1, 2, 3], [3, 2, 1]))

//13. Foydalanuvchi kiritgan matndagi so‘zlar sonini hisoblovchi funksiya yarating.

let word = ("Assalomu Aleykum do'stlar, bugun biz JavaScriptni o'rganamiz.");

function wordLength (word) {
    let soz = word.split(" ");
    return soz.length;
}

console.log(wordLength(word));

//14. Array elementlari orasidagi eng katta va eng kichik son orasidagi farqni qaytaruvchi funksiya yarating.

let arr = [1, 7, 8, 21, 14356, 543]
function diffrence(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

console.log(diffrence(arr));

//15. Array elementlarining kvadratlari yig’indisini hisoblovchi funksiya yarating.

// const sonlar = [2,4,6];

// function yegindiKvadrati(arr) {
//     let yegindi = 0;

//     arr.forEach(function (el) {

//    yegindi += el * el;

//     });

//     return yegindi;
// }

// console.log(yegindiKvadrati(sonlar));




//16. Array ichidagi har bir element son ekanligini aniqlovchi funksiya yarating.

// function hammasiSonmi(arr) {
//     return arr.every(element => typeof element === 'number');
//   }

//   console.log(hammasiSonmi([1, 2, 3, "salom"]));
//   console.log(hammasiSonmi([5, 6, 7]));

function isArrayAllNumbers(arr) {
  return arr.every((x) => typeof x === "number");
}
console.log(isArrayAllNumbers([1, 2, 3]));


//17. String ichidan faqat raqamlarni ajratib oluvchi funksiya yarating.
//"Salom123Dunyo45" → "12345"

// function getDigitsFromString(str) {
//   return str.replace(/\D/g, '');
// }
// console.log(getDigitsFromString("Salom123Dunyo45"));


let extractDigits = (str) => str.replace(/\D/g, "");
console.log(extractDigits("salom3dunyo3555"));

//18. Arraydagi barcha elementlarni bitta stringga birlashtiruvchi funksiya yarating
//["Salom", "Dunyo"] → "SalomDunyo"

function joinArrayElements(arr) {
  return arr.join('');
}
console.log(joinArrayElements(["Salom", "Dunyo"]));

//19. N ta elementdan iborat random sonlardan tashkil topgan array yarating. N soni funksiyaga argument qilib beriladi.


function generateRandomArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}
console.log(generateRandomArray(5));

//20. String ichidagi katta harflarni sanovchi funksiya yarating.
//"HelloWorld" → 2 (H va W).

// function countUpperCaseLetters(str) {
//   let count = 0;
//   for (let char of str) {
//     if (char >= 'A' && char <= 'Z') {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countUpperCaseLetters("HelloWorld"));

function countUpperCaseLetters(str) {
  return [...str].filter(c => c >= 'A' && c <= 'Z').length;
}
console.log(countUpperCaseLetters("HelloWorld"));



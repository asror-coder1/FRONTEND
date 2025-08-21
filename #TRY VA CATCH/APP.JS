//  let text = "HOZIR IT DARSI";
//  let myArray = text.split('  ')

//  console.log(myArray)



// let text = "HOZIR IT DARSI";
// let myArray = text.split('  ',2)

// console.log(myArray)



// let text = "HOZIR IT DARSI";
// let myArray = text.split()

// console.log(myArray)



// let x = 20
// let y = 10
// let text = "x*y";
// let result = eval(text)
// console.log(result)





// let x = 20
// let y = 10
// let text = "x*y-x+y**2";
// let result = eval(text)

// console.log(text)
// console.log(result)




// let x = 20
// let y = 10
// let text = "x*y-x+y**2=";
// let result = eval(text)
// console.log(result)



// let x = 20
// let y = 10
// let text = "x*y-x+y**2=";
// try{
//     let result = eval(text)
//     console.log(result)
// } catch(e){
//     console.log('XATOLIK')
// }



// try{
//     alert("Try va catch errorni ushlashga yordam beradi!")
// } catch(e){
//     console.log("Xatolik bor!")
// }


// try{
//     alert("Try va catch errorni ushlashga yordam beradi!")
// } catch(e){
//     console.log("Xatolik bor!")
// }



let display = document.getElementById('display');
let currentInput = '';
let resultShown = false;

function appendNumber(number) {
  if (resultShown) {
    currentInput = '';
    resultShown = false;
  }
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === '') return;
  const lastChar = currentInput[currentInput.length - 1];
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }
  resultShown = false;
  updateDisplay();
}

function appendDot(dot) {
  const parts = currentInput.split(/[\+\-\*\/]/);
  const lastPart = parts[parts.length - 1];
  if (!lastPart.includes(dot)) {
    currentInput += dot;
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
    resultShown = true;
  } catch {
    display.innerText = "Error";
    resultShown = true;
  }
}

function updateDisplay() {
  display.innerText = currentInput === '' ? '0' : currentInput;
}

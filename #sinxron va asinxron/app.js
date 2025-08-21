// let text = document.querySelector(".text");
// let btn = document.querySelector(".btn");

// function sayHello() {
//   text.innerHTML += "Hello";
// }

// let myInterval = setInterval(sayHello, 1000);
// btn.onclick = () => {
//   clearInterval(myInterval);
// };

//2-vazifa

// const text = document.querySelector(".text");
// function soat() {
//   let hour = new Date().getHours();
//   let minute = new Date().getMinutes();
//   let second = new Date().getSeconds();
//   text.innerHTML =
//     String(hour).padStart(2, "0") +
//     ":" +
//     String(minute).padStart(2, "0") +
//     ":" +
//     String(second).padStart(2, "0");
// }

// setInterval(soat, 1000);

//3-vazifa uy ishi





let display = document.querySelector(".secundomer");
let start = document.querySelector(".start");  
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");

let millisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;

let interval;

function updateItem() {
  second++;
  if (second === 60) {        
    minute++;
    second = 0;
  }
  if (minute === 60) {
    hour++;
    minute = 0;
  }

  display.innerHTML = `${String(hour).padStart(2, '0')}:${String(
    minute
  ).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
}

start.onclick = function () {
  if (!interval) {
    interval = setInterval(updateItem, 1000);  
  }
};

stop.onclick = function () {
  if (interval) {
    clearInterval(interval);
    interval = null;  
  }
};

reset.onclick = function () {
  second = 0;
  minute = 0;
  hour = 0;
  display.innerHTML = "00:00:00";
  clearInterval(interval);
  interval = null;
};



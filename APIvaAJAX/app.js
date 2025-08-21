// fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
//   response.json().then((data) => render(data))
// );

// let wrapper = document.createElement("div");
// document.body.appendChild(wrapper);
// function render(array) {
//   array.forEach((element, index) => {
//     wrapper.insertAdjacentHTML(
//       "beforeend",
//       `<p>${index + 1}${element.title}</p>`
//     );
//   });
// }



//boshqa vazifa


// let elText = document.querySelector(".text");
// let intervalId;

// document.getElementById("startBtn").addEventListener("click", () => {
//   if (intervalId) clearInterval(intervalId);

//   let hour = parseInt(document.getElementById("hour").value) || 0;
//   let minute = parseInt(document.getElementById("minute").value) || 0;
//   let seconde = parseInt(document.getElementById("second").value) || 0;

//   function timer() {
//     if (hour === 0 && minute === 0 && seconde === 0) {
//       elText.innerHTML = "Time is up!";
//       clearInterval(intervalId);
//     } else {
//       seconde--;

//       if (seconde < 0) {
//         seconde = 59;
//         minute--;
//       }
//       if (minute < 0) {
//         minute = 59;
//         hour--;
//       }
//       if (hour < 0) hour = 0;
//       if (minute < 0) minute = 0;
//       if (seconde < 0) seconde = 0;

//       elText.innerHTML =
//         String(hour).padStart(2, "0") +
//         ":" +
//         String(minute).padStart(2, "0") +
//         ":" +
//         String(seconde).padStart(2, "0");
//     }
//   }

//   elText.innerHTML =
//     String(hour).padStart(2, "0") +
//     ":" +
//     String(minute).padStart(2, "0") +
//     ":" +
//     String(seconde).padStart(2, "0");

//   intervalId = setInterval(timer, 1000);
// });


 //dars ishi
 
// let elText = document.querySelector(".text");
// let hour = prompt("Soatni kiriting:");
// let minute = prompt("Minutni kiriting:");
// let seconde = prompt("Sekundni kiriting:");

// function timer() {
//   if (seconde == 0 && minute == 0 && hour == 0) {
//     elText.innerHTML = "Time is up!";
//   } else {
//     seconde--;

//     if (seconde < 0) {
//       minute--;
//       seconde = 59;
//     }
//     if (seconde < 0) {
//       hour--;
//       seconde = 59;
//     }
//     elText.innerHTML =
//       String(hour).padStart(2, "0") +
//       ":" +
//       String(minute).padStart(2, "0") +
//       ":" +
//       String(seconde).padStart(2, "0");
//   }
// }
// setInterval(timer, 1000);


//UY ISHI


let elText = document.querySelector(".text");
let btn = document.querySelector(".btn");
let interval;

btn.onclick = function () {
  let hour = parseInt(document.querySelector("#hour").value) || 0;
  let minute = parseInt(document.querySelector("#minute").value) || 0;
  let second = parseInt(document.querySelector("#seconds").value) || 0;

  clearInterval(interval);

  function timer() {
    if (second === 0 && minute === 0 && hour === 0) {
      clearInterval(interval);
      elText.innerHTML = "Time is up!";
    } else {
      second--;

      if (second < 0) {
        second = 59;
        minute--;
      }
      if (minute < 0) {
        minute = 59;
        hour--;
      }

      elText.innerHTML =
        String(hour).padStart(2, "0") +
        ":" +
        String(minute).padStart(2, "0") +
        ":" +
        String(second).padStart(2, "0");
    }
  }

  timer();
  interval = setInterval(timer, 1000);
};

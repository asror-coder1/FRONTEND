// // const fruits = ['Banana','Orange','Lemon','Apple','Mango'];

// // const newArr = [...fruits];
// // newArr.splice(1,3,'Lemon');

// // console.log('Eski array',fruits);
// // console.log('Yangi array',newArr);





const runBtn = document.querySelector(".run");
const start = document.querySelector("#start");
const end = document.querySelector("#end");
const method = document.querySelector("#method");
const title = document.querySelector(".title");
const resultTitle = document.querySelector(".result");
const add = document.querySelector("#add");
const addLabel = document.querySelector(".add__label");

let arr = [10, 20, 30, 40, 50, 60];

title.textContent = JSON.stringify(arr);

runBtn.addEventListener("click", function () {
  const startVal = Number(start.value);
  const endVal = Number(end.value);

  if (method.value === "slice") {
    let result = arr.slice(startVal, endVal);
    resultTitle.textContent = JSON.stringify(result);
  }

  if (method.value === "splice") {
    let newArr = [...arr];
    if (add.value !== "") {
      newArr.splice(startVal, endVal, Number(add.value));
    } else {
      newArr.splice(startVal, endVal);
    }
    resultTitle.textContent = JSON.stringify(newArr);
  }
});

method.addEventListener("input", () => {
  if (method.value === "splice") {
    addLabel.style.display = "block";
  } else if (method.value === "slice") {
    addLabel.style.display = "none";
  }
});

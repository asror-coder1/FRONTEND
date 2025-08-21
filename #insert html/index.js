// const box =document.querySelector(".box");
// const elnput=document.querySelector('#input');
// const position =document.querySelector("reset");
// const addBtn=document.querySelector("#add")
// const resetBtn =document.querySelector("#reset")


// addBtn.onclick=function(){
//     box.insertAdjacentHTML(position.value`<p>${elnput.value}</p>`)
// }



const box = document.querySelector(".box");
const elnput = document.querySelector("#input");
const positionEl = document.querySelector("#position"); // Element position uchun
const addBtn = document.querySelector("#add");
const resetBtn = document.querySelector("#reset");

addBtn.onclick = function() {
  // Iltimos, positionEl.value "beforebegin", "afterbegin", "beforeend", yoki "afterend" bo'lishiga ishonch hosil qiling.
  box.insertAdjacentHTML(positionEl.value, `<p>${elnput.value}</p>`);
};

resetBtn.onclick = function() {
  // ".box" elementining ichidagi barcha mazmunni o'chiradi
  box.innerHTML = "";
};



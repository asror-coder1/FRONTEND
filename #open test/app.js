let elBtn = document.querySelector(".btn");
let modal = document.querySelector(".modal");
let elclose = document.querySelector(".close"); 
let modalContent = document.querySelector(".modal_content");

elBtn.onclick = function () {
  modal.style.display = "block";
};

elclose.onclick = function () {
  modal.style.display = "none";
};


window.onclick = function (e) {
  if (e.target === modal || e.target === elclose) {
    modal.style.display = "none";
  }
};


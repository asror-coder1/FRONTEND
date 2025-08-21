let elText = document.querySelector(".text");

function belgi(val) {
  elText.textContent += val;
}

function tozalagich() {
  elText.textContent = "";
}


function uchirgich() {
  try {
    elText.textContent = eval(elText.textContent);
  } catch (error) {
    elText.textContent = "Xatolik";
  }
}
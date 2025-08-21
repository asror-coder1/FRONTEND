let elList = document.querySelector(".list");
let allRadio = document.querySelectorAll('input[type="radio"]');
let allCheck = document.querySelectorAll('input[type="checkbox"]');

allRadio.forEach((radio) => {
  radio.addEventListener("click", function () {
    elList.innerHTML = "";
    let filterProduct = productList.filter(
      (item) => item.color === radio.value
    );

    display(filterProduct);
  });
});

allCheck.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    elList.innerHTML = "";
    let filteredProduct = productList.filter(
      (item) => item.materials === checkbox.value
    );

    display(filteredProduct);
  });
});

function display(arr) {
  arr.forEach((element) => {
    elList.insertAdjacentHTML(
      "beforeend",
      `       <li class="item">
                 <div class="item__img-box"> 
                 <div style="background-color: ${element.color};" class="bg"></div>
                  <img width="250px" src="${element.img}" alt="" class="item__img">
                 </div>
                 <div class="item__right">
                <div class="item__texts">
                 <div class="item__textss">
                 <h3 class="item__title">${element.name}</h3>
                 <p class="item__textss-text">Within 10 days</p>
                </div>
                <p class="item__price">$ ${element.price}</p>
                </div>
                <p class="item__text">Armchair in scandinavian design upholstered with fabric Miss pattern. Backrest with decorative buttons. Legs in natural wood.</p>
                <a href="./detail.html?id=${element.id}" class="item__btn">Xarid qilish</a>
                </div>
                </li>`
    );
  });
}

display(productList);

let detailWrapper = document.querySelector(".detail__wrapper");
let similarList = document.querySelector(".similar__list");

let params = new URLSearchParams(window.location.search);

let id = params.get("id");

let findProducts = products.find((el) => id === el.id);

detailWrapper.innerHTML = `
            <div class="finds">
                <img src="${findProducts.img}" alt="product 1" />

                <div class="product__info">
                    <p class="product__price">${findProducts.price}$</p>
                    <p class="product__about">
                        ${findProducts.about}
                    </p>
                </div>
            </div>
        
`;

products.forEach((el) => {
  if (id === el.id) return;
  similarList.insertAdjacentHTML(
    "beforeend",
    `
        <li class="product">
            <div class="product__img">
            <div style='background-color: ${el.color};' class="bg"></div>
            <img src="${el.img}" alt="product 1" />
            </div>

            <div class="product__info">
            <h2 class="product__title">Patio armchair, blue</h2>
            <p class="product__price">${el.price}$</p>
            <p class="delivery__time">Within 10 days</p>
            <p class="product__about">
                ${el.about}
            </p>
            <a href="./detail.html?id=${el.id}" class="product__buy">BUY NOW</a>
            </div>
        </li>2
        `
  );
});

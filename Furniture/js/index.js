let productsList = document.querySelector(".products__all")
const allRadios = document.querySelectorAll('input[type="radio"]');
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

function filterProducts() {
  let radioValues = [...allRadios].filter((radio) => radio.checked === true).map((el) => el.value)


  let checkboxValues = [...allCheckboxes].filter((checkbox) => checkbox.checked).map((el) => el.value)



  let filteredProduct = products.filter(function(product) {
  return (
    product.color === radioValues[0] || checkboxValues.some((mat) => product.materials.includes(mat)))
  })

  
  
  displayProduct(filteredProduct);
  
}

[...allCheckboxes, ...allRadios].forEach(input => {
    input.addEventListener('click', filterProducts);
});


 
function displayProduct(arr){
    productsList.innerHTML = ""

  arr.forEach((el) => {
    productsList.insertAdjacentHTML('beforeend',  `
        <li class="product">
                  <div class="product__img">
                    <div style="background-color:${el.color};" class="bg"></div>
                    <img src="${el.img}" alt="${el.name}" />
                  </div>

                  <div class="product__info">
                    <h2 class="product__title">${el.name}</h2>
                    <p class="product__price">${el.price}$</p>
                    <p class="delivery__time">Within 10 days</p>
                    <p class="product__about">
                    ${el.about}
                    </p>
                    <a href="./detail.html?id=${el.id}" class="product__buy">BUY NOW</a>
                  </div>
                </li>
        `)
});
}


displayProduct(products)
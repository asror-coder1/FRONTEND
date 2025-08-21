let params = new URLSearchParams(window.location.search);
let looklike = document.querySelector(".list")
let detail = document.querySelector(".detail__inner");
let id = params.get("id")
// console.log(id);



let findItem = productList.find(function(element){
    return element.id === id;
}) 

detail.innerHTML = `
              
                        <div class="detail__left">
                            <img src="${findItem.img}" alt="" class="detail__left-img">
                        </div>
                        <div class="detail__center">
                            <h3 class="detail__center-price">
                                ${findItem.price} $
                            </h3>
                            <h2 class="detail__center-title">
                                ${findItem.name}

                            </h2>

                            <p class="detail__center-text">
                                ${findItem.about}
                            </p>

                            <div class="detail__center-colors">
                                <label for="detail-radio-custom" class="detail__color-label">
                                    <input
                                    type="radio"
                                    name="detail-radio-custom"
                                    id="detail-radio-custom"
                                    class="visually-hidden detail__color"
                                  />
                                  <span class="detail__color-spp detail-spp1"></span>
                                  </label>
                                  <label for="detail-radio-custom2" class="detail__color-label">
                                    <input
                                    type="radio"
                                    name="detail-radio-custom"
                                    id="detail-radio-custom2"
                                    class="visually-hidden detail__color"
                                  />
                                  <span class="detail__color-spp detail-spp2"></span>
                                  </label>
                                  <label for="detail-radio-custom3" class="detail__color-label">
                                    <input
                                    type="radio"
                                    name="detail-radio-custom"
                                    id="detail-radio-custom3"
                                    class="visually-hidden detail__color"
                                  />
                                  <span class="detail__color-spp detail-spp3"></span>
                                  </label>
                                  <label for="detail-radio-custom4" class="detail__color-label">
                                    <input
                                    type="radio"
                                    name="detail-radio-custom"
                                    id="detail-radio-custom4"
                                    class="visually-hidden detail__color"
                                  />
                                  <span class="detail__color-spp detail-spp4"></span>
                                  </label>
                            </div>

                            <button class="detail__center-add">ADD TO CART</button>
                        </div>
                        <div class="detail__right">
                            <img width="240px" src="${findItem.img}" alt="" class="detail__right-img">
                            <img width="240px" src="${findItem.img}" alt="" class="detail__right-img">
                       </div>

`;



productList.forEach((element) => {
    if (element.id === id) return;
    looklike.insertAdjacentHTML("beforeend",`
             <li class="item">
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
                <a href="./detail.html?id=${element.id}" class="item__btn">BUY NOW</a>
                </div>
                </li>
        `);
});
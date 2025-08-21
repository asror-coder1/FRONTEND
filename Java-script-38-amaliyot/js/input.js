let colorFind = document.querySelector(".products__colors");
let materialFind = document.querySelector(".product__filter-materials-lbbox");
let colors = productList.map((el) => el.color)
let materials = productList.map((el) => el.materials)


let matirealsArray = ["Synthetic skin", "Metal", "Wooden", "Fabric","Polyurethane","Viscoelastic", "Natural fiber", "Synthetic fiber", "Natural skin", "Foam"]

function createInput(parentElement, array, type){
    if(type === "radio"){
        array.forEach((el, index) => {
            parentElement.insertAdjacentHTML("beforeend", `
                 <label for="radio-custom${index + 1}" class="product__color-label">
                   <input
                   type="radio"
                   value="${el}"
                   name="radio-custom"
                   id="radio-custom${index + 1}"
                    class="visually-hidden product__color"/>
               <span style="background-color: ${el};" class="product__color-spp spp1"></span>
               </label>
               `)
          });
    }

}

createInput(colorFind, colors, "radio")


function createcheck(parentElement, array, type){
    if(type === "checkbox"){
        array.forEach((el, index) => {
            parentElement.insertAdjacentHTML("beforeend",`
                    <label for="filter-radio-custom${index + 1}" class="product__filter-label">
                      <input
                      type="checkbox"
                      name=""
                      value="${el}"
                      id="filter-radio-custom${index + 1}"
                      class="visually-hidden filter__color"
                    />
                    <span class="filter__color-sppp sppp1">${el}</span>
                    <span class="filter__color-spp fspp1"></span>
                    </label>
                `)
        })
    }
}

createcheck(materialFind, materials, "checkbox")
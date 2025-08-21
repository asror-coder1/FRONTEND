let colorRadios = document.querySelector(".color__radios");
let materialCheckbox = document.querySelector(".material__checkbox");

let colors = products.map((product) => product.color);

let allColors = [];
colors.forEach((color) => {
  if (!allColors.includes(color)) {
    allColors.push(color);
  }
});

let allMaterials = [];
products.forEach((product) => {
  product.materials.forEach((material) => {
    if (!allMaterials.includes(material)) {
      allMaterials.push(material);
    }
  });
});

function createInput(parentElement, arr, type) {
  if (type === "radio") {
    arr.forEach((el, i) => {
      parentElement.insertAdjacentHTML(
        "beforeend",
        `
        <label for="radio-${i + 1}">
          <input
            class="input-color"
            type="radio"
            name="color"
            value="${el}"
            id="radio-${i + 1}"
            hidden
          />
          <span style="background-color: ${el}" class="input-controller"></span>
        </label>
        `
      );
    });
  }
  if (type === "checkbox") {
    arr.forEach((el, i) => {
      parentElement.insertAdjacentHTML(
        "beforeend",
        `
        <label for="checkbox-${i + 1}">
          ${el}
          <input
            class="input-material"
            type="checkbox"
            name="material"
            value="${el}"
            id="checkbox-${i + 1}"
          />
        </label>
        <br/>
        `
      );
    });
  }
}

createInput(colorRadios, allColors, "radio");
createInput(materialCheckbox, allMaterials, "checkbox");

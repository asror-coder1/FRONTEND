let elForm = document.querySelector(".form");
let elInput = document.querySelector(".city");
let cityTitle = document.querySelector(".city__title");
let cityWind = document.querySelector(".city__wind");
let cityTemp = document.querySelector(".city__temp");
let recentlyWrapper = document.querySelector(".recently__wrapper");
let favoriteWrapper = document.querySelector(".favourite__wrapper");

let recentlyCities = []; 
let favoriteCities = [];

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchWeather(elInput.value.trim());
  elInput.value = "";
});

function fetchWeather(city = "tashkent") {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3fc2a8574e4cea25dc6318fa55f22c09&units=metric`
  )
    .then((res) => res.json())
    .then((data) => renderData(data));
}

function renderData(city) {
  if (!city.name) {
    cityTitle.innerHTML = "City is not found 🤷🏼";
    cityTemp.innerHTML = "Try again please 😊";
    cityWind.innerHTML = "";
    return;
  }

  let flagCode = city.sys.country.toLowerCase();
  let flagURL = `https://flagcdn.com/48x36/${flagCode}.png`;

  cityTitle.innerHTML =
    city.name + ` <img src="${flagURL}" alt="${flagCode}" />`;
  cityTemp.innerHTML = city.main.temp + " °C";
  cityWind.innerHTML = city.wind.speed + " M/s";

  if (!recentlyCities.includes(city.name)) {
    recentlyCities.push(city.name);
    renderHistory(recentlyCities, recentlyWrapper);
  }
}

function renderHistory(arr, wrapper) {
  wrapper.innerHTML = "";
  arr.forEach((el) => {
    let btn = document.createElement("button");
    btn.classList.add("history-btn");

    let heart = document.createElement("i");
    let isLiked = favoriteCities.some((favCity) => favCity.name === el);
    heart.classList.add("bi", isLiked ? "bi-heart-fill" : "bi-heart");
    heart.style.color = "red";

    btn.textContent = el;
    btn.appendChild(heart);
    wrapper.appendChild(btn);

    btn.addEventListener("click", () => {
      fetchWeather(el);
    });

    heart.addEventListener("click", (e) => {
      e.stopPropagation();

      let favIndex = favoriteCities.findIndex((city) => city.name === el);

      if (favIndex === -1) {
        let favorite = {
          name: el,
          isLiked: true,
        };
        favoriteCities.push(favorite);
        heart.classList.remove("bi-heart");
        heart.classList.add("bi-heart-fill");
      } else {
        favoriteCities.splice(favIndex, 1);
        heart.classList.remove("bi-heart-fill");
        heart.classList.add("bi-heart");
      }

      renderFav(favoriteCities, favoriteWrapper);
    });
  });
}

function renderFav(arr, wrapper) {
  wrapper.innerHTML = "";
  arr.forEach((el) => {
    let li = document.createElement("li");
    li.textContent = el.name;
    wrapper.appendChild(li);
  });
}

fetchWeather();

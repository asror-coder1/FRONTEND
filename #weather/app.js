let elForm = document.querySelector(".form");
let elInput = document.querySelector(".city");
let cityTitle = document.querySelector(".city__title");
let cityTemp = document.querySelector(".city__temp");
let cityWind = document.querySelector(".city__wind");
let cityList = document.querySelector(".city-list");
let favoriteList = document.querySelector(".favorite-list");

let savedCities = [];
let favoriteCities = [];

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = elInput.value.trim().toLowerCase();
  if (!cityName) return;

  fetchWeather(cityName);
  elInput.value = "";
});

function fetchWeather(city = "london") {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=03e6a2b15c6d93c1a3ebe3827a94ce1c`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.name) {
        cityTitle.textContent = "City not found 😒";
        cityTemp.textContent = "Try again please 👌";
        cityWind.textContent = "";
        return;
      }

      renderWeather(data);

      let validCity = data.name.toLowerCase();
      if (!savedCities.includes(validCity)) {
        savedCities.push(validCity);
        renderSavedCities();
      }
    })
    .catch(() => {
      cityTitle.textContent = "Something went wrong 😕";
      cityTemp.textContent = "";
      cityWind.textContent = "";
    });
}

function renderWeather(data) {
  let countryCode = data.sys.country.toLowerCase();
  let flagUrl = `https://flagcdn.com/48x36/${countryCode}.png`;

  cityTitle.innerHTML = `${data.name} <img src="${flagUrl}" alt="flag">`;
  cityTemp.textContent = `${data.main.temp} °C`;
  cityWind.textContent = `${data.wind.speed} M/s`;
}

function renderSavedCities() {
  cityList.innerHTML = "";

  savedCities.forEach((city) => {
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-outline-secondary", "me-2", "mb-2");

    let isFav = favoriteCities.includes(city);

    btn.innerHTML = `
      ${capitalize(city)} 
      <i class="bi ${
        isFav ? "bi-heart-fill text-danger" : "bi-heart"
      } favorite-icon" data-city="${city}"></i>
    `;

  
    btn.addEventListener("click", (e) => {
      if (!e.target.classList.contains("favorite-icon")) {
        fetchWeather(city);
      }
    });

    cityList.appendChild(btn);
  });

  addHeartListeners();
  renderFavorites();
}

function addHeartListeners() {
  const hearts = document.querySelectorAll(".favorite-icon");
  hearts.forEach((heart) => {
    heart.addEventListener("click", (e) => {
      e.stopPropagation(); 
      const city = heart.getAttribute("data-city");
      toggleFavorite(city);
    });
  });
}

function toggleFavorite(city) {
  const index = favoriteCities.indexOf(city);
  if (index === -1) {
    favoriteCities.push(city);
  } else {
    favoriteCities.splice(index, 1);
  }
  renderSavedCities();
}

function renderFavorites() {
  favoriteList.innerHTML = "";
  favoriteCities.forEach((city) => {
    let li = document.createElement("li");
    li.textContent = capitalize(city);
    favoriteList.appendChild(li);
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

fetchWeather();

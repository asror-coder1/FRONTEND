const filmsWrapper = document.querySelector(".films__wrapper");
const elInput = document.querySelector("#search");
const selectValue = document.querySelector("#sort");

function displayMovi(films) {
  let i = 0;
  while (i < films.length) {
    filmsWrapper.insertAdjacentHTML(
      "beforeend",
      `
           <li class="film__box">
            <img
              src="${films[i].poster}"
              alt="shazam"
              class="film-img"
            />
            <div class="film__info">
              <p class="film__id"></p>
              <h2 class="film__title">${films[i].title}</h2>

              <p class="film__date">${films[i].release__date}</p>

              <ul class="film__genres">
                <li class="film__genre">${films[i].overview}</li>
                <li class="film__genre">${films[i].genres}</li>
                <li class="film__genre">Fantasy</li>
              </ul>

              <div class="film__buttons">
                <button class="btn-more">More</button>
                <button class="btn-save">Save</button>
              </div>
            </div>
          </li> -->`
    );
    i++;
  }
}



// elInput.addEventListener("input", function () {
    //   const searchText = this.value.toLovercase();
    //   const filmItems = document.querySelectorAll(".film");
    
    //   filmItems.forEach((film) => {
        //     const filmTitle = film.querySelector(".title").text(toLoverCase);
        //     if (filmTitle.includes(searchText)) {
            //       film.style.display = "block";
            //     } else {
                //       film.style.display = "none";
                //     }
                //   });
                // });
                
                function updateMovies() {
                    const inputValue = elInput.value;
                    const selectValue = elInput.value;
                    
                    let filteredMovies = films.filter((el) =>
                        el.title.toLowerCase().includes(inputValue.toLowerCase)
                );
                if (selectValue === "a-z") {
                    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
                }
                if (selectValue === "z-a") {
                    filteredMovies.sort((b, a) => b.title.localeCompare(a.title));
                }
                filmsWrapper.textContent = "";
                displayMovi(filteredMovies);
                
                
            }


displayMovi(films);
    
    elInput.addEventListener("input", updateMovies);
    selectValue.addEventListener("input", updateMovies);

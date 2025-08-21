const filmsWrapper = document.querySelector(".films__wrapper")
let i = 0

while (i<films.length) {
    filmsWrapper.insertAdjacentHTML("beforeend",
        `
        <li class="film ">
                        <img 
                        src="${films[i].poster}" 
                        alt="shazam">
                        
                        <div class="film__info">
                            <h2 class="title">Shazam</h2>
                            <p class="film__release-date">2019</p>
                            <p class="film__genres"> Action,Comedy,Fantasy</p>
                            
                            <div class="film__btns"></div>
                            <button>More</button>
                            <button>Save</button>

                        </div>
                    </li>
        `)


    
}
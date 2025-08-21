// let inputDate = document.querySelector("#date")
// let text = document .querySelector("#text")

// let weekDays = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]
// inputDate.addEventListener("input",()=>{
//     let now = new Date(inputDate.value).getDay()
//     text.textContent = weekDays[now]
// })



let text = document.querySelector("#text")
let inputDate = document .querySelector("#date")
let next = document.querySelector('.next')
let nextbefore = document.querySelector('.nextbefore')


let weekDays = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]
inputDate.addEventListener("input",()=>{
    let now = new Date(inputDate.value).getDay()
    text.textContent = weekDays[now]
})

let date = new Date()

next.addEventListener("click", () => {
    date.setDate(date.getDate() + 1)

    inputDate.valueAsDate=date
    text.textContent = weekDays[date.getDay()];
})

inputDate.valueAsDate = date;



// let data = new Date()

// nextbefore.addEventListener("click", () => {
//     date.setDate(date.getDate() - 1)

//     inputDate.valueAsDate=date
//     text.textContent = weekDays[date.getDay()];
// })

// inputDate.valueAsDate = data;
const item=document.querySelectorAll("li");
const ul=document.querySelector("ul");
console.log(items);
  
const newLi=document.createElement("li")
newLi.innerText="ASROR"
ul.appendChild(newLi);
//for orqali har bir elementga hodisa ulashg
//har safar for aylanib chiqadi
//js orqali yangi element qushsam u ishlamaydi
// for(let i =items.lenght:++){
//     items[i].addEventListener("click",function (){
//         console.log(items[i].innerText)
//     })
// }

// ul.addEventListener("click",function (event){
//     if(event.target.tagName ==="LI"){
//         console.log(event.target.innerText);
//     }
// })

//Event deligation orqali hodisa qushish
///for ishlatilmaydi
//js orqali yangi element qushsak ishlaydi

ul.addEventListener("click",funktion (){
  if(event.target.tagName=== "LI")
    console.log("LI bosildi")
  if(event.target.tagName=== "Div")
    console.log("Div bosildi")
  if(event.target.tagName=== "BUTTON")
    console.log("BUTTON bosildi")

  if(event.tagName ==="BUTTON")
    event.target.parentElement.remove
})



  



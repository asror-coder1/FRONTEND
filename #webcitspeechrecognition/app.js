const elBtn = document.querySelector(".btn")
let eltext = document.querySelector(".text")
let record = new webkitSpeechRecognition()

let words =['olma','banan','kivi']

let wordIndex = Math.floor(Math . random()*words.length);

    

elBtn.onclick=()=>{
record.start()
}


record.onresult=function(evt){
    console.log(evt.results[0][0].transcript)
}


record.onend =()=>{
    console.log("Yozish tugadi")

}

record.onerror=(err)=>{
    console.log(err,"Xato bor")
}






let add =()=>{

    alert("I am add function")
}

let changeColor = ()=>{

    let card1 = document.querySelector(".card1")
    card1.style.backgroundColor="yellow"
}
let changeColor2 = ()=>{

    let card1 = document.querySelector(".card1")
    card1.style.backgroundColor="red"
}



let card2 = document.querySelector(".card2")

card2.addEventListener("mouseover",()=>{
    card2.style.backgroundColor = "blue"
})
card2.addEventListener("mouseleave",()=>{
    card2.style.backgroundColor = "green"
})



let uName = document.getElementById("uName")
let h2 = document.getElementById("display")
uName.addEventListener("keyup",(e)=>{

    display.innerText = e.target.value 
})






let createDiv = ()=>{

   let div = document.createElement("div")

   div.classList.add("card2")

   div.innerHTML = `<h3>I am card from js</h3>`

   let btn = document.getElementById("btn")

   btn.after(div)
}

let btn2 = document.getElementById("btn2")

btn2.addEventListener("click",()=>{
     let div = document.createElement("div")

   div.classList.add("card2")

   div.innerHTML = `<h3>I am card2 from js</h3>`

   let h1 = document.getElementById("h1")

   h1.after(div)
})


let form = document.querySelector("form")

// console.log(form)

form.addEventListener("submit",(e)=>{

    e.preventDefault()

    let num1 = parseInt( document.getElementById("num1").value)
    let num2 = parseInt( document.getElementById("num2").value)

    console.log(num1 + num2)

    console.log("submitted")
})
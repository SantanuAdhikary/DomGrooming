
// !  how to target any element 


// ? targetting by the id selector 


let logo = document.getElementById("logo")
console.log(logo)


// ?  targetting by the class name


let boxes = document.getElementsByClassName("box")

console.log(boxes)

let secondBox = boxes[1]

console.log(secondBox)


let arr = [10,20,30,40,50]
console.log(arr[2])



// ? targetting by tagname

let li = document.getElementsByTagName("li")
console.log(li)

let secondLi = li[1]
console.log(secondLi)


// ? targetting by the selector 


//! by id 

let greet = document.querySelector("#greet")
console.log(greet)

// ! by class 

let box = document.querySelector(".box")
console.log(box)

// ! tagname

let list = document.querySelector("li")
console.log(list)



// !  innerText , innerHTML 

let firstBox = document.querySelector(".box")

console.log(firstBox)

console.log(firstBox.innerText)
console.log(firstBox.innerHTML)



let fourthBox = boxes[3]
console.log(fourthBox)

fourthBox.innerText = "hello how are you"

fourthBox.innerHTML = ` <h1>box4</h1>
<p>Lorem ipsum dolor sit amet.</p>
<button>get started</button> `



// !  how to style 

let thirdLi = li[2]
console.log(thirdLi)
thirdLi.style.color="red"

fourthBox.style.backgroundColor = "gray"
fourthBox.style.color="white"


// !  how to add or remove the class 


let firstContainer = document.querySelector(".container")

console.log(firstContainer)

console.log(firstContainer.classList)

firstContainer.classList.add("dark")
console.log(firstContainer.classList)



let container2 = document.querySelector(".container2")

container2.classList.add("light")
//document->html
//querySelector-> java script can select html query

// document.querySelector("h1") // for element
// document.querySelector("#box") // for id
// document.querySelector(".box") // for class

// 1. Selecting elements
var a = document.querySelector("h1") //store in a variable
console.log(a)

// 2. changing HTML
var a = document.querySelector("h1")
a.innerHTML = "Changed using JS"

//another method
// var a = document.querySelector("h1").innerHTML = "Changed using JS"

// 3. changing CSS
var a = document.querySelector("h1")
a.style.color = "blue"
a.style.backgroundColor = "yellow"

// 4. event listener 
var a = document.querySelector("h1")
a.addEventListener("click", function(){
    a.style.color = "red"
    // a.innerHTML= "Changed using event listener"
    // a.style.backgroundColor = "green"
})



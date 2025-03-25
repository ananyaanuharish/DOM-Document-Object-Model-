var b = document.querySelector("#bulb")
var c = document.querySelector("button")

var flag = 0

c.addEventListener("click", function() {
    if(flag == 0 ){
        b.style.backgroundColor="red"
        console.log("cliocked")
        flag = 1
    }else{
        b.style.backgroundColor="transparent"
        console.log("again cliocked") 
        flag = 0
    }
})
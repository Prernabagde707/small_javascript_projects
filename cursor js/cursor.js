var main= document.querySelector("#main")

var cursor = document.querySelector(".cursor")

main.addEventListener("mousemove", function(ex){
    cursor.style.left= ex.x+"px"
    cursor.style.top= ex.y+"px"
})
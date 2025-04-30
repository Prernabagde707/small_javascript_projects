var add=document.querySelector("#add")
var h=document.querySelector("h5")

var count=0
add.addEventListener("click", function(){
    if(count==0){
        h.innerHTML="Friends"
        console.log("added")
         h.style.color="green"
         add.innerHTML="Remove Friend"
         count=1

    } else{
        h.innerHTML="Stranger"
        h.style.color="red"
        console.log("removed")
        add.innerHTML="AddFriend"
        count=0

    }
    
})


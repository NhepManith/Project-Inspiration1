const Click1 = document.querySelector("#Click1");
const popup= document.querySelector(".popup");
const appear =document.querySelector("#appear")
Click1.addEventListener("click", function(){
    popup.style.display="block";
})

popup.addEventListener("click", function(){
    appear.style.display="none"
})

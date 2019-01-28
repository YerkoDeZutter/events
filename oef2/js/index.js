let hovers = document.querySelectorAll(".hoverMe");

hovers.forEach(hover =>{
  hover.addEventListener("mouseover", removeMe);
})

function removeMe(evt){
  evt.currentTarget.style.background = "none";
}





reset.addEventListener("click", comeBack);

function comeBack(){
  hovers.forEach(hover =>{
    hover.style.background = "#00aaaa";
  })
}

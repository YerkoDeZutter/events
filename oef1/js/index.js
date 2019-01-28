let hovers = document.querySelectorAll(".hoverMe");

hovers.forEach(hover =>{
  hover.addEventListener("mouseover", removeMe);
})



function removeMe(evt){
  evt.currentTarget.style.background = "none";
  evt.currentTarget.addEventListener("mouseout", addMe)
}

function addMe(evt){
  evt.currentTarget.style.background = "#00aaaa";
  console.log(11);
}

document.addEventListener("keydown", changeCol);
let colors = ["blue", "red", "green", "black", "white"]

function changeCol(evt) {
  if(evt.keyCode >= 47 && evt.keyCode <= 57){
    let i = Math.floor(Math.random()*colors.length)
    character.style.background = colors[i];
  }
}

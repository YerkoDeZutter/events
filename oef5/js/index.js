document.addEventListener("keydown", directionGiven);
document.addEventListener("keyup", keyLetGo);

function directionGiven(evt) {

  if(evt.keyCode == 38){

    up.classList.add("highlight");
    // evt.addEventListener("keyup", keyLetGo);
    document.addEventListener("keyup", keyLetGo);
  } else if (evt.keyCode == 40) {

    down.classList.add("highlight");

  } else if (evt.keyCode == 37) {

    left.classList.add("highlight");

  } else if (evt.keyCode == 39) {

    right.classList.add("highlight");

  }

}

function keyLetGo(evt){
  if(evt.keyCode == 38){

    up.classList.remove("highlight");

  } else if (evt.keyCode == 40) {

    down.classList.remove("highlight");

  } else if (evt.keyCode == 37) {

    left.classList.remove("highlight");

  } else if (evt.keyCode == 39) {

    right.classList.remove("highlight");

  }
}

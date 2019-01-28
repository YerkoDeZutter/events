let body = document.querySelector("body");

body.addEventListener("mousemove", testing);

function testing(evt){
  Xaxis.textContent = "the X axis of your mouse is: " + evt.clientX
  Yaxis.textContent = "the Y axis of your mouse is: " + evt.clientY
}

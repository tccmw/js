const main = document.querySelector("main");
const canvas = document.querySelector("#Input");
const ctn = canvas.getContext('2D');

ctn.fillText = "white";
ctn.fillText(0,0,canvas.width, canvas.height);

canvas.addEventListener("contextmenu", e => {
  e.preventDefault();
})

const.btns = document.querySelector("#change li");

Array.

paint.addEventListener("click", () =>{
  if(paint.innerText== 'PAINT MINT'){
    canvas.style.backgroundcolor = "aquamarine";
    ctn.fillText = "aquamarine"; 
    ctn.fillText(0,0,canvas.width, canvas.height);
    paint.innerText = 'PAINT WHITE';
  }
  else{
    canvas.style.backgroundcolor = "white";
    ctn.fillText = "white"; 
    ctn.fillText(0,0,canvas.width, canvas.height);
    paint.innerText = 'PAINT MINT';
  }
  })
const lineWidth = document.querySelector("#line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let Mouse = false;

function onMove(event){
  if(Mouse){
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX,event.offsetY);
}

function onMouseDown(){
  Mouse = true;
}

function onMouseUp(){
  Mouse = false;
  ctx.beginPath();
}

function lineWidthchage(event){
  ctx.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove",onMove);
canvas.addEventListener("mousedown",onMouseDown);
document.addEventListener("mouseup",onMouseUp);
document.addEventListener("change",lineWidthchage);
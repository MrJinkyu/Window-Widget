const canvas = document.querySelector("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")! as CanvasRenderingContext2D;
const colors = document.querySelectorAll(".color");
const colorsArr = Array.from(colors);
const paintBrush = document.querySelector(".fa-paintbrush")! as HTMLElement;
const clear = document.querySelector(".fa-rotate-right")! as HTMLElement;
const eraser = document.querySelector(".fa-eraser")! as HTMLElement;
const file = document.querySelector("#file")! as HTMLInputElement;
const saveBtn = document.querySelector(".fa-cloud-arrow-up")! as HTMLElement;
const CANVAS_SIZE = 350;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.lineCap = "round";
ctx.lineWidth = 5;

let isDraw = false;
let isEraser = false;
function onCanvasMove(e: MouseEvent) {
  if (isDraw) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
  ctx.moveTo(e.offsetX, e.offsetY);
}

function onCanvasDrawSart() {
  isDraw = true;
}

function onCanvasDrawStop() {
  isDraw = false;
  ctx.beginPath();
}

function onClickColor(e: any) {
  isEraser = false;
  activeEraser();
  const color = e.target.dataset.color;
  ctx.strokeStyle = color;
  paintBrush.style.color = color;
}

function onClearCanvas() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 350, 350);
}

function onClickEraser() {
  if (isEraser) {
    isEraser = false;
  } else {
    isEraser = true;
  }
  activeEraser();
}

function activeEraser() {
  if (isEraser) {
    eraser.style.color = "white";
    ctx.strokeStyle = "white";
  } else {
    eraser.style.color = "black";
    ctx.strokeStyle = "black";
    paintBrush.style.color = "black";
  }
}
function onSelectedFile(e: any) {
  const seleted = e.target.files[0];
  const url = URL.createObjectURL(seleted);
  const image = document.createElement("img");
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, 350, 350);
  };
}

function onClickSaveBtn() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "내그림";
  a.click();
}

function onClickBrush() {
  isEraser = false;
  activeEraser();
  ctx.strokeStyle = "black";
  paintBrush.style.color = "black";
}
canvas.addEventListener("mousemove", onCanvasMove);
canvas.addEventListener("mousedown", onCanvasDrawSart);
canvas.addEventListener("mouseup", onCanvasDrawStop);
canvas.addEventListener("mouseleave", onCanvasDrawStop);
colorsArr.forEach((color) => color.addEventListener("click", onClickColor));
clear.addEventListener("click", onClearCanvas);
eraser.addEventListener("click", onClickEraser);
file.addEventListener("change", onSelectedFile);
saveBtn.addEventListener("click", onClickSaveBtn);
paintBrush.addEventListener("click", onClickBrush);

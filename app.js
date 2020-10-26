const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle="#2c2c2c";
ctx.linewidth = 2.5;

let painting = false;


function stopPainting(){
    painting = false;

}

function startPainting(){
   painting= true; 
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
 

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;


}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleSaveClick(event){
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "hello";
    link.click();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

if(range){
    range.addEventListener("input", handleRangeChange);
}


if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
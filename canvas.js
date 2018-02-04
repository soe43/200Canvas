var board=document.getElementById("board");
var ctx=board.getContext("2d");
var clearbutt=document.getElementById("clear");
var togglebutt=document.getElementById("toggle");

var drawShape = 'square';

var drawRect = function(e){
    var mouseX = e.pageX - 35;
    var mouseY = e.pageY - 35;
    ctx.fillStyle = "lightsteelblue";
    ctx.fillRect(mouseX, mouseY, 50, 50);
};

var drawCircle = function(e){
    var mouseX = e.clientX - 11;
    var mouseY = e.clientY - 11;
    ctx.fillStyle = "lightsteelblue";
    ctx.beginPath()
    ctx.arc(mouseX, mouseY, 25, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
};

var clear = function(){
    ctx.clearRect(0,0,500,500);
};

var switchShapes = function(){
    if(drawShape == 'circle'){
	drawShape = 'square';
    }
    else{
	drawShape = 'circle';
    }
    console.log(drawShape)
};

var addShape = function(e){
    if(drawShape == 'circle'){
	drawCircle(e);
    }
    else{
	drawRect(e);
    }
}

board.addEventListener("click", addShape);
clearbutt.addEventListener("click", clear);
togglebutt.addEventListener("click", switchShapes);


var board=document.getElementById("board");
var ctx=board.getContext("2d");
var clearbutt=document.getElementById("clear");
var togglebutt=document.getElementById("toggle");

var drawShape = 'square';
var circleNum = 0;

var previousX;
var previousY;

var drawRect = function(e){
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    ctx.fillStyle = "lightsteelblue";
    ctx.fillRect(mouseX, mouseY, 50, 50);
};

var drawCircle = function(e){
    if(circleNum == 0){
	var mouseX = e.offsetX;
	var mouseY = e.offsetY;
	ctx.fillStyle = "pink";
	ctx.beginPath();
	ctx.arc(mouseX, mouseY, 25, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	circleNum++;
	previousX = mouseX;
	previousY = mouseY;
	console.log(circleNum);
    }
    else{
	var mouseX = e.offsetX;
	var mouseY = e.offsetY;
	ctx.fillStyle = "pink";
	ctx.beginPath()
	ctx.moveTo(previousX, previousY);
	ctx.lineTo(mouseX, mouseY);
	ctx.stroke();
	previousX = mouseX;
	previousY = mouseY;
	ctx.beginPath();
	ctx.arc(mouseX, mouseY, 25, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	circleNum++;
	console.log(circleNum);
    }
};

var clear = function(){
    ctx.clearRect(0,0,500,500);
    circleNum = 0;
    previousX = 0;
    previousY = 0;
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


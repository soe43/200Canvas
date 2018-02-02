var ctx = document.getElementbyID("board");
var clearbutt = document.getElementbyID("clear");
var togglebutt = document.getElementbyID("toggle");

var drawShape = 'circle';

var drawRect = function(e){
    mouseX = e.pageX;
    mouseY = e.page;
};

var drawCircle = function(e){

};

var clear = function(e){
    ctx.clearRect(0,0,500,500);
};

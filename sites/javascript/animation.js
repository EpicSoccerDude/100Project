var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var h = window.innerHeight;
var w = window.innerWidth;
c.height = window.innerHeight;
c.width = window.innerWidth;
var x = 1;
var y = 1;
var draw = function() {
ctx.fillStyle = "violet";
ctx.fillRect(x,y,150,75);
x += 15
y += 15
}
setInterval(draw,300);

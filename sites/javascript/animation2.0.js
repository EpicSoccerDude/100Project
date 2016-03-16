var c = document.getElementById("Can");
var ctx = c.getContext("2d");
var h = window.innerHeight;
var w = window.innerWidth;
c.width = window.innerWidth;
c.height = window.innerHeight;

var x = 25;
var y = 25;
var e = 20;
var z = 20;

var draw = function() {
ctx.fillStyle = "skyblue";
ctx.fillRect(x,y,20,10);
x += 1
y += 1
}
setInterval(draw,50);

var whatever = function() {
ctx.fillStyle = "red";
ctx.fillRect(e,z,80,50);
e += 10
z += 10
}
setInterval(whatever,1000);

var blue = function() {
ctx.fillStyle = "blue";
ctx.fillRect(e,z,150,75);
e += 10
z += 10
}
setInterval(blue,900);


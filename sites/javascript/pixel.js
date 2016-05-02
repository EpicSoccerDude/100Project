var epiccolors = function() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

var c = document.getElementById("my_canvas");
var ctx = c.getContext("2d");
randomcolors = epiccolors();

var h = window.innerHeight;
var w = window.innerWidth;

c.height = h;
c.width = w;

var particle_count = 10;
var particles = [];

var start = function() {
  for(var i = 0; i < particle_count; i++) {
    particles.push(new particle());
  }
}

var mouse = {
}
var track = function(e) {
  mouse.x = e.pageX
  mouse.y = e.pageY
  start()
}
c.addEventListener("mousemove", track)

function particle() {
  this.speed = {
    x: -2.5 + Math.random() * 5,
    y: -2.5 + Math.random() * 5
  }
    this.accel = {
    x: -2 + Math.random() * 3,  
    y: -2 + Math.random() * 3
  }
  this.location = {
    x: mouse.x,
    y: mouse.y
  }
  this.radius = 10 + Math.random() * 15
}

var draw = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "lighter";

    for(i = 0; i < particles.length; i++) {
        var p = particles[i];

        ctx.beginPath()
        ctx.fillStyle = epiccolors();
        ctx.rect(p.location.x, p.location.y, p.radius, Math.PI * 10, false);
        ctx.fill()
        p.speed.x += p.accel.x;
        p.location.y += p.speed.y;
        p.location.x += p.speed.x;
        p.speed.y += p.accel.y;
    }
}

setInterval(draw, 45);

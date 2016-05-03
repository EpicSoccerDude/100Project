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

var particle_count = 100;
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
c.addEventListener("click", track)

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
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fillRect(0, 0, w, h);

    for(i = 0; i < particles.length; i++) {
        var p = particles[i];

        ctx.beginPath()
        ctx.fillStyle = epiccolors();
        ctx.rect(p.location.x, p.location.y, p.radius, Math.PI * 8, false);
        ctx.fill()
    }
}

setInterval(draw, 45);

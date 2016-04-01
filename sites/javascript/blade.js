var c = document.getElementById("my_canvas")
var ctx = c.getContext("2d")

var h = window.innerHeight
var w = window.innerWidth

c.height = h
c.width = w 

var particle_count = 90
var particles = []

var start = function() {
  for(var i = 0; i < particle_count; i++) {
    particles.push(new particle())
  }
}
setInterval(start,2200)

function particle() {
  this.speed = {
    x: -2.3 + Math.random() * 5,
    y: -2.3 + Math.random() * 5
  }
    this.accel = {
    x: -2 + Math.random() * 3,
    y: -2 + Math.random() * 3
  }
  this.location = {
    x: w/2,
    y: h/2
  }
  this.radius = 10 + Math.random() * 15
}

var draw = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0,w, h);
    ctx.globalCompositeOperation = "darker";

    for(i = 0; i < particles.length; i++) {
        var p = particles[i];

        ctx.beginPath()
        ctx.fillStyle = "blue"
        ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, true);
        ctx.fill()
        
        p.speed.x += p.accel.x;
        p.location.y += p.speed.y;
        p.location.x += p.speed.x;
        p.speed.y += p.accel.y;
    }
}

setInterval(draw, 100)


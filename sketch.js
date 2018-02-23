var numLines = 10;
var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for (var i = 0; i < numLines; i++) {
    var foo = new Particle();
    particles.push(foo);
  }
}

function draw() {
  if (frameCount%3 === 0) {
    //background(255, 2);
  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].update();
  }
  push();
  translate(width/2,height/2);
  //noStroke();
  fill(255,100);
  ellipse(0,0, width/4,width/4);
  pop();
  }

}
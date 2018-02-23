var Particle = function() {
  this.t = 0.0;
  this.offset = 1/(random(30,200));
  this.col = [random(255),random(255),random(255),random(255)];
  this.n;
  this.sw = random(500);
};


Particle.prototype.update = function() {
  this.t = this.t + this.offset;
  this.n = noise(this.t) * width;
};

Particle.prototype.show = function() {
  strokeWeight(this.sw);
  stroke(...this.col);
  line(this.n, 0, this.n, height);
};
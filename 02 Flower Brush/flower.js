// Creates Flower class
class Flower {
  constructor(x, y, hue, size) {
    // Assign parameters to variables x and y
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.midSize = size;
    // this.alpha = 100
  }

  draw() {
    colorMode(HSB, 100);
    noStroke();


    // fill(this.hue, 100, 100, this.alpha);

    fill(this.hue, 100, 100)
    circle(this.x, this.y, this.midSize);

    // Fade draw each time this function rans
    // this.alpha = this.alpha - 1
  }
}

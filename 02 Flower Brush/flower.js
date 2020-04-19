// Creates Flower class
class Flower {
  constructor(x, y, hue, size) {
    // Assign parameters to variables x and y
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.midSize = size;
    // this.alpha = 100
    
    // Petals
    this.numOfPetals = random(5,10)
    this.petalDistance = size - 6

  }

  draw() {
    colorMode(HSB, 100);
    noStroke();
    // fill(this.hue, 100, 100, this.alpha);
    fill(this.hue, 100, 100)
    circle(this.x, this.y, this.midSize);

    // Creates petals based on numOfPetals
    for (let i = 0; i < this.numOfPetals; i++) {

        // Calculates angles based on i
        let angle = TWO_PI * i / this.numOfPetals

        let petalX = this.petalDistance * cos(angle)
        let petalY = this.petalDistance * sin(angle)

        circle(this.x + petalX, this.y + petalY, 10)
    }

    // Fade draw each time this function rans
    // this.alpha = this.alpha - 1
    
  }
}

// Movement variables
let position;
let speed;

// Ball radius
let radius;

// Animation sound clip
let sound;

// Preloads sound
function preload() {
  sound = loadSound("drop.mp3");
}

// Creates animation setup
function setup() {
  // Sets up a canvas spanning the entire window
  createCanvas(windowWidth, windowHeight);

  // Adds values to variables
  position = createVector(100, 50);
  speed = createVector(5, 5);

  // Sets circle radius
  radius = 50;
}

function draw() {
  // Sets canvas background
  background("#FFB6C155");

  // Circle properties
  fill("white");
  noStroke();

  // Draws circle
  circle(position.x, position.y, radius * 2);

  // Animates circle
  // ↳ Adds speedX to PositionX on each frame
  // positionX = positionX + speedX
  // ↳ Adds speedY to positionY on each frame
  // positionY = positionY + speedY

  // ↳ Adds speed to position object
  position.add(speed);

  // Slows down ball
  speed.mult(0.999)

  // Reverses position and plays a sound when touching the horizontal egdes of the window
  if (position.x > windowWidth - radius || position.x < radius) {
    speed.x = speed.x * -1;
    sound.play();
  }
  // Reverses position and plays a sound when touching the horizontal egdes of the window.
  if (position.y > windowHeight - radius || position.y < radius) {
    speed.y = speed.y * -1;
    sound.play();
  }

  // Modulates the position of ball to be between the left (radius) and right edge (windowWidth - radius). The ball won't disappear when resizing the browser window.
  position.x = constrain(position.x, radius, windowWidth - radius);
  position.y = constrain(position.y, radius, windowHeight - radius);
}

function mouseClicked() {
    // Picks a number between 0 and TWO PI
    let angle = random(TWO_PI)
    speed.rotate(angle)
}

// Automatically resizes canvas on windowResize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



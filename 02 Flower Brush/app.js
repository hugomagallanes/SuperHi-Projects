
// Stores flowers
let flowers

// Sets brush's hue
let hue 

// Sets brush's size
let size



function setup() {
  createCanvas(windowWidth, windowHeight);
  flowers = []
  hue = random(0,100)
  size = 20
}

// Continously redraws frame
function draw() {

  // ↳ Sets background color
  background("#111118");

  // ↳ Draws flower based on flowers array
  flowers.forEach( flower => {
    flower.draw()
  })


}

function mouseDragged() {

  // Increases variable value on mouseDrag
  hue = hue + .1
  size = size + 1

  // Constrains brush size 20-100
  size = constrain(size, 20, 100)

  // Brush resets to blue at HSB 100
  if (hue > 100) {
    hue = 0
  }

  // Creates new instance of Flower and pushes it to flowers
  flowers.push(new Flower(mouseX, mouseY, hue, size))
}


function mouseReleased() {
  hue = random(0,100)
  size = 20
}
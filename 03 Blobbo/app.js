
// Creates blob object 
let blob


function setup() {
  createCanvas(windowWidth, windowHeight);
  blob = new Blobbo()
}

// Continously redraws frame
function draw() {
  background("lightpink")
  blob.draw()
}
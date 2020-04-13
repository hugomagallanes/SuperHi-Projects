

function setup() {
    // Sets up a canvas spanning the entire window
    createCanvas(windowWidth, windowHeight)
}

function draw() {

    background("#ffffff55")

    // Circle properties
    fill("lightpink")
    noStroke()

    // Draws circle
    circle(mouseX,mouseY,50)
}
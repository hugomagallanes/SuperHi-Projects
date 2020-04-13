let positionX
let positionY
let speedX 
let speedY

// Sets ball size
let radius

function setup() {
    // Sets up a canvas spanning the entire window
    createCanvas(windowWidth, windowHeight)

    positionX = 100
    positionY = 50

    speedX = 5
    speedY = 5

    radius = 50
}

function draw() {
    // Sets canvas background
    background("#FFB6C155")

    // Circle properties
    fill("white")
    noStroke()

    // Draws circle
    circle(positionX,positionY, radius * 2)

    // Animates circle
    positionX = positionX + speedX
    positionY = positionY + speedY

    // Reverses position when touching the egdes of the window
    if (positionX > windowWidth - radius || positionX < radius) {
        speedX = speedX * -1
    }
    if (positionY > windowHeight - radius || positionY < radius) {
        speedY = speedY * -1
    }

    // Modulates positionX between left edge (radius) and right edge (windowWidth - radius)
    positionX = constrain(positionX, radius, windowWidth - radius)
    positionY = constrain(positionY, radius, windowHeight - radius)
}

// On windowResize redraws canvas
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}


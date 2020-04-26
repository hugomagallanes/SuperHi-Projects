// Set time variable for noise function
let time;

let noiseLevel;
let density;

let totalX;
let totalY;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#000000");

	// Sets time to 0
	time = 0;

	// noiseLevel = 0.0025;
	noiseLevel = 0.003;
	density = 10;

	totalX = windowWidth;
	totalY = windowHeight;
	// totalX = 100;
	// totalY = 100;
	// colorMode(HSL, 100);

	let colorA = color("#cc2b5e");
	let colorB = color("#753a88");

	for (let x = 0; x < totalX; x++) {
		for (let y = 0; y < totalY; y++) {
			let n = noise(x * noiseLevel, y * noiseLevel) + time;
			let rn = n * density - floor(n * density);

			// let finalColor = color(rn * 100, 100, 50);
			// let finalColor = lerpColor(colorA, colorB, rn);

			// let finalColor = colorA
			// if (rn > 0.75) {
			//   finalColor = colorB
			// }

			let d = map(rn, 0, 0.5, 0, 1);
			if (rn > 0.5) {
				d = map(rn, 0.5, 1, 1, 0);
			}

			let finalColor = lerpColor(colorA, colorB, d);

			set(x, y, finalColor);
		}
	}

	updatePixels();
	time = time + 0.001;
}

// Continously redraws frame
function draw() {}

// function mouseDragged() {

//   // let n = random()
//   // let n = noise(time * noiseLevel)
//   let n = noise (mouseX * noiseLevel, mouseY * noiseLevel)

//   let size = 10 + n * 10
//   // let colorA = color("#2727e6")
//   // let colorB = color("#222")
//   // let finalColor = lerpColor(colorB, colorA, n)

//   colorMode(HSL, 100)
//   let finalColor = color(n * 100, 100, 50)

//   noStroke()
//   fill(finalColor)
//   circle(mouseX, mouseY, size)

//   time = time + 1
// }

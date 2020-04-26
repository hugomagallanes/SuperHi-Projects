class Blobbo {
	// Object setup
	constructor() {
      this.numberOfPoints = 500;
      this.time = 0
   }
   
   wave(num, amp, freq, speed) {
      return amp * sin(freq * TWO_PI * num/this.numberOfPoints + this.time + speed)
   }

	draw() {
		noStroke();
      fill("teal");
      beginShape()

		for (let num = 0; num < this.numberOfPoints; num++) {

         // let frenquency = 5 // Number of up and down curves
         // let amplitude = 70 // Height of the curves

         let angle = TWO_PI * num / this.numberOfPoints
         let r = 250 
            + this.wave(num, 20, 3, 1) 
            + this.wave(num, 15, 7, 3)
            + this.wave(num, 5, 9, 0)
            + this.wave(num, 2, 13, -5)

         // let height = this.wave(num, 20, 5) + this.wave(num, 20, 3);

			// let xPos = 100 + num * 2;
         // let yPos = 100 + height;

         let xPos = (windowWidth / 2) + r * cos(angle)
         let yPos = (windowHeight / 2) + r * sin(angle)

         
         // circle(xPos, yPos, 2);
         vertex(xPos, yPos)
      }
      endShape()
      
      // circle(100,100,100)
      this.time = this.time + 0.01 
	}
}

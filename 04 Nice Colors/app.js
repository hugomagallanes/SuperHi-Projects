let layer1 = document.querySelector("div.layer1")
let layer2 = document.querySelector("div.layer2")
let button = document.querySelector("button")

const makeColor = () => {
  let hue = Math.random() * 360
  let saturation = 50 + Math.random() * 50
  let lightness = 40 + Math.random() * 50

  return `hsl(${hue},${saturation}%,${lightness}%)`
}

const makeGradient= () =>{
  let angle = Math.random() * 360
  let colorA = makeColor()
  let colorB = makeColor()

  return `linear-gradient(${angle}deg, ${colorA}, ${colorB})`
}

const changeBG= () => {
  layer1.style.backgroundImage = makeGradient()
  layer2.style.backgroundImage = makeGradient()
} 

changeBG()

button.addEventListener("click", function(){
  changeBG()
})
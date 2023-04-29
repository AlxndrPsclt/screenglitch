numLines = 803;
LINEBRIGHTNESS = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  CENTERLINE = Math.floor(numLines / 2) + random(-numLines, numLines);
  noStroke();
}

function draw() {
  background(3);
  
  // loop through all lines
  for (let i = 0; i < numLines; i++) {
    
    // calculate brightness based on distance from center line
    let brightnessVariation = map(abs(i - CENTERLINE), 0, CENTERLINE, 0, LINEBRIGHTNESS);
    let lineBrightness = LINEBRIGHTNESS - brightnessVariation + random(-10, 10);
    
    // calculate color based on position
    let hue = map(i, 0, numLines, 0, 360);
    let saturation = random(30, 70);
    let value = lineBrightness;
    
    // set fill color
    fill(hue, saturation, value);
    
    // draw line
    let x = width / 2 - (numLines / 2) + i;
    rect(x, 0, 1, height);
  }
}


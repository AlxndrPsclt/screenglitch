function setup() {

  BACKGROUND_FADE = '0.05';

  // Library setup
  createCanvas( window.screen.width * window.devicePixelRatio, window.screen.height* window.devicePixelRatio);
  noCursor();
  frameRate(10);
  colorMode(HSB);

  // Global image setup
  WIDTH = window.screen.width * window.devicePixelRatio;
  HEIGHT = window.screen.height * window.devicePixelRatio;
  CENTER_X = WIDTH / 2;
  CENTER_Y = HEIGHT / 2;

  tri = createTriangle();
  console.log(tri);

  // Default config; can be overrided later by a named, or custom config
  refreshColor = `rgba(0,0,0,${BACKGROUND_FADE})`;

  background(refreshColor);
}

function p(x,y,radius=0) {
  return {
    pointId: 1,
    x: x + int(random(0,radius)-radius),
    y: y + int(random(0,radius)-radius)
  }
}

function createTriangle(size=200) {
  p1 = p(int(random(2*size, CENTER_X)), int(random(2*size, CENTER_Y)), 0);
  p2 = p(p1.x, p1.y, size)
  p3 = p(p2.x, p2.y, size)
  return { id:1,
    p1: p1,
    p2: p2,
    p3: p3
  };

}

function draw() {
      // strokeColor = `rgba(${cellHue},${cellSaturation},${cellBrightness},${BACKGROUND_FADE})`;
      strokeColor = `rgba(20,40,80,${BACKGROUND_FADE})`;
      stroke(strokeColor);
      fill(`rgba(10,20,40,${BACKGROUND_FADE})`);
      strokeWeight(10);
      triangle(tri.p1.x, tri.p1.y, tri.p2.x, tri.p2.y, tri.p3.x, tri.p3.y);
      //if (currentMatrix[i][j] == 1 && prevMatrix[i][j] == 0) {
      // stroke(cellHue, cellSaturation, cellBrightness, cellAlpha);


}

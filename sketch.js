function setup() {

  BACKGROUND_FADE = '0.2';

  // Library setup
  createCanvas( window.screen.width * window.devicePixelRatio, window.screen.height* window.devicePixelRatio);
  noCursor();
  frameRate(25);
  colorMode(HSB);

  // Global image setup
  WIDTH = window.screen.width * window.devicePixelRatio;
  HEIGHT = window.screen.height * window.devicePixelRatio;
  CENTER_X = WIDTH / 2;
  CENTER_Y = HEIGHT / 2;

  NUMBER_OF_TRIANGLES = 10;
  DISPLACEMENT = 4;

  // Default config; can be overrided later by a named, or custom config
  refreshColor = `rgba(10,20,40,0.1)`;

  background(refreshColor);

  triangles=[];
  for (let i = 0, len = NUMBER_OF_TRIANGLES; i < len; i++) {
    triangles.push(createTriangle());
  }
}

function p(x,y,radius=0) {
  return {
    x: x + randval(radius),
    y: y + randval(radius)
  }
}

function t(p1,p2,p3) {
  return {
    p1: p1,
    p2: p2,
    p3: p3,
    A: distance(p1, p2),
    B: distance(p2,p3),
    C: distance(p3,p1),
  };
}

function createTriangle(size=200) {
  p1 = p(int(random(2*size, CENTER_X)), int(random(2*size, CENTER_Y)), 0);
  p2 = p(p1.x, p1.y, size);
  p3 = p(p2.x, p2.y, size);
  return t(p1, p2, p3);
}

function distance(p1, p2) {
  console.log(p1);
  console.log(p2);
  console.log(p1.y);
  console.log(p2.y);
  return Math.sqrt((p2.x - p1.x)**2 + (p2.y - p1.y)**2);
}

function randval(energy) {
  return int(random(-energy-0.5, energy+0.5));
}

function movePoint(point, energy) {
  console.log("movePoint");
  newPoint = p(point.x + randval(energy), point.y + randval(energy), 0);
  return newPoint;
}

function moveTriangle(tri, energy) {
  console.log("moveTriangle");
  newP1= movePoint(tri.p1, energy);
  newP2= movePoint(tri.p2, energy);
  newP3= movePoint(tri.p3, energy);

  return t(newP1, newP2, newP3);
}

function equilateralityCoeficient(tri) {
  ratioP = tri.A + tri.B + tri.C;
  console.log(tri.A);
  s = ratioP/2;
  e = ratioP/3;
  return Math.sqrt((s-tri.A)*(s-tri.B)*(s-tri.C)/(s-e)**3)
}

function draw() {
      // strokeColor = `rgba(${cellHue},${cellSaturation},${cellBrightness},${BACKGROUND_FADE})`;
      background(refreshColor);
      strokeColor = `rgba(40,80,160,${BACKGROUND_FADE})`;
      stroke(strokeColor);
      fill(`rgba(10,20,40,${BACKGROUND_FADE})`);
      strokeWeight(4);
      triangles.forEach( (tri, index) => {
//        console.log(tri);
        triangle(tri.p1.x, tri.p1.y, tri.p2.x, tri.p2.y, tri.p3.x, tri.p3.y);
        candidat1 = moveTriangle(tri, 5);
        candidat2 = moveTriangle(tri, 5);
        eq1=equilateralityCoeficient(candidat1);
        eq2=equilateralityCoeficient(candidat2);

        console.log("EQ");
        console.log(eq1);
        console.log(eq2);

        triangles[index] = (eq1 > eq2) ? candidat1 : candidat2;


//        tri.p1.x+=int(random(2*DISPLACEMENT+1))-DISPLACEMENT;
//        tri.p2.x+=int(random(2*DISPLACEMENT+1))-DISPLACEMENT;
//        tri.p3.x+=int(random(2*DISPLACEMENT+1))-DISPLACEMENT;
//        tri.p1.y+=int(random(2*DISPLACEMENT+1))-DISPLACEMENT;
//        tri.p2.y+=int(random(2*DISPLACEMENT+1))-DISPLACEMENT;
//        tri.p3.y+=int(random(2*DISPLACEMENT+1))-DISPLACEMENT;
      });

      //if (currentMatrix[i][j] == 1 && prevMatrix[i][j] == 0) {
      // stroke(cellHue, cellSaturation, cellBrightness, cellAlpha);
}

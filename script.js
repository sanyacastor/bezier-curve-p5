let points = [];

class Point {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.active = false;
  }

  clicked(mX, mY) {
    let d = dist(mX, mY, this.x, this.y);

    if (d < this.r) {
      this.active = true;
    } else {
      this.active = false;
    }
    return false;
  }

  dragged(mX, mY) {
    if (this.active) {
      this.x = mX;
      this.y = mY;
    }
  }

  show() {
    stroke("#1C2826");
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r);
  }
}

function mousePressed() {
  points.forEach((p) => p.clicked(mouseX, mouseY));
}

function mouseDragged() {
  points.forEach((p) => p.dragged(mouseX, mouseY));
}

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < 4; i++) {
    newPoint = new Point(random(0, 600), random(0, 600), 15);
    points.push(newPoint);
  }
}

function draw() {
  background("#EEF4D4");
  noFill();

  points.forEach((p) => p.show());

  stroke("#DAEFB3");
  strokeWeight(2);
  line(points[1].x, points[1].y, points[2].x, points[2].y);
  line(points[0].x, points[0].y, points[3].x, points[3].y);

  strokeWeight(4);
  stroke('#D64550');
  bezier(
    points[0].x,
    points[0].y,
    points[2].x,
    points[2].y,
    points[3].x,
    points[3].y,
    points[1].x,
    points[1].y
  );
}

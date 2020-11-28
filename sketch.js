function setup() {
  createCanvas(600, 600);
  background(111);
}

function draw() {
  
  strokeWeight(1);
  let w = random(1, 100);
  let h = random(1, 100);
  let xPos2 = random(1, 599);
  let yPos2 = random(1, 599);
  let r1 =random(0, 55)
  let r2 =random(0, 55)
  let r3 =random(0, 55)
  let r4 =random(0, 55)
  rect(xPos2, yPos2, w, h, r1, r2, r3, r4);
  let a2 = random(0, 255);
  let b2 = random(0, 255);
  let c2 = random(0, 255);
  // let o = random(0, 1);
  let f = color(a2, b2, c2);
  fill(f);
}

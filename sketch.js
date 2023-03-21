function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  // body
  fill(56, 137, 240);
  rect(150, 150, 100, 100, 10);
  
  // head
  fill(255);
  ellipse(200, 120, 80, 80);
  fill(56, 137, 240);
  ellipse(200, 120, 60, 60);
  
  // eyes
  fill(255);
  ellipse(180, 110, 20, 20);
  ellipse(220, 110, 20, 20);
  fill(0);
  ellipse(180, 110, 10, 10);
  ellipse(220, 110, 10, 10);
  
  // nose
  fill(255, 0, 0);
  ellipse(200, 135, 10, 10);
  
  // mouth
  stroke(0);
  strokeWeight(2);
  line(190, 150, 210, 150);
  
  // hat
  fill(255);
  rect(150, 90, 100, 30, 5);
  fill(56, 137, 240);
  rect(170, 70, 60, 20, 5);
}

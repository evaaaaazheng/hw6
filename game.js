// Variables
var playerHeight = 80
var playerWidth = 20
var playerSpeed = 8
var playerL = 200
var playerR = 200

var scoreL = 0
var scoreR = 0

var ballX = 300
var ballY = 200
var ballSize = 20
var ballXSpeed = 4
var ballYSpeed = -2

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  let L = scoreL;
    let R = scoreR;
  fill(255);

  textSize(60)
text(L, 150, 50, 300, 300);
  text(R, 400, 50, 300, 300);
strokeWeight(1);
stroke(51);
rect(300, 0, 2, 30);
  rect(300, 40, 2, 30);
   rect(300, 80, 2, 30);
  rect(300, 120, 2, 30);
    rect(300, 160, 2, 30);
    rect(300, 200, 2, 30);
  rect(300, 240, 2, 30);
    rect(300, 280, 2, 30);
    rect(300, 320, 2, 30);
  rect(300, 360, 2, 30);
  // draw left player
  rect(0, playerL, playerWidth, playerHeight);
  
  // draw right player
  rect(width-playerWidth, playerR, playerWidth, playerHeight);
  
  // draw ball
  ellipse(ballX, ballY, ballSize)
  
  
  /* User Input */
  // 'W' key
  if (keyIsDown(87)) {
    playerL = playerL - playerSpeed
  }
  // 'S' key
  if (keyIsDown(83)) {
    playerL = playerL + playerSpeed
  }
  
  if (keyIsDown(UP_ARROW)) {
    playerR = playerR - playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerR = playerR + playerSpeed
  }
  
  /* Game logic */
  if (playerL <= 0) {
    playerL = 0;
  }
  if (playerL > height - playerHeight) {
    playerL = height - playerHeight;
  }
  
  if (playerR <= 0) {
    playerR = 0;
  }
  if (playerR > height - playerHeight) {
    playerR = height - playerHeight;
  }
  
  ballX = ballX + ballXSpeed
  ballY = ballY + ballYSpeed
  
  // Bounce off top wall
  if (ballY < 0) {
    ballY = 0;
    ballYSpeed = -ballYSpeed;
  }

  // Bounce off bottom wall
  if (ballY > height) {
    ballY = height;
    ballYSpeed = -ballYSpeed;
  }
  
  
  // bounce off right player
  if (ballX > width - playerWidth && ballY >= playerR && ballY <= playerR + playerHeight) {
    ballX = width - playerWidth
    ballXSpeed = -ballXSpeed
  }
    // bounce off left player
  if (ballX < playerWidth && ballY >= playerL && ballY <= playerL + playerHeight) {
    ballX =  playerWidth
    ballXSpeed = -ballXSpeed
  }
  
  // playerL scores!
  if (ballX > width) {
    ballX = width/2
    ballY = height/2
    scoreL = scoreL + 1
    ballXSpeed = - ballXSpeed 
  }
    // playerR scores!
  if (ballX < 0) {
    ballX = width/2
    ballY = height/2
    scoreR = scoreR + 1
    ballXSpeed = - ballXSpeed 
  }
  if(scoreL>=5){
    background(255)
    fill(0);
  text(' playerL win!',100,200)
    
  }
    if(scoreR>=5){
    background(255)
    fill(0);
  text(' playerR win!',100,200)
    
  }
  
}

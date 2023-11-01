let hearts = [];
let ghosty = [];
let skulls = [];

let timer = 25;
let heartCount = 0;
let skullCount = 0;

let back;
let mid;
let img1;
let img2;
let imgh;

let skullx;
let skully;
let ghost;

var heartSpeed = 2;
var heartX = 10;
var heartY = 10;

let moveX = 0;

var cimg;
var x1 = 0;
var x2;
var scrollSpeed = 2;

var mode;

function preload() {
  back = loadImage("background1.png");
  cimg = loadImage("cloud.png");
  mid = loadImage("midg.png");
  img1 = loadImage("skull.png");
  img2 = loadImage("ghost.png");
  imgh = loadImage("heart.png");
}

function setup() {
  mode = 0;
  let canvas = createCanvas(700, 500);
  canvas.parent('game');
}

function draw() {

  if (mode == 0) {
    imageMode(CORNER);
    backg();
    midg();

    // loop();
    image(cimg, x1, 0, width, height);
    image(cimg, x2, 0, width, height);

    x1 -= scrollSpeed;
    x2 -= scrollSpeed;

    if (x1 < -width) {
      x1 = width;
    }
    if (x2 < -width) {
      x2 = width;
    }

    //ghost
    //image(img2, mouseX, 300, 250, 200);
    let ghostX;
    ghostX = mouseX;
    imageMode(CENTER);
    image(img2, ghostX - 15, 400, 250, 200);
    //ellipse(mouseX, 375, 75); //this tests visually helps set up the collision

    imageMode(CORNER);
    //heart
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].show();
      hearts[i].move();
      hearts[i].overlap(mouseX, mouseY);
    }
    collectHeart();
    heartSpawner();
    heartCounter();

    timer--;

    // skull
    for (let i = 0; i < skulls.length; i++) {
      skulls[i].show();
      skulls[i].move();
      skulls[i].overlap(mouseX, mouseY);



    }
    collectSkull();
    skullSpawner();
    heartCounter();

    timer--;
  } else if (mode == 1) {
    gameOver();
  }
}



//background
function backg() {
  let x = 0;
  image(back, 0, 0);
  back.resize(700, 500);
}

//mountains
function midg() {
  image(mid, 0, 0);
  let x = 0;
  mid.resize(700, 500);
}

function gameOver() {
  background(0);
  imageMode(CORNER);
  // loop();
  image(back, 0, 0, width, height);
  textAlign(CENTER);
  fill(255);
  textSize(50);
  text("GAME OVER", width / 2, 270);
  textSize(26);
  text("Refresh the Page to Start Again", width / 2, 325);
}

function startGame() {
  document.getElementById("startGame").style.display = "block";
}

function exitGame() {
  document.getElementById("startGame").style.display = "none";
}


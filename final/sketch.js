let state = 0;
let img;
let img2;
let player;
let enemy;
let floor;
let projectiles;
let lives = 3;
let enemyImg; // Variable for the uploaded enemy image
let bg;
let deathimg;
let playerimg;
let enemyhealth = 4;
let killcounter = 0; 
let victoryimg;
let projectileimg;
let heartimg;

function preload() {
  img = loadImage("sky.png");
  img2 = loadImage("2DCAT.png");
  enemyImg = loadImage("chill-guy.png");
  deathimg = loadImage("YOU DIED.png");
  playerimg = loadImage("Nazrin.png");
  victoryimg = loadImage("congratulation.png");
  projectileimg = loadImage("cheese.png");
  heartimg = loadImage ("heart.png");
}

function setup() {
  //setting up the canvas like below will allow css to control the canvas placement
  let canvas = createCanvas(600, 600);
  canvas.parent("project");
}

function keyPressed() {
  if (state === 0){

  if (keyCode === ENTER) {
    state = 1;
    playerSetup(); //this loads the player sprites
    enemySetup();
    obstacleSetup();
  }
}
  if (state === 1) {
    // Shoot projectile when spacebar is pressed
    if (kb.pressing("space")) {
      let projectile = new projectiles.Sprite();
      projectile.img = projectileimg;
      projectile.x = player.x;
      projectile.y = player.y;
      

      // Set projectile speed towards mouse
      // let angle = atan2(mouseY - player.y, mouseX - player.x);
      // let speed = 5;
      // projectile.vel.x = cos(angle) * speed;
      // projectile.vel.y = sin(angle) * speed;
      let speed =5;
      projectile.vel.x += speed;
    }
  }
}

function draw() {
  //background(0,0,0);
  if (state === 0) {
    draw1();
  } else if (state === 1) {
    draw2();
  } else if (state === 2){
    draw4();
  }
}

function draw1() {
  background(0, 0, 0);
  fill(255);
  image(img, 0, 0, 600, 600);
  textAlign(CENTER, CENTER);
  text("Welcome to Nighthouse! press enter to begin!", width / 2, height / 2 - 200);
}

function draw2() {
  clear();
  background(0, 0, 0);
  fill(255);
  image(img2, 0, 0, 600, 600);
  textAlign(CENTER, CENTER);
  // text("This is the gameplay screen", width / 2, height / 2 - 200);

  // Enemy follows the player
  enemy.moveTo(player, 2);

  if (player.collides(enemy)) {
    enemy.x = 550;
    lives--;
    player.vel.x = 0;
    player.vel.y = 0;
  }

  if (enemy.overlaps(projectiles)) {
    
    enemy.health -=2;

    if (enemy.health <=0){
      killcounter++;
      enemy.x = 550;
      enemy.health = 10; 
    }

    if (killcounter >= 3){
      state = 2;
    }

  }

  // Player controls
  if (kb.pressing("left")) player.x -= 3;
  if (kb.pressing("right")) player.x += 3;
  if (kb.pressing("up")) player.y -= 3;
  if (kb.pressing("down")) player.y += 3;

  lifeSystem(lives);
}

function draw3() {
  clear();
  background(0, 0, 0);
  image(deathimg, 0, 0, 600, 600);
  fill(255);
  // text("This is the game over screen", width / 2, height / 2 - 200);

  //this cleans the other sprites
  clearSprites();
}

function draw4(){
  clear();
  background(0, 0, 0);
  image(victoryimg, 0, 0, 600, 600);
  fill(255);
  clearSprites();
}
function enemyDmg(enemy, projectiles){
  //enemy.remove();
  enemy.health -=2;

  if (enemy.health <=0){
    enemy.remove();
  }
  console.log(enemy.health);
}

function playerDmg(projectiles, enemy){
  lives--;
  enemy.remove();
}


function clearSprites() {
  //when you make new sprites, just add them here to remove them.
  player.remove(); //single sprite removed
  enemy.remove();
  floor.remove();
  projectiles.remove(); //sprite groups removed
}

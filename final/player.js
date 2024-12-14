//player.js handles the player

function playerSetup() {
  player = new Sprite();
  player.width = 50;
  player.height = 50;
  player.x = 100;
  player.y = 300;
  player.color = color(0, 0, 255);
  player.rotationLock = true;
  player.collider = "dynamic";
  player.img = playerimg;

  projectiles = new Group();
  projectiles.d = 10;
  projectiles.collider = "none";
  projectileimg = projectileimg;
}

function lifeSystem(lifeTotal) {
  for (let i = 0; i < lifeTotal; i++) {
    // ellipse(550 - i * 25, 50, 20);
    image(heartimg, 550 - i * 25, 30, 20, 20);
  }

  if (lifeTotal <= 0) {
    draw3();
  }
}


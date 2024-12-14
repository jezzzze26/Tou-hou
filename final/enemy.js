//enemy.js handles enemies
function enemySetup() {
  enemy = new Sprite();
  enemy.width = 50;
  enemy.height = 50;
  enemy.x = 550;
  enemy.y = random(height);
  enemy.img = enemyImg; // Set the enemy image
  enemy.health = enemyhealth;
}

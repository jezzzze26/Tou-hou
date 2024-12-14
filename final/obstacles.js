//obstacles.js handles the platforms and obstacles

function obstacleSetup() {
  floor = new Sprite();
  floor.width = 10;
  floor.height = 100;
  floor.x = 300;
  floor.y = random(height);
  floor.collider = "static";

   // Sets up borders
   Tborder = new Sprite();
   Tborder.width = 600;
   Tborder.height = 10;
   Tborder.x = 300;
   Tborder.y = -5;
   Tborder.collider = "static"; 
   
   Bborder = new Sprite();
   Bborder.width = 600;
   Bborder.height = 10;
   Bborder.x = 300;
   Bborder.y = 605;
   Bborder.collider = "static"; 
 
   Lborder = new Sprite();
   Lborder.width = 10;
   Lborder.height = 600;
   Lborder.x = -5;
   Lborder.y = 300;
   Lborder.collider = "static"; 
   
   Rborder = new Sprite();
   Rborder.width = 10;
   Rborder.height = 600;
   Rborder.x = 605;
   Rborder.y = 300;
   Rborder.collider = "static"; 
}


var mario;
var platformGroup, wallGroup, enemyGroup;
var gameWidth;
function preload()
{
  marioAnimation=loadAnimation("images/Capture1.png","images/Capture4.png","images/Capture3.png");
  obstacle=loadAnimation("images/obstacle1.png");
  wallAnimation=loadAnimation("images/wall.png");
  flagAnimation=loadAnimation("images/Flag.png");
  groundAnimation=loadAnimation("images/ground.png");
}

function setup() {
  //Creating canvas equal to width and height of display
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  var gap;
  
  //creating a player mario
  mario = new Player();
  
  //creating a group
  platformGroup= createGroup();
  wallGroup=createGroup();
  enemyGroup=createGroup();

  //adding platforms to stand for mario
  for (var i=0;i<24;i++)
	 {
      platform = new Platform(countDistanceX);
      platformGroup.add(platform.spt);//Adding each new platform to platformGroup
      if(i%3==0)
      {
      wall =new Walls(countDistanceX);
      wallGroup.add(wall.spt);
      }

      if(i%3==0)
      {
      enemy=new Obstacles(countDistanceX);
      enemyGroup.add(enemy.spt);
      }

      countDistanceX = countDistanceX + platform.rw//counting x location of next platform to be build   
    }
    gameWidth=countDistanceX-platform.rw; 
}

function draw() {
  background('skyblue');

  //code to move the camera
  translate(  -mario.spt.x + width/2 , 0);
  
  //apply gravity to mario and set colliding with platforms
  mario.applyGravity();
  mario.spt.collide(platformGroup);
  mario.spt.collide(wallGroup);

  enemyGroup.collide(platformGroup);
  enemyGroup.collide(wallGroup); 

  //Calling various function to controll mario
  if (keyDown("left"))  
  { 
    mario.moveLeft();
  }
  if (keyDown("right")) 
  { 
    
    mario.moveRight();
  }
  if (keyDown("up") && mario.spt.velocityY===0 &&(mario.spt.y==465.15999999999997 || mario.spt.y==304.65999999999997 || mario.spt.y==164.66)) 
  { 
    
    mario.jump();
  }
   drawSprites();
}




var sky,sky_img;
var Boom;
var Player,Player_img;
var Enemy;
var Enemy_2,Enemy_1;
var Nuker;
var gameState = 1;
var score;
var Enemy_Missile;
var Enemy_2_Missile;

function preload()
{
    sky_img = loadImage("sky.jpg");
    Blast = loadImage("Blast.jpeg");
    Player_img = loadImage("F - 35.png");
    Enemy_1_img = loadImage("player.png");
    Enemy_2_img = loadImage("Enemy_2.jpeg");
    Nuker_img = loadImage("Nuke.png");
    Enemy_Missile_img = loadImage("Enemy Missile.png");
    Enemy_2_Missile_img = loadImage("Enemy_2_Missile.png");
}

function setup()
{ 
  var message;
  createCanvas(600,600) 
    sky = createSprite(600,600); 
    sky.addImage(sky_img); 
     
    Boom = createSprite(600,400); 
    Boom.addImage(Blast); 
    Boom.scale = 0.6; 
 
    Player = createSprite(600,100); 
    Player.addImage(Player_img); 
    Player.scale = 0.5; 
 
    Enemy = createSprite(200,20); 
    Enemy.addImage(Enemy_1_img); 
    Enemy.scale = 0.5; 
    Enemy.velocityY = 0.5; 
 
    Enemy_2 = createSprite(100,30); 
    Enemy_2.addImage(Enemy_2_img); 
    Enemy.scale = 0.5; 
    Enemy.velocityY = 0.5; 
 
    Nuker = createSprite(600,100); 
    Nuker.addImage(Nuker_img); 
    Nuker.scale = 0.05; 
    Nuker.velocityY = -5; 

    Enemy_Missile = createSprite(200,20);
    Enemy_Missile.addImage(Enemy_Missile_img);
    Enemy_Missile.scale = 0.05;
    Enemy_Missile.velocityY = 5;

    Enemy_2_Missile = createSprite(100,30);
    Enemy_2_Missile.addImage(Enemy_2_Missile_img)
    Enemy_2_Missile.velocityY = 5;
    Enemy_2_Missile.scale = 0.05
}
function draw()
{
  if(gameState ===  1) 
  {
    if(keyDown("left_arrow"))
    {
        player.x = player.x+5
    }
    if(keyDown("right_arrow"))
    {
        player.x = player.x -5
    }
    if(keyDown("Space"))
    {
      Nuker.x = player.x;
      Nuker.y = plane.y -40;
      Nuker.velocityY = -5;
    }
   if(Nuker.isTouching(Enemy))
   {
    Enemy.Math.round(random(5,550));
    score = score+1
   }
   if(Nuker.isTouching(Enemy_2));
   {
    Enemy_2.x=Math.round(random(6,500));
    score = score+1;
   }
   if(Nuker.isTouching(Enemy))
   {
    Enemy.changeImage(Blast)
   }
   if(Nuker.isTouching(Enemy_2))
   {
    Enemy_2.changeImage(Blast)
    }
   textSize(30);
   fill(0, 0, 0);
   text("SCORE:" + score,25,50)

    drawSprites();
 }

}
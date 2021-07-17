var characterimg,ch;
var monsterimg;
var bgimage,bg;


function preload(){
  characterimg = loadAnimation("images/c1.png", "images/c3.png", "images/c5.png", "images/c6.png", "images/c7.png", "images/c8.png", "images/c9.png", "images/c10.png", "images/c11.png", "images/c12.png", "images/c13.png","images/c14.png" ,"images/c15.png","images/c16.png")
  monsterimg = loadAnimation(" images/m1.png","images/m2.png", "images/m3.png", "images/m4.png", "images/m5.png", "images/m6.png", "images/m7.png", "images/m8.png", "images/m9.png", "images/m10.png", "images/m11.png", "images/m12.png", "images/m13.png")
  bgimage = loadImage("images/junglebg.gif")
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(width/2,height/2-300);
  bg.addImage(bgimage);
  bg.scale = 4.7;
  bg.velocityX = -20
  
  ch = createSprite(100, height-200);
  ch.addAnimation("character",characterimg);
 // ch.scale = 1

 
  
}

function draw() {
  
  background(255);
  
   if(bg.x<200){
     bg.x = width/2
   }
  
  spawnMonsters();
  drawSprites();
}

function spawnMonsters(){
  if(frameCount%200===0){
    monster = createSprite(width+50,height-150);
    monster.addAnimation("mon",monsterimg)
    monster.velocityX = -7
    monster.scale = 1.3
  }
}
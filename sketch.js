var bg,bgImg;
var player, shooterImg, shooter_shooting;
var ground;
var zombie , zombieimg;
var ammo = 50 , bullet , bulletimg;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
 bulletimg = loadImage("assets/bullet.png")
  bgImg = loadImage("assets/bg.jpeg")
zombieimg = loadImage("assets/zombie.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);


  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

ground = createSprite(windowWidth/2,windowHeight/2+260,windowWidth,20)
ground.visible = false


player = createSprite(displayWidth-1200, displayHeight-300, 50, 50);
player.addImage(shooterImg)
player.scale = 0.3
player.setCollider("rectangle",0,0,250,420)

zombie = createSprite(displayWidth,displayHeight-400,40,100)
zombie.velocityY = 12
zombie.velocityX = -2
zombie.addImage(zombieimg)
zombie.scale = 0.35
zombie.setCollider("rectangle",0,0,250,440)
   

}

function draw() {
  background(bgImg); 





if(keyDown("UP_ARROW")&&player.y>500){
  player.y = player.y-250
}
 player.y = player.y+3


if(keyWentDown("space")){
  player.addImage(shooter_shooting)
}

else if(keyWentUp("space")){
  player.addImage(shooterImg)
  makeBullet();
  ammo -=1
}

if(keyDown("R")){
ammo = 50
}




player.collide(ground)
zombie.collide(ground)

drawSprites();

if(ammo>0){
textSize(30)
fill("orange")
stroke("red")
text("Ammo : "+ammo,25,35)
}else{
textSize(30)
fill("orange")
stroke("red")
text("Ammo : "+0,25,35)
text("Press  R to reload",25,75)
}

}

function makeBullet(){
  if(ammo > 0){
  bullet = createSprite(player.x+76,player.y-36,10,10)
  bullet.velocityX = 8.5
  bullet.addImage(bulletimg)
  bullet.scale = 0.1
  }
}

function zombiedie(){
  zombie.visible = false
}







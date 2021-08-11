var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var passedFinish;
var obstacles;
var s;

var form, player, game;

var cars, car1, car2, car3, car4;
var i, track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  f2 = loadImage("images/sword.png");


  track = loadImage("images/track.jpg");
  car1_img = loadAnimation("images/runner1.png","images/runner1b.png");
  car2_img = loadAnimation("images/runner2.png","images/runner2b.png");
  car3_img = loadAnimation("images/runner3.png","images/runner3b.png");
  car4_img = loadAnimation("images/runner4.png","images/runner4b.png");
  ground = loadImage("images/ground.png");
  bronze_img=loadImage("images/bronze.png");
  gold_img=loadImage("images/gold.png");
  silver_img=loadImage("images/silver.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;
  obstacles=createGroup();

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  for(i=0;i<5;i++)
  {
    w=random(200,950);
    h=random(-height*4,height-300);
  f1 = createSprite(w,h);
  //car1.debug="true";
  f1.addImage("f1",f2);
  f1.scale=0.3
  obstacles.add(f1);
 }
}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if(finishedPlayers===4){
     game.update(2)
   }
if(gameState===2&&finishedPlayers===4){
  game.displayRanks()
}



  }
 function keyPressed(){
   if(keyCode===13&&gameState!==1&&passsedFinish===false){
     form.enter()
     console.log("hi")
     passsedFinish=true
   }
 }
  

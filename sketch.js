var form,game,player
var database
var playerCountTeamA=0,playerCountTeamB=0
var bex,bexImg
var gameState=0

function preload(){
  bexImg=loadImage("images/Bex.3.5.png")
 
}
function setup() {
  database=firebase.database();
  createCanvas(displayWidth,displayHeight);

  bex=createSprite(600,400,10,10)
  bex.addImage(bexImg)
  bex.scale=0.2

  
  game=new Game();
  game.start();
  
  
}

function draw() {
  background(255,255,255);  
  

  }

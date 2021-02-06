var startButton,but_next1,nextImg;
var gameState=0;
var sea_calm,sea_shore_island,sea_storm,shipImg;
var ship,ship_brokenImg;
var narrator_img,narrator;
var captain,captainImg;

function preload(){
sea_calm=loadImage("images/sea_calm.jpg");
sea_shore_island=loadImage("images/sea_shore_island.jpg");
sea_storm=loadImage("images/sea_storm.jpg");
shipImg=loadImage("images/ship.png");
narrator_img=loadImage("images/narrator.png");
ship_brokenImg=loadImage("images/ship_broken.png");
captainImg=loadImage("images/captain.png");
nextImg=loadImage("images/next.png");
}

function setup() {
createCanvas(windowWidth, windowHeight);
startButton=createButton("START THE GAME....!!");
startButton.position(width/2-50,height-200);
startButton.mousePressed(start);
but_next1=createButton("NEXT");
but_next1.position(width/2-50-150,height-150-50);
//but_next1.addImage(nextImg);
but_next1.mousePressed(next);

ship=createSprite(width/2,height/2);
ship.addImage(shipImg);
ship.scale=0.5;
narrator=createSprite(width-200,height/2+100);
narrator.addImage(narrator_img);
narrator.scale=3.52;
captain=createSprite(width-200,height/2+100);
captain.addImage(captainImg);

}

function draw() {
if(gameState===0){
background(0);
fill('white');
stroke(255,0,0);
strokeWeight(4);
textSize(28);
text("Welcome To My Game",width/2-100,height/10);
textSize(22);
text("You are a Ship Captain & is on a voyage around the World",width/3,height/10+100);
text("Can you & your Crew make it??.... Will you SURVIVE???",width/3,height/10+200);
startButton.show();
but_next1.hide();

ship.visible=false;
narrator.visible=false;
captain.visible=false;
}else if(gameState===1)
{
background(sea_calm);
startButton.hide();
but_next1.show();

ship.visible=true;
narrator.visible=true;
captain.visible=false;
drawSprites();
fill(Infinity);
stroke(0);
strokeWeight(3);
textSize(24);
text("Hello! The Journey is Good Till Now! Hope You Are Enjoying.....",width/10,height-15);

}else if(gameState===2){
but_next1.show();
startButton.hide();

background(sea_storm);
ship.visible=false;
captain.visible=false;

narrator.visible=true;

drawSprites();
fill(Infinity);
stroke(0);
strokeWeight(3);
textSize(24);
text("What's Happening?? A Teribble Storm!! Captain!!!!",width/10,height-15);
}else if(gameState===3){
startButton.hide();
but_next1.show();

narrator.visible=false;
captain.visible=false;
background(0,255);
}else if(gameState===4){
  but_next1.show();

  narrator.visible=true;
  background(sea_shore_island);
  ship.visible=true;
  ship.addImage(ship_brokenImg);
  ship.scale=1.2;
  drawSprites();
  fill(Infinity);
stroke(0);
strokeWeight(3);
textSize(24);
text("What just Happened???.... Where are we? What happened to ship??It's completely broken Captain!!",width/10,height-15);
}else if(gameState===5){
  but_next1.show();

  narrator.visible=false;
  captain.visible=true;
  background(sea_shore_island);
  drawSprites();
fill(Infinity);
stroke(0);
strokeWeight(3);
textSize(24);
text("Yeah! I can also see it's broken. Where are we now??? This place is not even in the map",width/10,height-15);
}else if(gameState===6){
  but_next1.show();
  
    narrator.visible=false;
    captain.visible=true;
    background(sea_shore_island);
    drawSprites();
    fill(Infinity);
stroke(0);
strokeWeight(3);
textSize(24);
text("I think this is a deserted island! Hey You All! U Okay?? Take whatever is there in the ship & come with me",width/10,height-15);
}else if(gameState===7){
  but_next1.show();
    narrator.visible=false;
  captain.visible=true;
  background(0);
}
}

function start(){
gameState=1;
}

function next(){
gameState++;
}


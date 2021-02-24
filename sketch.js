var database;
var balloon;
var position;
var backgroundImage;


function preload() {

}
function setup() {
  database = firebase.database();
  createCanvas(500,500);
  balloon = loadImage("images/Hot Air Ballon-02.png")
  balloonSprite = createSprite("300,300,50,50")
  balloonSprite.addImage(balloon);
  //balloonSprite.x = 500;
  //balloon.y = 400;
  backgroundImage = loadImage("images/Hot Air Ballon-01.png")


  //var balloonPosition = database.ref("balloon/position")
  //balloonPosition.on("value",readPosition)    
}

function draw() {
  background(backgroundImage);  
  if(keyDown(LEFT_ARROW)){
    balloonSprite.x = balloonSprite.x - 10;
    //changePosition(-10,0);
  } else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
    //balloonSprite.x = balloonSprite.x+10;
    //changePosition(10,0);
  } else if(keyDown(UP_ARROW)){
    changePosition(0,-10);
  } else if(keyDown(DOWN_ARROW)){
    changePosition(0,+10);
  }
  drawSprites();
}

function changePosition(x,y){
  console.log("x: " +balloonSprite.x);
  balloonSprite.x = balloonSprite.x+x;
  balloonSprite.y = balloonSprite.y+y;
  //database.ref("balloon/position").set ( {
  //    x:position.x+x,
  //    y:position.y+y
  //} )
}

function readPosition(data) {
  position = data.val();
  balloon.x = position.x;
  balloon.y = position.y;
}



 
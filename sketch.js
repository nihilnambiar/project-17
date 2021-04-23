
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,backImage
var FoodGroup, obstacleGroup
var score
var addImage;
var score=0


function preload(){
  // backImage=loadImage("jungle.jpg")
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png",
                                "sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 // creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
   obstaclesGroup = new Group();
  foodGroup = new Group();
  
  
 
}


function draw() {
  background(255)

  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground);
  
  
  spawnBananas(); 
  spawnObstacles();
  drawSprites();
 

if(obstaclesGroup.isTouching(monkey)){
       monkey.scale=0.12
}
  
  if (foodGroup.isTouching(monkey)){
    score=score+2;
    foodGroup.destroyEach();
  }
  switch(score){
    case 10: monkey.scale=0.20
      break;
      case 20: monkey.scale=0.30;
      break;
      default:break;
  }

  
 
  stroke("black");
  textSize(20);
  fill("black");
  text("Score:" + score,300,100)

}
  
    function spawnObstacles(){
 if (frameCount % 100 === 0){
   var obstacle = createSprite(400,320,10,40);
   obstacle.velocityX = -6 
   
  obstaclesGroup.add(obstacle)
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
    obstacle.lifetime=300;
  }  
  
  
  
    }
function spawnBananas(){
  if (frameCount % 60 === 0){
   var banana = createSprite(400,80,10,40);
 banana.velocityX =-6;
    banana.y=random(100,300)
    banana.addImage(bananaImage);
  banana.scale=0.1;
    banana.lifetime=300;
     foodGroup.add(banana)

}
}

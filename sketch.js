//Create variables here

var dog, happyDog, database, foodS, foodStock,dogimg;
function preload()
{
  //load images here
  dogimg=loadImage("dogImg1.png");
  happyDog=loadImage("dogImg.png");
}






function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
  dog.addImage(dogimg)

  database=firebase.database();
    var foodStock= database.ref("food")
   foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog)
}
  drawSprites();
  
  text("note:press up arrow key to feed drago milk")

}
function readStock(data){
foods-data.val();
}
function writeStock(x){
  if(x<=0){
x=0
  }else{
    x=x-1
  }
database.ref('/').update({
  food:x
})
}


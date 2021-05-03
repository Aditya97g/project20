var background,backgroundImg;
var tom;
var jerry;
var tomImg1,tomImg2,tomImg3;
var jerryImg1,jerryImg2,jerryImg3;





function preload() {
backgroundImg=loadImage("images/garden.png");
tomImg1=loadAnimation("images/tomOne.png")
tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png")
tomImg3=loadAnimation("images/tomFour.png")
jerryImg1=loadAnimation("images/jerryOne.png")
jerryImg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png")
jerryImg3=loadAnimation("images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
tom=createSprite(700,600,50,50);
tom.addAnimation("tomImage",tomImg1);
jerry=createSprite(200,600,50,50);
jerry.addAnimation("jerryImage1",jerryImg1);
tom.scale=0.2;
jerry.scale=0.15;
}

function draw() {

    background(backgroundImg);
if(tom.x-jerry.x<(tom.width-jerry.width)/2);
{
tom.velocityX=0;
tom.addAnimation("tomimage3",tomImg3);
jerry.addAnimation("jerryImage3",jerryImg3);

tom.changeAnimation("tomimage3",tomImg3);
jerry.velocityX=0;
jerry.changeAnimation("jerryImage3",jerryImg3);

}

 

 drawSprites();
}


function keyPressed(){

if(keyCode=== RIGHT_ARROW)
{
  jerry.changeAnimation("jerryimage2",jerryImg2);
  tom.changeAnimation("tomImage2",tomImg2);
  tom.velocityX=5;
}
if(keyCode=== LEFT_ARROW)
{  jerry.addAnimation("jerryimage2",jerryImg2);
tom.addAnimation("tomImage2",tomImg2);

  jerry.changeAnimation("jerryimage2");
  tom.changeAnimation("tomImage2");
  tom.velocityX=-5;
}

}






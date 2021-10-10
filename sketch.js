var bg, bgImage;

function preload() {
    //load the images here
   bgImage=loadImage("images/space.jpg")
}

function setup(){
    createCanvas(1000, 800);
    bg = createSprite(width/2, height/2);
    bg.addImage("bg", bgImage);
    bg.scale=1

    planet = new Earth ()
}

function draw() {

    background("black");
   
    drawSprites();
    planet.display();
}


function keyPressed(){

  

}

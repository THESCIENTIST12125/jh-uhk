
var database
var playerCount
var gameState
var gam
var play
var Form


function setup(){
    createCanvas(500,500);
    
    database=firebase.database()
   gam=new Game()
   gam.start()
 
    

}

function draw(){
    background("white");
   
    drawSprites();
}


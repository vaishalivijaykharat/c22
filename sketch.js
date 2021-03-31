const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Bodies;

var e , w , g;
var b;


function setup() {
  createCanvas(800,400);
  e=Engine.create();
  w=e.world;
 g=Body.rectangle(200,390,400,20,{isStatic:true}); 
 World.add(w,g); 
 b=Body.circle(200,100,20,{restitution:1.0}); 
 World.add(w,b);  
  }

function draw() {
  background(255,255,255);  
 Engine.update(e);

rectMode(CENTER);
rect(g.position.x,g.position.y,400,20);

ellipseMode(CENTER);
ellipse(b.position.x,b.position.y,20);


}
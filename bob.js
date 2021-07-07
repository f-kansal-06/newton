class Bob {
    constructor(x,y,r){
   var options = {
       density : 0.8,
       restitution : 1 
   }
   this.x = x;
   this.y= y;
   this.r = r;
   this.body = Bodies.circle(this.x,this.y,this.r,options);
   World.add(world,this.body);
    }

    display(){
       push();
       translate(this.body.position.x,this.body.position.y);
       fill(red);
       ellipse(0,0,this.r,this.r);
       pop(); 
    }
}
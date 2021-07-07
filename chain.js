class Rope{
    constructor(){

    }

    display(){
        strokeWeight(2);
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,
            this.rope.bodyB.position.x + this.offsetX,
            this.rope.bodyB.position.y+this.offsetY);
    }
}


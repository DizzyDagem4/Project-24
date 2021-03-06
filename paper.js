class Paper { 
    constructor(x,y,width,height) {
        var options = {
            isStatic:false,
            restitution:0.3 , 
            friction:0.5, 
            density:1.2,
        }
        this.body = Bodies.circle(x,y,width,height,options);
        this.width = width;
        this.height = height; 

        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position; 
        var angle= this.body.angle; 
        push();
        translate(pos.x, pos.y)
        rotate(angle);
        rectMode(RADIUS);
        fill("white") 
        pop();
    }
}
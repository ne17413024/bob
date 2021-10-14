class Bob{
    constructor(x, y, width, height, angle) {
        var options = {
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/bob.png");
        World.add(world, this.body);
      }
    

    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);

        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 200, 20, this.width, this.height);
        pop();

    }
    
}
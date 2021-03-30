class hammer {
    constructor( width, height) {
      var options = {
          friction : 0.5,
          restitution : 0.7,
          density : 0
      }
      this.body = Bodies.rectangle(World.mouseX,World.mouseY, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      push();
      translate(pos.x, pos.y);
      
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
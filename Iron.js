class iron {
    constructor(x, y, width, height) {
      var options = {
          restitution : 0.8,
          friction : 3,
          density : 30
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.Body.setStatic(this.body,true)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("pink");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
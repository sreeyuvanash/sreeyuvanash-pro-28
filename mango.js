class mango {
    constructor(x, y) {
      var options = {
        isStatic: true

      }
      this.boy = loadImage('img/boy.png');
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 55;
      this.height = 55;
      this.image = loadImage("img/mango.png");



      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      image(this.boy,50,400,400,400)
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
  
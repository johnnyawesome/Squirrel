
function moveWorld() {

  //If not running, don't move the World
  if (!squirrel.running) {
    backgroundBack.speed = 0;
    backgroundFar.speed = 0;
    backgroundMiddle.speed = 0;
    ground.vel.x = 0;
    plants.speed = 0;
    moss1.speed = 0;
    moss2.speed = 0;
    squirrel.velocity.x = 0;
    for (let bird of birds) bird.speed = -2

    //If running, move the World.
  } else {
    //If we're facing right, move toe World right
    if (squirrel.looking === "right") {
      backgroundBack.speed = -0.5;
      backgroundFar.speed = -1;
      backgroundMiddle.speed = -2;
      ground.vel.x = -2;
      plants.speed = -2;
      moss1.speed = -2;
      moss2.speed = -2;
      squirrel.velocity.x = 0.00000000001;
      acorn.velocity.x = -2;
      for (let bird of birds) bird.speed = -4

      //If we're facing left, move toe World left
    } else if (squirrel.looking === "left") {
      backgroundBack.speed = 0.5;
      backgroundFar.speed = 1;
      backgroundMiddle.speed = 2;
      ground.vel.x = 2;
      plants.speed = 2;
      moss1.speed = 2;
      moss2.speed = 2;
      squirrel.velocity.x = -0.00000000001;
      acorn.velocity.x = 2;
      for (let bird of birds) bird.speed = 0
    }
  }
}


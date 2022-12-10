function squirrelBehavior() {

  squirrel.ani.frameDelay = 8;

  squirrel.ani.scale.x = 1.65;
  squirrel.ani.scale.y = 1.65;

  //If there is no food, Idle
  if (!acorn || (acorn && acorn.removed)) {

    //Idle
    if (squirrel.idle) {

      //Different Idle-Animations
      if (squirrel.idleCount <= 300) squirrel.ani = "IdleR";
      if (squirrel.idleCount > 300) {
        squirrel.ani.frameDelay = 15;
        squirrel.ani = "Idle2R";
      }
      if (squirrel.idleCount > 320) squirrel.idleCount = 0;
      squirrel.idleCount++;

      //Eating
    } else if (squirrel.eating) {

      squirrel.ani = "EatR";

      if (squirrel.eatingCount <= 0) {
        squirrel.eatingCount = 200;
        squirrel.eating = false;
        squirrel.idle = true;
        acorn = null;
      }

      squirrel.eatingCount--;
    } else if (squirrel.digging) {

      squirrel.ani = "DigR";

      if (squirrel.diggingCount <= 0) {
        squirrel.diggingCount = 200;
        squirrel.digging = false;
        squirrel.idle = true;
        acorn = null;
      }

      squirrel.diggingCount--;
    }
  } else if (acorn && !acorn.removed && acorn.colliding(ground) > 0 && acorn.colliding(ground) <= 5) {
    squirrel.x - acorn.x >= 0 ? squirrel.looking = "left" : squirrel.looking = "right";
    squirrel.ani = "DamageR";
  } else if (acorn && !acorn.removed && acorn.colliding(ground) > 5) {

    squirrel.running = true;
    squirrel.ani = "RunR";

    const acornDist = squirrel.x - acorn.x;

    if (acornDist >= 0 && abs(acornDist) > 5) {
      squirrel.looking = "left";
      squirrel.mirror.x = true;
    } else if (acornDist < 0 && abs(acornDist) > 5) {
      squirrel.looking = "right";
      squirrel.mirror.x = false;
    } else {
      squirrel.ani = "IdleR";
      squirrel.running = false;
    }
  }
}